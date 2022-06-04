import usrProfile from '../assets/images/profile-1.jpg';
import { SearchBar, ThemeToggler } from './all';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <h2 className='log'>
          <NavLink to='/'>MetaGram</NavLink>
        </h2>

        <SearchBar />

        <div className='nav-options'>
          <ThemeToggler />
          <label className='btn btn-primary create-post-btn' for='create-post'>
            Create
          </label>
          <div className='profile-photo'>
            <img src={usrProfile} alt='profile picture' />
          </div>
        </div>
      </div>
    </nav>
  );
};
