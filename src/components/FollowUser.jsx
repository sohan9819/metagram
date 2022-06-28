import { selectCurrentUser } from 'features/auth/authSlice';
import {
  useFollowUserMutation,
  useGetUserQuery,
  useUnfollowUserMutation,
} from 'features/users/usersSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { updateUser } from 'features/auth/authSlice';

export const FollowUser = ({ user, key }) => {
  const { profile, username, nickname, _id, followers } = user;

  // const dispatch = useDispatch();

  const [follow] = useFollowUserMutation();
  const [unfollow] = useUnfollowUserMutation();

  const authUser = useSelector(selectCurrentUser);

  const followhandler = async () => {
    console.log('follow');
    const { data, error } = await follow(_id);
    if (error) {
      console.log('Error ', error);
    }
    // console.log('Follow Data ', data);
  };
  const unfollowhandler = async () => {
    console.log('unfollow');
    const { data, error } = await unfollow(_id);
    if (error) {
      console.log('Error ', error);
    }
    // console.log('Unfollow Data ', data);
  };

  return (
    <div className='follow-user'>
      <div class='profile-photo'>
        <img src={profile} alt='' />
      </div>
      <div class='user-info'>
        <h5 className='username'>{username}</h5>
        <p class='text-muted'>{nickname}</p>
      </div>
      <button
        className='btn btn-primary follow-btn'
        onClick={
          followers.findIndex((user) => user._id === authUser._id) === -1
            ? followhandler
            : unfollowhandler
        }
      >
        {/* Follow */}
        {followers.findIndex((user) => user._id === authUser._id) === -1
          ? 'Follow'
          : 'Unfollow'}
      </button>
    </div>
  );
};
