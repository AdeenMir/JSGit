// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/movie/${id}?append_to_response=credits`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error('Movie not found');
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchMovie();
    }
  }, [id]);

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  const backgroundUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : './No-Movie.png';

  return (
    <div className="text-white">
      <div
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full md:w-1/3 rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <p className="text-sm text-gray-400 mb-4">{movie.tagline}</p>
            <p className="mb-4">{movie.overview}</p>
            <p className="mb-2"><strong>Release Date:</strong> {movie.release_date}</p>
            <p className="mb-2"><strong>Rating:</strong> {movie.vote_average?.toFixed(1)}</p>
            <p className="mb-2"><strong>Genres:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          </div>
        </div>

        {movie.credits?.cast?.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Top Cast</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {movie.credits.cast.slice(0, 10).map((member) => (
                <div
                  key={member.cast_id}
                  className="bg-white/10 p-3 rounded-lg text-center backdrop-blur-sm shadow-lg"
                >
                  <img
                    src={member.profile_path
                      ? `https://image.tmdb.org/t/p/w200${member.profile_path}`
                      : './No-Movie.png'}
                    alt={member.name}
                    className="w-full h-[200px] object-cover rounded mb-2"
                  />
                  <p className="font-semibold text-sm">{member.name}</p>
                  <p className="text-xs text-gray-300">{member.character}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;