import { Left, Middle, Right } from '../layouts/all';
import { Nav, Post } from '../components/all';
import { useGetBookmarksQuery } from 'features/users/usersSlice';
import { Preloader } from '../components/all';

export const Bookmarks = () => {
  const { data, error, isLoading, isSuccess } = useGetBookmarksQuery();

  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <Left />
          <Middle>
            <div className='feeds'>
              {/* <!-- ------------- FEED ------------- --> */}
              {isLoading && <Preloader />}
              {error && <h2>Something went wrong</h2>}
              {isSuccess && data?.bookmarks.length === 0 ? (
                <div className='empty-data'>
                  <h2>No Bookmarks Available</h2>
                </div>
              ) : (
                data?.bookmarks
                  .slice()
                  .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
                  .map((post) => <Post post={post} key={post.id} />)
              )}
              {/* <!-- ------------- END OF FEED ------------- --> */}
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
