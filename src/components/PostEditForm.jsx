import { useEffect, useRef } from 'react';
import { useEditPostMutation } from 'features/posts/postsSlice';

export const PostEditForm = ({
  post,
  author,
  postEditState,
  setPostEditState,
}) => {
  const [editPost] = useEditPostMutation();

  const { username, nickname, profile } = author;

  const { user_id, body, image, createdAt, _id } = post;

  const bodyInput = useRef();
  const imageInput = useRef();

  useEffect(() => {
    bodyInput.current.value = body.replace(/<br\s*\/?>/gi, '\n');
    imageInput.current.value = image;
  }, [post]);

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    const { data, error, isLoading, isSuccess } = await editPost({
      ...post,
      body: bodyInput.current.value.replace(/\n\r?/g, '<br />'),
      image: imageInput.current.value,
    });

    if (error) {
      console.log('Error ', error);
    }

    if (isSuccess) {
      console.log('Data ', data);
    }

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
          ref={bodyInput}
        />
        <input
          className='post-image-input'
          type='url'
          placeholder='Like to share some picture memories ?'
          ref={imageInput}
        />
        {image !== '' ? (
          <img className='post-image-preview ' src={image} alt='' />
        ) : (
          ''
        )}

        {imageInput.current && imageInput.current.value !== '' ? (
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
