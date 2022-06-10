import React from 'react';
import { Post } from './Post';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from 'features/posts/postsSlice';
import { useEffect } from 'react';
import { Preloader } from './all';

export const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const content = () => {
    switch (postsStatus) {
      case 'loading':
        return <Preloader />;
      case 'succeeded':
        return posts
          .slice()
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          .map((post) => <Post post={post} key={post.id} />);
      case 'failed':
        return <h1>{postsError}</h1>;
      default:
        break;
    }
  };

  return <>{content()}</>;
};
