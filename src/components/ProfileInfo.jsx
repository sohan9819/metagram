export const ProfileInfo = () => {
  return (
    <>
      <div className='created-at'>
        <small>Created at </small>
        <h3>12th April</h3>
      </div>
      <div className='social-stats'>
        <div className='followers'>
          <small>Followers</small>
          <br /> <h1>100</h1>
        </div>
        <div className='following'>
          <small>Following</small>
          <br /> <h1>100</h1>
        </div>
      </div>
    </>
  );
};
