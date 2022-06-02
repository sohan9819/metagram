import { Post, PostForm } from '../components/all';

export const Middle = () => {
  return (
    // /* <!-- =============== MIDDLE =============== --> */
    <div className='middle'>
      <PostForm />

      {/* <!-- ------------- FEEDS ------------- --> */}
      <div className='feeds'>
        {/* <!-- ------------- FEED ------------- --> */}
        <Post />
        <Post />
        <Post />
        <Post />
        {/* <!-- ------------- END OF FEED ------------- --> */}
      </div>
      {/* <!-- ------------- END OF FEEDS ------------- --> */}
    </div>
  );
};
