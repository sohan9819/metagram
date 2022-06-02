export const Comment = () => {
  return (
    <div className='comment'>
      <div className='profile-photo'>
        <img src={profile_1} alt='profile picture' />
      </div>
      <div className='comment-content'>
        <p className='comment-text'>
          <span className='comment-username'>
            <b>@lancer</b> &nbsp;
          </span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi sed
          illo quo! Aliquid perferendis doloribus distinctio eligendi eaque?
          Nihil unde reiciendis sit, vero culpa sequi sapiente ad voluptatum
          quibusdam laborum!
        </p>
      </div>
      <div className='comment-option'>
        <FiMoreVertical />
      </div>
    </div>
  );
};
