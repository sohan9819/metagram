import { FiHome, FiCompass, FiBookmark, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <NavLink to='/home' className='menu-item'>
        <span className='sidebar-icons'>
          <FiHome />
        </span>
        <h3 className='sidebar-options'>Home</h3>
      </NavLink>
      <NavLink to='/explore' className='menu-item'>
        <span className='sidebar-icons'>
          <FiCompass />
        </span>
        <h3 className='sidebar-options'>Explore</h3>
      </NavLink>
      <NavLink to='/bookmarks' className='menu-item'>
        <span className='sidebar-icons'>
          <FiBookmark />
        </span>
        <h3 className='sidebar-options'>Bookmarks</h3>
      </NavLink>
      <NavLink to='/profile' className='menu-item'>
        <span className='sidebar-icons'>
          <FiUser />
        </span>
        <h3 className='sidebar-options'>Profile</h3>
      </NavLink>
    </div>
  );
};
