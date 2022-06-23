import { useAddCommentMutation } from 'features/posts/commentsSlice';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

export const CommentForm = ({ _id }) => {
  const [addComment] = useAddCommentMutation();

  const { profile, nickname } = useSelector(selectCurrentUser);
  const commentInput = useRef();

  const onSubmitHandler = (evt) => {
    evt.preventDefault();

    let commentData = {
      text: commentInput.current.value,
    };

    if (commentData.text) {
      const { data, error, isLoading, isSuccess } = addComment({
        postId: _id,
        commentData,
      });

      if (error) {
        console.log('Comment error ', error);
      }

      commentInput.current.value = '';
    }
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
          name='comment'
          className='comment-text-area'
          maxLength={140}
          placeholder={'add your comments'}
          ref={commentInput}
        />
        <button type='submit' className='btn btn-submit comment-btn'>
          Comment
        </button>
      </p>
    </form>
  );
};
