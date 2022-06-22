import { Left, Middle, Right } from 'layouts/all';
import { Nav, PostForm, Post, PostsList } from 'components/all';

export const Home = () => {
  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <Left />
          <Middle>
            <PostForm />

            {/* <!-- ------------- FEEDS ------------- --> */}
            <div className='feeds'>
              {/* <!-- ------------- FEED ------------- --> */}
              {/* <Post />
              <Post />
              <Post />
              <Post /> */}
              <PostsList />
              {/* <!-- ------------- END OF FEED ------------- --> */}
            </div>
            {/* <!-- ------------- END OF FEEDS ------------- --> */}
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
