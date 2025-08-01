import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const {
    id,
    title,
    vote_average,
    poster_path,
    release_date,
    original_language,
  } = movie;

  return (
    <Link to={`/movie/${id}`}>
      <div className="movie-card transform transition-transform duration-300 hover:scale-105 hover:shadow-xl rounded overflow-hidden bg-zinc-900 hover:bg-zinc-800">
        <img
          src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : './No-Movie.png'}
          alt={title}
          className="w-full h-[300px] object-cover"
        />

        <div className='p-3'>
          <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
          <div className='flex items-center gap-2 text-sm text-gray-300 mt-1'>
            <div className='flex items-center gap-1'>
              <img src="/star.svg" alt="Star Icon" className="w-4 h-4" />
              <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            </div>
            <span>•</span>
            <p>{original_language?.toUpperCase()}</p>
            <span>•</span>
            <p>{release_date ? release_date.split('-')[0] : "N/A"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;