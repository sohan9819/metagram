import { Route, Routes, Navigate } from 'react-router-dom';
import Mockman from 'mockman-js';
import {
  Landing,
  Home,
  Explore,
  Bookmarks,
  Profile,
  SignIn,
  SignUp,
} from '../pages/all';
import { useSelector } from 'react-redux';
import { selectCurrentUserStatus } from '../features/auth/authSlice';

export const RouterRoutes = () => {
  const authStatus = useSelector(selectCurrentUserStatus);
  console.log(authStatus);

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route
        path='/home'
        element={authStatus ? <Home /> : <Navigate to={'/auth/signin'} />}
      />
      <Route
        path='/explore'
        element={authStatus ? <Explore /> : <Navigate to={'/auth/signin'} />}
      />
      <Route
        path='/bookmarks'
        element={authStatus ? <Bookmarks /> : <Navigate to={'/auth/signin'} />}
      />
      <Route
        path='/profile'
        element={authStatus ? <Profile /> : <Navigate to={'/auth/signin'} />}
      />
      <Route
        path='/auth/signin'
        element={authStatus ? <Navigate to='/home' /> : <SignIn />}
      />
      <Route
        path='/auth/signup'
        element={authStatus ? <Navigate to='/home' /> : <SignUp />}
      />
      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};
