import { Route, Routes } from 'react-router-dom';
import Mockman from 'mockman-js';
import {
  Landing,
  Home,
  Explore,
  Bookmarks,
  Profile,
  SignIn,
  SignUp,
  Error404,
} from 'pages/all';
import { RequireAuth } from './RequireAuth';
import { RequireNoAuth } from './RequireNoAuth';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route
        path='/home'
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path='/explore'
        element={
          <RequireAuth>
            <Explore />
          </RequireAuth>
        }
      />
      <Route
        path='/bookmarks'
        element={
          <RequireAuth>
            <Bookmarks />
          </RequireAuth>
        }
      />
      <Route
        path='/profile'
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path='/auth/signin'
        element={
          <RequireNoAuth>
            <SignIn />
          </RequireNoAuth>
        }
      />
      <Route
        path='/auth/signup'
        element={
          <RequireNoAuth>
            <SignUp />
          </RequireNoAuth>
        }
      />
      <Route path='*' element={<Error404 />} />
      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};
