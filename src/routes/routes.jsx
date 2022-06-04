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
} from '../pages/all';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='/bookmarks' element={<Bookmarks />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/auth-signin' element={<SignIn />} />
      <Route path='/auth-signup' element={<SignUp />} />
      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};
