import usrProfile from '../assets/images/default_profile.jpg';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

export const ProfileTag = () => {
  const user = useSelector(selectCurrentUser);
  const { username, nickname, profile } = user;

  return (
    <a className='profile-tag'>
      <div className='profile-photo'>
        <img
          src={profile === '' ? usrProfile : profile}
          alt='profile picture'
          className='usr-profile-img'
        />
      </div>
      <div className='handle'>
        <h4 className='username'>{username}</h4>
        <p className='user-@'>{nickname}</p>
      </div>
    </a>
  );
};
