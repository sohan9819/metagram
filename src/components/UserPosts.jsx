import { Post } from './Post';
import { useGetPostsByUsernameQuery } from 'features/posts/postsSlice';
import { Preloader } from './Preloader';
import { useEffect } from 'react';

export const UserPosts = ({ username }) => {
  const { data, error, isLoading, isSuccess } =
    useGetPostsByUsernameQuery(username);

  return (
    <>
      {isLoading && <Preloader />}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && data?.posts.length === 0 ? (
        <h2>No posts available</h2>
      ) : (
        data?.posts.map((post) => <Post post={post} key={post.id} />)
      )}
    </>
  );
};
