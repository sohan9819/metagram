import { SearchBar, FollowUser } from '../components/all';
import { useSelector } from 'react-redux';
import { selectAllUsers, useGetUserQuery } from 'features/users/usersSlice';
import { selectCurrentUser } from 'features/auth/authSlice';
import { useGetUsersQuery } from 'features/users/usersSlice';
import { Preloader } from '../components/all';
import { useEffect } from 'react';

export const Right = () => {
  const { data, error, isLoading, isSuccess } = useGetUsersQuery();
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
          {isLoading && <Preloader />}
          {error && <h2>Something went wrong</h2>}
          {isSuccess &&
            data?.users
              .filter((followUser) => followUser._id != user._id)
              .map((user) => <FollowUser user={user} key={user._id} />)}
        </div>
      </div>
    </div>
  );
};
