import { useGetCommentsQuery } from 'features/posts/commentsSlice';
import { Preloader } from './Preloader';
import { Comment } from './Comment';

export const CommentsList = ({ _id }) => {
  const { data, error, isLoading, isSuccess } = useGetCommentsQuery(_id);

  return (
    <>
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
    </>
  );
};
