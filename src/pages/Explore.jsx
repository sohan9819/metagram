import { Left, Middle, Right } from '../layouts/all';
import { Nav, Post, ProfileTag } from '../components/all';

export const Explore = () => {
  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <Left />
          <Middle>
            <div className='explore-follows'>
              <ProfileTag />
              <ProfileTag />
              <ProfileTag />
              <ProfileTag />
            </div>
            <div className='feeds'>
              {/* <!-- ------------- FEED ------------- --> */}
              <Post />
              <Post />
              <Post />
              <Post />
              {/* <!-- ------------- END OF FEED ------------- --> */}
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
