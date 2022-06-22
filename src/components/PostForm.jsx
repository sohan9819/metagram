import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import { useCreatePostMutation } from 'features/posts/postsSlice';

export const PostForm = () => {
  const [createPost] = useCreatePostMutation();

  const user = useSelector(selectCurrentUser);
  const { _id, profile, username, nickname } = user;

  // console.log('profile', profile);

  const postBody = useRef();
  const postImage = useRef();

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();

    if (postBody.current.value || postImage.current.value) {
      let post = {
        body: postBody.current.value.replace(/\n\r?/g, '<br />'),
        image: postImage.current.value,
      };

      await createPost(post);

      clearFields();
    } else {
      console.log('Incomplete input');
    }
  };

  const clearFields = () => {
    postBody.current.value = '';
    postImage.current.value = '';
  };

  return (
    <form onSubmit={onSubmitHandler} className='create-post-form post-form'>
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
