import { Left, Middle, Right } from '../layouts/all';
import { Nav, ProfileTag } from '../components/all';
import { PostsList } from 'components/PostsList';

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
              {/* <Post />
              <Post />
              <Post />
              <Post /> */}
              <PostsList />
              {/* <!-- ------------- END OF FEED ------------- --> */}
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
