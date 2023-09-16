import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import play from '../images/Play.png';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  let { id } = useParams();
  const dateInUTC = new Date(movie.release_date).toUTCString();

  useEffect(() => {
    // TMDB Api key
    const apiKey = '6633ae0162945fe65c8b8d35f2cc36d8';

    // Fetches movie details from api
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-3'>
          <Sidebar />
        </div>

        <div className='col-md-9 movie-image'>
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
            }}
            className='img-fluid rounded-4 w-100 h-100 mt-5 d-flex justify-content-center align-items-center'
          >
            <div className='d-flex flex-column align-items-center '>
              <img src={play} alt='' />
              <p className='h2 font-weight-medium text-[#E8E8E8]'>
                Watch Trailer
              </p>
            </div>
          </div>
          <div className='mx-3 my-4'>

          <h2 className='text-black' data-testid='movie-title'>
            {movie.title}
          </h2>
          <p className='text-black' data-testid='movie-release-date'>
            { dateInUTC }
          </p>
          <p className='text-black' data-testid='movie-runtime'>
           {movie.runtime} minutes
          </p>
          <p className='text-black' data-testid='movie-overview'>
            {movie.overview}
          </p></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
