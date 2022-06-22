/* function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

 */

import { useSelector } from 'react-redux';
import { selectCurrentUserStatus } from 'features/auth/authSlice';
import { useLocation, Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const authStatus = useSelector(selectCurrentUserStatus);
  const location = useLocation();

  return authStatus ? (
    children
  ) : (
    <Navigate to='/auth/signin' state={{ from: location }} />
  );
};
