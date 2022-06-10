import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { timeAgo } from 'utilities/TimeAgo';

export const ProfileInfo = () => {
  const user = useSelector(selectCurrentUser);
  const { followers, following, createdAt } = user;

  return (
    <>
      <div className='created-at'>
        <small>Created at </small>
        <h3>{timeAgo(createdAt)}</h3>
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
