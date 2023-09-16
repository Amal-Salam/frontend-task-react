import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import FeaturedMovies from './Components/FeaturedMovies';
import MovieDetails from './Components/MovieDetails';
import './index.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FeaturedMovies />} />
          <Route path="/movies/:id" element={<MovieDetails/>} />
        </Routes>

     
      </BrowserRouter>
    </>
  );
}

export default App;




