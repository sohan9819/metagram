import { SideBar, ProfileTag } from '../components/all';

export const Left = () => {
  return (
    // /* <!-- =============== LEFT =============== --> */
    <div className='left'>
      <ProfileTag />

      {/* <!-- ---------- SIDEBAR ---------- --> */}
      <SideBar />

      {/* <!-- ---------- END OF SIDEBAR ---------- --> */}
      <label for='create-post' className='btn btn-primary'>
        Create Post
      </label>
    </div>
  );
};
