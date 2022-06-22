import { Left, Middle, Right } from '../layouts/all';
import { Nav, Post } from '../components/all';

export const Bookmarks = () => {
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
              {/* <Post />
              <Post />
              <Post />
              <Post /> */}
              {/* <!-- ------------- END OF FEED ------------- --> */}
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
