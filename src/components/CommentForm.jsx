export const CommentForm = ({ profile, _id, nickname }) => {
  const onSubmitHandler = (evt) => {
    evt.preventDefault();
  };

  return (
    <form className='comment-form comment' onSubmit={onSubmitHandler}>
      <div className='profile-photo'>
        <img src={profile} alt='profile picture' />
      </div>
      <p className='comment-text'>
        <span className='comment-username'>
          <b>{nickname}</b> &nbsp;
        </span>
        <textarea
          className='comment-text-area'
          maxLength={140}
          placeholder={'add your comments'}
        />
        <button type='submit' className='btn btn-submit comment-btn'>
          comment
        </button>
      </p>
    </form>
  );
};
