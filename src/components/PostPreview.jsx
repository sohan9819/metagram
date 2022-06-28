import {
  FiTrash2,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiBookmark,
  FiEdit2,
} from 'react-icons/fi';
import { useState } from 'react';
import { timeAgo } from 'utilities/TimeAgo';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCurrentUser, updateUser } from 'features/auth/authSlice';
import { CommentForm, Comment, Preloader, CommentsList } from './all';
import {
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
} from 'features/posts/postsSlice';
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
  useGetBookmarksQuery,
} from 'features/users/usersSlice';
import { useGetCommentsQuery } from 'features/posts/commentsSlice';

export const PostPreview = ({
  post,
  postEditState,
  setPostEditState,
  author,
  user,
}) => {
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();
  const [addBookmark] = useAddBookmarkMutation();
  const [removeBookmark] = useRemoveBookmarkMutation();

  const [hideComment, setHideComment] = useState(true);
  const { user_id, body, image, createdAt, _id, likes } = post;

  const { likeCount, likedBy, dislikedBy } = likes;

  const activeStyle = {
    fill: 'var(--color-danger)',
    color: 'var(--color-danger)',
  };

  const editHanler = () => {
    setPostEditState(true);
  };

  const deletehandler = async () => {
    const { data, error, isLoading, isSuccess } = await deletePost(_id);

    if (error) {
      console.log('Error ', error);
    }

    if (isSuccess) {
      console.log('Data', data);
    }
  };

  const likeHandler = async () => {
    const { data, error, isSuccess, isLoading } = await likePost(_id);
    if (error) {
      console.log('Error ', error);
    }
  };
  const dislikeHandler = async () => {
    const { data, error, isSuccess, isLoading } = await dislikePost(_id);
    if (error) {
      console.log('Error ', error);
    }
  };
  const addBookmarkHandler = async () => {
    const { data, error, isSuccess, isLoading } = await addBookmark(_id);
    if (error) {
      console.log('Error ', error);
    }
  };
  const removeBookmarkHandler = async () => {
    const { data, error, isSuccess, isLoading } = await removeBookmark(_id);
    if (error) {
      console.log('Error ', error);
    }
  };

  const comments = useGetCommentsQuery(_id);
  const { data, error, isLoading, isSuccess } = useGetBookmarksQuery();

  return (
    <div key={_id} className='feed'>
      <div className='head'>
        <div className='user'>
          <div className='profile-photo'>
            <img src={author?.profile} alt='profile picture' />
          </div>
          <div className='user-info'>
            <h3>{author?.username}</h3>
            <small>
              {author?.nickname} , {timeAgo(createdAt)}{' '}
            </small>
          </div>
        </div>
        <div className='post-options'>
          {user_id === user?._id ? (
            <span className='post-option edit' onClick={editHanler}>
              <FiEdit2 />
            </span>
          ) : (
            ''
          )}

          {user_id === user?._id ? (
            <span className='post-option delete'>
              <FiTrash2 onClick={deletehandler} />
            </span>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='post'>
        <p className='post-text' dangerouslySetInnerHTML={{ __html: body }}>
          {/* {body} */}
        </p>
        {image !== '' ? <img className='post-image' src={image} alt='' /> : ''}
      </div>
      <div className='action-buttons'>
        <div className='interaction-buttons'>
          <span>
            <FiHeart
              onClick={
                likedBy.findIndex((author) => author._id === user?._id) === -1
                  ? likeHandler
                  : dislikeHandler
              }
              style={
                likedBy.findIndex((author) => author._id === user?._id) === -1
                  ? ''
                  : activeStyle
              }
            />
          </span>
          <span>
            <FiMessageCircle
              onClick={() => {
                setHideComment((prev) => !prev);
              }}
            />
          </span>
          <span>
            <FiShare2 />
          </span>
        </div>
        <div className='bookmark'>
          <span>
            <FiBookmark
              onClick={
                data?.bookmarks.findIndex((post) => post._id === _id) === -1
                  ? addBookmarkHandler
                  : removeBookmarkHandler
              }
              style={
                data?.bookmarks.findIndex((post) => post._id === _id) === -1
                  ? ''
                  : activeStyle
              }
            />
          </span>
        </div>
      </div>
      {likeCount >= 5 ? (
        <div className='liked-by'>
          {likedBy
            .filter((author) => author._id !== user?._id)
            .slice(0, 3)
            .map((user) => (
              <span>
                <img src={user?.profile} alt='' />
              </span>
            ))}
          <p>
            Liked by{' '}
            {likedBy
              .filter((author) => author._id !== user?._id)
              .slice(0, 3)
              .map((user) => (
                <b>{user.nickname} </b>
              ))}{' '}
            and <b>{likeCount - 3} others</b>
          </p>
        </div>
      ) : (
        <div className='liked-by'>
          <p>
            <b>{likeCount} </b> Likes
          </p>
        </div>
      )}
      <div
        className='text-muted'
        onClick={() => {
          setHideComment((prev) => !prev);
        }}
      >
        {hideComment
          ? comments.data?.comments.length === 0
            ? 'Be the first to comment'
            : `View all ${comments.data?.comments.length} comments`
          : 'Hide comments'}
      </div>
      <div className={hideComment ? 'comments hide' : 'comments'}>
        <CommentForm {...post} />
        <CommentsList {...post} />
      </div>
    </div>
  );
};
