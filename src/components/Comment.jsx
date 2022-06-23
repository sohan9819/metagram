import {
  FiThumbsUp,
  FiThumbsDown,
  FiEdit2,
  FiTrash2,
  FiMoreVertical,
} from 'react-icons/fi';
import profile_1 from 'assets/images/profile-2.jpg';
import { useGetUserQuery } from 'features/users/usersSlice';
import {
  useDeleteCommentMutation,
  useUpVoteCommentMutation,
  useDownVoteCommentMutation,
  useEditCommentMutation,
} from '../features/posts/commentsSlice';
import { selectCurrentUser } from '../features/auth/authSlice';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { async } from 'q';

export const Comment = ({ _id, userId, text, votes, createdAt, postId }) => {
  const [deleteComment] = useDeleteCommentMutation();
  const [upVoteComment] = useUpVoteCommentMutation();
  const [downVoteComment] = useDownVoteCommentMutation();
  const [editComment] = useEditCommentMutation();

  const [commentEdit, setCommentEdit] = useState(false);

  const commentInput = useRef();
  useEffect(() => {
    if (commentEdit) {
      commentInput.current.value = text;
    }
  }, [commentEdit]);

  const user = useSelector(selectCurrentUser);
  const { upvotedBy, downvotedBy } = votes;

  const activeStyle = {
    fill: 'var(--color-danger)',
    color: 'var(--color-danger)',
  };

  const { data, error, isLoading, isSuccess } = useGetUserQuery(userId);

  const deleteHandler = async () => {
    const { data, error, isLoading, isSuccess } = await deleteComment({
      postId,
      commentId: _id,
    });

    if (error) {
      console.log('Error ', error.status, error.data.errors.toString());
    }

    if (isSuccess) {
      console.log('Deleted commment successfully');
    }
  };

  const upVoteHandler = async () => {
    const { data, error, isLoading, isSuccess } = await upVoteComment({
      postId,
      commentId: _id,
    });

    if (error) {
      console.log('Error ', error);
    }

    if (isSuccess) {
      console.log('Deleted commment successfully');
    }
  };

  const downVoteHandler = async () => {
    const { data, error, isLoading, isSuccess } = await downVoteComment({
      postId,
      commentId: _id,
    });

    if (error) {
      console.log('Error ', error);
    }

    if (isSuccess) {
      console.log('Deleted commment successfully');
    }
  };

  const editHandler = async () => {
    if (commentInput.current.value && commentInput.current.value != text) {
      let commentData = { text: commentInput.current.value };
      const { data, error, isLoading, isSuccess } = await editComment({
        postId,
        commentId: _id,
        commentData,
      });

      if (error) {
        console.log('Error ', error);
      }

      if (isSuccess) {
        console.log('Deleted commment successfully');
      }

      setCommentEdit(false);
    } else {
      setCommentEdit(false);
    }
  };

  return (
    <div className='comment'>
      <div className='profile-photo'>
        <img src={data?.user.profile} alt='profile picture' />
      </div>
      <div className='comment-content'>
        <p className='comment-text'>
          <span className='comment-username'>
            <b>{data?.user.nickname}</b> &nbsp;
          </span>
          {commentEdit ? (
            <>
              <textarea
                name='comment'
                className='comment-text-area'
                maxLength={140}
                placeholder={'add your comments'}
                ref={commentInput}
              />
              <button
                type='submit'
                className='btn btn-submit comment-btn'
                onClick={editHandler}
              >
                Save Changes
              </button>
            </>
          ) : (
            text
          )}
        </p>
        <div className='comment-actions'>
          <div className='comment-likes' onClick={upVoteHandler}>
            <h3 className='comment-likes-icon'>
              <FiThumbsUp
                style={
                  upvotedBy.findIndex((author) => author._id === user._id) ===
                  -1
                    ? ''
                    : activeStyle
                }
              />
            </h3>{' '}
            <small className='text-muted comment-likes-count'>
              {upvotedBy.length} likes{' '}
            </small>
          </div>
          <div className='comment-likes' onClick={downVoteHandler}>
            <h3 className='comment-likes-icon'>
              <FiThumbsDown
                style={
                  downvotedBy.findIndex((author) => author._id === user._id) ===
                  -1
                    ? ''
                    : activeStyle
                }
              />
            </h3>{' '}
            <small className='text-muted comment-likes-count'>
              {downvotedBy.length} dislikes{' '}
            </small>
          </div>
        </div>
      </div>
      {userId === user._id ? (
        <div className='comment-option'>
          <FiMoreVertical />
          <ul className='comment-options'>
            <li
              className='comment-edit'
              onClick={() => {
                setCommentEdit((prev) => !prev);
              }}
            >
              Edit <FiEdit2 />
            </li>
            <li className='comment-delete' onClick={deleteHandler}>
              Delete <FiTrash2 />
            </li>
          </ul>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
