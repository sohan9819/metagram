// import userProfile from '../assets/images/profile-15.jpg';

export const FollowUser = ({ user, key }) => {
  const { profile, username, nickname } = user;

  return (
    <div className='follow-user'>
      <div class='profile-photo'>
        <img src={profile} alt='' />
      </div>
      <div class='user-info'>
        <h5 className='username'>{username}</h5>
        <p class='text-muted'>{nickname}</p>
      </div>
      <button className='btn btn-primary follow-btn'>Follow</button>
    </div>
  );
};
