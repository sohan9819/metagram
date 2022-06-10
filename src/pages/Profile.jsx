import { Left, Right, Middle } from '../layouts/all';
import {
  Nav,
  ProfileForm,
  ProfileTag,
  Post,
  ProfileInfo,
  UserPosts,
} from '../components/all';
import { selectCurrentUser } from 'features/auth/authSlice';
import { useSelector } from 'react-redux';

// import usrProfile from '../assets/images/profile-1.jpg';

export const Profile = () => {
  const user = useSelector(selectCurrentUser);
  // const {
  //   describtion,
  //   email,
  //   followers,
  //   following,
  //   id,
  //   nickname,
  //   password,
  //   profile,
  //   updatedAt,
  //   username,
  //   _id,
  // } = user;

  return (
    <>
      <Nav />

      {/* <!-- ---------------- MAIN --------------- --> */}

      <main className='main'>
        <div className='container home'>
          <Left />
          <Middle>
            <ProfileTag {...user} />
            <article className='profile-info'>
              <ProfileInfo user={user} />
            </article>
            <article class='profile-card'>
              <ProfileForm user={user} />
            </article>
            <div className='feeds'>
              <h2>Recent Posts</h2>
              {/* <Post />
              <Post />
              <Post /> */}
              <UserPosts {...user} />
            </div>
          </Middle>
          <Right />
        </div>
      </main>
    </>
  );
};
