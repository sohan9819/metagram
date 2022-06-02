import usrProfile from '../assets/images/profile-1.jpg';

export const ProfileTag = () => {
  return (
    <a className='profile-tag'>
      <div className='profile-photo'>
        <img
          src={usrProfile}
          alt='profile picture'
          className='usr-profile-img'
        />
      </div>
      <div className='handle'>
        <h4 className='username'>Diana Ayi</h4>
        <p className='user-@'>@dayi</p>
      </div>
    </a>
  );
};
