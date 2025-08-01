// components/Home.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Search from './Search.jsx'
import Spinner from './Spinner.jsx';
import MovieCard from './MovieCard.jsx';
import { useDebounce } from 'react-use';
import { updateSearchCount, getTrendingMovies } from '../appwrite.js';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [moviesList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);

  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 500, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURI(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Failed to fetch movies`);
      }

      const data = await response.json();
      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }

    } catch (error) {
      console.error(`Error while fetching movies: ${error}`);
      setErrorMessage(`Error fetching movies. Please try again later.`);
    } finally {
      setIsLoading(false);
    }
  }

  const loadTrendingmovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error(`Error fetching trending movies:${error}`);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingmovies();
  }, []);

  return (
    <main>
      <div className='pattern' />
      <div className='wrapper'>
        <img src="./hero-img.png" alt='Hero Banner' />
        <header>
          <h1>Find <span className='text-gradient'>movies</span> you'd enjoy without hassle</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <h2 className='text-xl font-bold mb-2 mt-6'>Trending</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {trendingMovies.map((movie, index) => (
            <li key={movie.$id} className="relative">
              <Link to={`/movie/${movie.movie_id}`}>
                <div className="group relative overflow-hidden rounded-md">
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="rounded-md w-full h-[240px] object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-2 py-1 rounded shadow-md">
                    #{index + 1}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <section className="all-movies mt-8">
          <h2 className='text-xl font-bold mb-2'>All Movies</h2>
          {isLoading ? (
            <p className="text-white">
              <Spinner />
            </p>
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {moviesList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  )
}

export default Home;