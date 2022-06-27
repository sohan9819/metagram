import profile_1 from 'assets/images/profile-2.jpg';
import profile_2 from 'assets/images/profile-3.jpg';
import profile_3 from 'assets/images/profile-4.jpg';
import profile_4 from 'assets/images/profile-5.jpg';
import profile_5 from 'assets/images/profile-6.jpg';
import post_1 from 'assets/images/feed-1.jpg';
import {
  FiMoreVertical,
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
import { CommentForm, Comment, PostEditForm, Preloader } from './all';
import {
  useDeletePostMutation,
  useLikePostMutation,
  useDislikePostMutation,
} from 'features/posts/postsSlice';
import {
  useAddBookmarkMutation,
  useRemoveBookmarkMutation,
} from 'features/users/usersSlice';
import { useGetCommentsQuery } from 'features/posts/commentsSlice';

export const PostPreview = ({
  post,
  postEditState,
  setPostEditState,
  author,
}) => {
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [dislikePost] = useDislikePostMutation();
  const [addBookmark] = useAddBookmarkMutation();
  const [removeBookmark] = useRemoveBookmarkMutation();

  const dispatch = useDispatch();

  const [hideComment, setHideComment] = useState(true);
  const { user_id, body, image, createdAt, _id, likes } = post;
  const user = useSelector(selectCurrentUser);

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

  const isUserLiked =
    likedBy.findIndex((author) => author._id === user._id) === -1
      ? false
      : true;

  const isUserBookmarked =
    user.bookmarks.findIndex((post) => post._id === _id) === -1 ? false : true;

  const likeDislikeHandler = async () => {
    if (isUserLiked) {
      const { data, error, isSuccess, isLoading } = await dislikePost(_id);
      if (error) {
        console.log('Error ', error);
      }

      if (isSuccess) {
        console.log('Deleted commment successfully');
      }
    } else {
      const { data, error, isSuccess, isLoading } = await likePost(_id);
      if (error) {
        console.log('Error ', error);
      }

      if (isSuccess) {
        console.log('Deleted commment successfully');
      }
    }
  };

  const bookmarkHandler = async () => {
    if (isUserBookmarked) {
      const { data, error, isSuccess, isLoading } = await removeBookmark(_id);

      if (error) {
        console.log('Error ', error);
      }

      if (data?.bookmarks) {
        dispatch(updateUser({ ...user, ...data }));
      }
    } else {
      const { data, error, isSuccess } = await addBookmark(_id);

      if (error) {
        console.log('Error ', error);
      }

      if (data?.bookmarks) {
        dispatch(updateUser({ ...user, ...data }));
      }
    }
  };

  const { data, error, isLoading, isSuccess } = useGetCommentsQuery(_id);

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
          {user_id === user._id ? (
            <span className='post-option edit' onClick={editHanler}>
              <FiEdit2 />
            </span>
          ) : (
            ''
          )}

          {user_id === user._id ? (
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
              onClick={likeDislikeHandler}
              style={isUserLiked ? activeStyle : ''}
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
              onClick={bookmarkHandler}
              style={isUserBookmarked ? activeStyle : ''}
            />
          </span>
        </div>
      </div>
      {likeCount >= 5 ? (
        <div className='liked-by'>
          {likedBy
            .filter((author) => author._id !== user._id)
            .slice(0, 3)
            .map((user) => (
              <span>
                <img src={user.profile} alt='' />
              </span>
            ))}
          <p>
            Liked by{' '}
            {likedBy
              .filter((author) => author._id !== user._id)
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
      {/* <div className='caption'>
        <p>
          Lana Rose Lorem ipsum dolor sit quisquam eius.
          <span className='hash-tag'>#lifestyle</span>
        </p>
      </div> */}
      <div
        className='text-muted'
        onClick={() => {
          setHideComment((prev) => !prev);
        }}
      >
        {hideComment
          ? data?.comments.length === 0
            ? 'Be the first to comment'
            : `View all ${data?.comments.length} comments`
          : 'Hide comments'}
      </div>
      <div className={hideComment ? 'comments hide' : 'comments'}>
        <CommentForm {...post} />
        {isLoading && <Preloader />}
        {error && <h2>Something went wrong</h2>}
        {isSuccess && data?.comments.length === 0 ? (
          <h2>No Comments available</h2>
        ) : (
          data?.comments
            .slice()
            .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            .map((comment, index) => (
              <>
                <Comment {...comment} postId={_id} key={index} />
                <hr className='comment-divider' />
              </>
            ))
        )}
      </div>
    </div>
  );
};
