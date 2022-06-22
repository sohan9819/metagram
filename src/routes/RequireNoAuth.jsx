import { useSelector } from 'react-redux';
import { selectCurrentUserStatus } from 'features/auth/authSlice';
import { useLocation, Navigate } from 'react-router-dom';

export const RequireNoAuth = ({ children }) => {
  const authStatus = useSelector(selectCurrentUserStatus);
  const location = useLocation();

  return authStatus ? (
    <Navigate to='/home' state={{ from: location }} />
  ) : (
    children
  );
};
