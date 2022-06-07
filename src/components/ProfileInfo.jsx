import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

export const ProfileInfo = () => {
  const user = useSelector(selectCurrentUser);
  const { followers, following, createdAt } = user;

  // let formatedDate = new Date(createdAt).toLocaleString('en-US', {
  //   timeZone: 'Asia/Kolkata',
  //   weekday: 'long',
  //   year: 'numeric',
  //   month: 'short',
  //   day: 'numeric',
  // });

  // let date = new Date(createdAt).toLocaleDateString('en-us', {
  // weekday: 'long',
  // year: 'numeric',
  // month: 'short',
  // day: 'numeric',
  // });

  // console.log(formatedDate);

  return (
    <>
      <div className='created-at'>
        <small>Created at </small>
        <h3>
          {new Date(createdAt).toLocaleString('en-US', {
            timeZone: 'Asia/Kolkata',
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </h3>
      </div>
      <div className='social-stats'>
        <div className='followers'>
          <small>Followers</small>
          <br /> <h1>{followers ? 0 : followers}</h1>
        </div>
        <div className='following'>
          <small>Following</small>
          <br /> <h1>{following ? 0 : following}</h1>
        </div>
      </div>
    </>
  );
};
