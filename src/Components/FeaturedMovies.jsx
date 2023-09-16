import React, { useState, useEffect } from 'react';
import HeroImage from './HeroImage';
import Footer from './Footer';
import imdb from '../images/imdb.png';
import rt from '../images/rt.png';
import { Link } from 'react-router-dom';

const FeaturedMovies = (id) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TMDB apikey
    const apiKey = '6633ae0162945fe65c8b8d35f2cc36d8';

    // Fetch top 10 movies from the TMDB API using the fetch API
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US`
      
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.results.splice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching top-rated movies:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeroImage />
      <div className='featured-movies container-md mx-auto py-4 px-3 px-md-0'>
        <h2 className='fw-bold fs-4 fs-sm-5'>Featured Movies</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='movie-grid'>
            {movies.map((movie) => (
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className='movie-card card'
                  key={movie.id}
                  data-testid='movie-card'
                >
                  <img
                    className='movie-poster img-fluid'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    data-testid='movie-poster'
                  />
                  <div
                    className='movie-release text-secondary'
                    data-testid='movie-release-date'
                  >
                    {movie.release_date}
                  </div>
                  <h3
                    className='movie-title fw-bold fs-6 fs-md-5 lh-4 lh-md-normal'
                    data-testid='movie-title'
                  >
                    {movie.title}
                  </h3>
                  <div className='rating2'>
                    <img src={imdb} alt='imdb' />{' '}
                    {(movie.vote_average * 10).toLocaleString()}/ 100 &nbsp;
                    &nbsp;
                    <img src={rt} alt='rotten tomatoes' /> 96%
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};



export default FeaturedMovies;
