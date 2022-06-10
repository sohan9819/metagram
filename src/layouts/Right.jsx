import { SearchBar, FollowUser } from '../components/all';
import { useSelector } from 'react-redux';
import { selectAllUsers } from 'features/users/usersSlice';
import { selectCurrentUser } from 'features/auth/authSlice';

export const Right = () => {
  const allUsers = useSelector(selectAllUsers);
  const user = useSelector(selectCurrentUser);

  return (
    // <!-- =============== RIGHT =============== -->
    <div className='right'>
      <div className='follow-users'>
        <div className='heading'>
          <h4>People to Follow </h4>
        </div>

        <SearchBar />

        <div className='follow-users-list'>
          {allUsers
            .filter((followUser) => followUser._id != user._id)
            .map((user) => (
              <FollowUser user={user} key={user._id} />
            ))}
        </div>
      </div>
    </div>
  );
};
