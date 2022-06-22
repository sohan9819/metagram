import React from 'react';
import { Post } from './Post';
import { useGetPostsQuery } from 'features/posts/postsSlice';
import { Preloader } from './all';

export const PostsList = () => {
  const { data, error, isLoading, isSuccess } = useGetPostsQuery();

  return (
    <>
      {isLoading && <Preloader />}
      {error && <h2>Something went wrong</h2>}
      {isSuccess &&
        data?.posts.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt)).map((post) => <Post post={post} key={post.id} />)}
    </>
  );
};
