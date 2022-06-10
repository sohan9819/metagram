export const PostEditForm = ({ author, postState }) => {
  const { username, nickname, profile } = author;
  const { setPostEditState } = postState;

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    setPostEditState(false);
  };

  return (
    <form onSubmit={onSubmitHandler} className='create-post-form'>
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
          ref={postBody}
          maxLength={200}
        />
        <input
          className='post-image-input'
          type='url'
          placeholder='Like to share some picture memories ?'
          ref={postImage}
        />
      </div>
      <div className='form-footer'>
        <button type='submit' className='btn btn-primary'>
          Post
        </button>
      </div>
    </form>
  );
};
