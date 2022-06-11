import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import { addNewPost } from 'features/posts/postsSlice';
import { useState } from 'react';

export const PostForm = () => {
  const user = useSelector(selectCurrentUser);
  const { _id, profile, username, nickname } = user;

  console.log('profile', profile);

  const [addRequestStatus, setAddRequestStatus] = useState('idle');

  const dispatch = useDispatch();

  const postBody = useRef();
  const postImage = useRef();

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    if (
      (postBody.current.value || postImage.current.value) &&
      addRequestStatus === 'idle'
    ) {
      try {
        setAddRequestStatus('pending');
        console.log(addRequestStatus);
        dispatch(
          addNewPost({
            body: postBody.current.value.replace(/\n\r?/g, '<br />'),
            image: postImage.current.value,
            user_id: _id,
          })
        ).unwrap();
        clearFields();
      } catch (error) {
        console.log(addRequestStatus);
        console.error('Failed to save the post', error);
      } finally {
        console.log(addRequestStatus);
        setAddRequestStatus('idle');
      }
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
