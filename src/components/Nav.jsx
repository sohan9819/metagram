import usrProfile from '../assets/images/profile-1.jpg';
import { SearchBar } from './all';

export const Nav = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <h2 className='log'>
          <a href='./landing.html'>MetaGram</a>
        </h2>

        <SearchBar />

        <div className='nav-options'>
          <label className='btn btn-primary' for='create-post'>
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
