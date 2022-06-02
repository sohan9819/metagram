import { Route, Routes, Navigate } from 'react-router-dom';
import Mockman from 'mockman-js';
import { Landing, Home } from '../pages/all';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/landing' element={<Landing />} />
      <Route path='/mock' element={<Mockman />} />
    </Routes>
  );
};
