import { Left, Right, Middle } from '../layouts/all';
import { Nav, ProfileForm, ProfileTag, Post } from '../components/all';

// import usrProfile from '../assets/images/profile-1.jpg';

export const Profile = () => {
  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <Left />
          <Middle>
            <ProfileTag />
            <article class='profile-card edit'>
              <ProfileForm />
            </article>
            <div className='feeds'>
              <h2>Recent Posts</h2>
              <Post />
              <Post />
              <Post />
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
