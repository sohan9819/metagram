import usrProfile from '../assets/images/default_profile.jpg';
import { SearchBar, ThemeToggler } from './all';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectCurrentUserStatus,
  selectCurrentUser,
} from '../features/auth/authSlice';
import { FiLogIn } from 'react-icons/fi';

export const Nav = () => {
  const authStatus = useSelector(selectCurrentUserStatus);
  const user = useSelector(selectCurrentUser);
  // const { username, nickname, profile } = user;

  const username = user?.username;
  const nickname = user?.nickname;
  const profile = user?.profile;

  return (
    <nav className='nav'>
      <div className='container'>
        <h2 className='log'>
          <NavLink to='/'>MetaGram</NavLink>
        </h2>

        <SearchBar />

        <div className='nav-options'>
          <ThemeToggler />
          {authStatus ? (
            <>
              <Link to={'/home'} className='btn btn-primary create-post-btn'>
                Create
              </Link>
              <Link to='/profile' className='profile-photo'>
                <img
                  src={profile === '' ? usrProfile : profile}
                  alt='profile picture'
                />
              </Link>
            </>
          ) : (
            <Link
              to={'/auth/signin'}
              className='btn btn-primary login-btn'
              for='create-post'
            >
              Login
              <FiLogIn />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
