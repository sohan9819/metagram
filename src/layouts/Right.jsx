import { SearchBar, FollowUser } from '../components/all';

export const Right = () => {
  return (
    // <!-- =============== RIGHT =============== -->
    <div className='right'>
      <div className='follow-users'>
        <div className='heading'>
          <h4>People to Follow </h4>
        </div>

        <SearchBar />

        <div className='follow-users-list'>
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
          <FollowUser />
        </div>
      </div>
    </div>
  );
};
