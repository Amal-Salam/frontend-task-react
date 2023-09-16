import tv from '../images/tv.png';
import home from '../images/Home.png';
import movies from '../images/Projector.png';
import tvShow from '../images/TV-Show.png';
import upcoming from '../images/Calendar.png';

import { NavLink } from 'react-router-dom';

const Sidebar = ({id}) => {
  return (
    <div className='fixed sb-dimensions'>
      {/* <div className=' bg-white rounded-2 border border-black border-opacity-30 d-md-flex flex-column  '> */}
      <div className='text-black mb-4 mx-2 my-3'>
        <img src={tv} alt='Logo' className='mx-3 ' />{' '}
        <p className='lg-sb-tx'>MovieBox</p>
      </div>
      <div className='sidebar-Links text-center'>
        <NavLink to='/' className='sidebar-Links '>
          <img
            src={home}
            alt='home'
            className='inline-block w-6 h-6 me-2 sb-tx'
          />
          <p className='sb-tx'>Home</p>
        </NavLink>
        <NavLink className='sidebar-Links'>
          <img
            src={movies}
            alt='movies'
            className='inline-block w-6 h-6 me-2'
          />
          <p className='sb-tx'>Movies</p>
        </NavLink>
        <NavLink to='/' className='sidebar-Links'>
          <img
            src={tvShow}
            alt='tvShow'
            className='inline-block w-6 h-6 me-2'
          />
          <p className='sb-tx'>Tv Series</p>
        </NavLink>
        <NavLink to='/' className='sidebar-Links'>
          <img
            src={upcoming}
            alt='upcoming'
            className='inline-block w-6 h-6 me-2'
          />
          <p className='sb-tx'>Upcoming</p>
        </NavLink>
      </div>
    </div>
    // </div>
  );
};

export default Sidebar;
