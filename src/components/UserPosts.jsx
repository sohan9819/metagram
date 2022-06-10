import { useSelector, useDispatch } from 'react-redux';
import {
  fetchUserPosts,
  selectUserPosts,
  getUserPostsStatus,
  getUserPostsError,
  selectAllPosts,
} from 'features/posts/postsSlice';
import { useEffect } from 'react';
import { Post } from './all';
import { Preloader } from './all';

export const UserPosts = ({ username }) => {
  const dispatch = useDispatch();

  const posts = useSelector(selectUserPosts);
  const postsStatus = useSelector(getUserPostsStatus);
  const postsError = useSelector(getUserPostsError);

  const allPosts = useSelector(selectAllPosts);

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchUserPosts(username));
    }
  }, [postsStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchUserPosts(username));
  }, [allPosts]);

  const content = () => {
    switch (postsStatus) {
      case 'loading':
        return <Preloader />;
      case 'succeeded':
        console.log(posts);
        // return posts
        //   .slice()
        //   .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        //   .map((post) => <Post post={post} key={post.id} />);
        return posts.map((post) => <Post post={post} key={post.id} />);
      case 'failed':
        return <h1>{postsError}</h1>;
      default:
        break;
    }
  };

  return <div>{content()}</div>;
};

// export const UserPosts = ({ username }) => {
//   return <h1>{username}</h1>;
// };
