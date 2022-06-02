import userProfile from '../assets/images/profile-15.jpg';

export const FollowUser = () => {
  return (
    <div className='follow-user'>
      <div class='profile-photo'>
        <img src={userProfile} alt='' />
      </div>
      <div class='user-info'>
        <h5 className='username'>Edem Quist</h5>
        <p class='text-muted'>@edem</p>
      </div>
    </div>
  );
};
