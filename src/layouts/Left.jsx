import { SideBar, ProfileTag } from '../components/all';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectCurrentUser } from '../features/auth/authSlice';

export const Left = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  return (
    // /* <!-- =============== LEFT =============== --> */
    <div className='left'>
      <ProfileTag />

      {/* <!-- ---------- SIDEBAR ---------- --> */}
      <SideBar />

      {/* <!-- ---------- END OF SIDEBAR ---------- --> */}
      <label
        to={'/auth/signin'}
        className='btn btn-primary login-btn'
        for='create-post'
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
        <FiLogOut />
      </label>
    </div>
  );
};
