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

import { useSelector } from 'react-redux';
import { selectCurrentUser } from 'features/auth/authSlice';
import { CommentForm, Comment, PostEditForm, Preloader } from './all';
import { useDeletePostMutation } from 'features/posts/postsSlice';
import { useGetCommentsQuery } from 'features/posts/commentsSlice';

export const PostPreview = ({
  post,
  postEditState,
  setPostEditState,
  author,
}) => {
  const [deletePost] = useDeletePostMutation();

  const [hideComment, setHideComment] = useState(true);
  const { user_id, body, image, createdAt, _id } = post;
  const user = useSelector(selectCurrentUser);

  const editHanler = () => {
    setPostEditState(true);
  };

  let errorContent;

  const deletehandler = async () => {
    const { data, error, isLoading, isSuccess } = await deletePost(_id);

    if (error) {
      console.log('Error ', error);
    }

    if (isSuccess) {
      console.log('Data', data);
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
          {author?._id === user._id ? (
            <span className='post-option edit' onClick={editHanler}>
              <FiEdit2 />
            </span>
          ) : (
            ''
          )}

          {author?._id === user._id ? (
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
            <FiHeart />
          </span>
          <span>
            <FiMessageCircle />
          </span>
          <span>
            <FiShare2 />
          </span>
        </div>
        <div className='bookmark'>
          <span>
            <FiBookmark />
          </span>
        </div>
      </div>
      <div className='liked-by'>
        <span>
          <img src={profile_3} alt='' />
        </span>
        <span>
          <img src={profile_4} alt='' />
        </span>
        <span>
          <img src={profile_5} alt='' />
        </span>
        <p>
          Liked by <b>Ernest Archiever</b> and <b>2, 323 others</b>
        </p>
      </div>
      <div className='caption'>
        <p>
          Lana Rose Lorem ipsum dolor sit quisquam eius.
          <span className='hash-tag'>#lifestyle</span>
        </p>
      </div>
      <div
        className='text-muted'
        onClick={() => {
          setHideComment((prev) => !prev);
        }}
      >
        {hideComment ? 'View all 277 comments' : 'Hide comments'}
      </div>
      <div className={hideComment ? 'comments hide' : 'comments'}>
        <CommentForm {...post} />
        {/*         <Comment />
        <hr className='comment-divider' />
        <Comment />
        <hr className='comment-divider' />
        <Comment />
        <hr className='comment-divider' />
        <Comment />
        <hr className='comment-divider' />
        <Comment />
        <hr className='comment-divider' />
        <Comment />
        <hr className='comment-divider' /> */}
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
