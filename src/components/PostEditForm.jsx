export const PostEditForm = ({
  post,
  author,
  postEditState,
  setPostEditState,
}) => {
  const { username, nickname, profile } = author;

  const { user_id, body, image, createdAt, _id } = post;

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    setPostEditState(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className='edit-post-form post-form'>
      <div className='form-head'>
        <div className='profile-photo'>
          <img src={profile} alt='profile picture' />
        </div>
        <div className='user-info'>
          <h4 className='username'>{username}</h4>
          <p className='user-@'>{nickname}</p>
        </div>
      </div>
      <div className='form-body'>
        <textarea
          className='post-text-input'
          placeholder="what's on you mind, Diana ?"
          maxLength={200}
        />
        <input
          className='post-image-input'
          type='url'
          placeholder='Like to share some picture memories ?'
        />
        {image !== '' ? (
          <img className='post-image-preview ' src={image} alt='' />
        ) : (
          ''
        )}
      </div>
      <div className='form-footer'>
        <button type='submit' className='btn btn-primary'>
          Save Changes
        </button>
      </div>
    </form>
  );
};
