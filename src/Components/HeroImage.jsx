import React from 'react';
import Poster from '../images/Poster.png';
import tv from '../images/tv.png';
import imdb from '../images/imdb.png';
import rt from '../images/rt.png';


const HeroImage = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Poster})`,
  };
  return (
    <div className='hero-image' style={backgroundImageStyle}>
      <div className='navbar'>
        <div className='logo'>
          <img src={tv} alt='Logo' /> MovieBox
        </div>

        <div className='search'>
          <input
            type='text'
            class='form-control border-0 bg-transparent w-100 '
            
         
          />
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
          >
            <path
              d='M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z'
              stroke='white'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </div>
        <div className='menu'>
          Sign In
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z'
              fill='white'
            />
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z'
              fill='white'
            />
          </svg>
        </div>
      </div>

      <div className='description-box'>
        <h1 className='her0-movie-title'>
          John Wick 3:
          <br />
          Parabellum
        </h1>
        <div className='rating'>
          <img src={imdb} alt='imdb' /> 86.0 / 100 &nbsp; &nbsp;
          <img src={rt} alt='rotten tomatoes' /> 96%
        </div>
        <p className='hero-movie-description'>
          John Wick is on the run after killing a member <br />
          of the international assassins' guild, and with <br /> a $14 million
          price tag on his head, he is the
          <br /> target of hit men and women everywhere.
        </p>
        <button className='watch-trailer-button'>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z'
              fill='white'
            />
          </svg>
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
