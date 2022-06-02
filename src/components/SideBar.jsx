import { FiHome, FiCompass, FiBookmark, FiUser } from 'react-icons/fi';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <a href='#' className='menu-item active'>
        <span className='sidebar-icons'>
          <FiHome />
        </span>
        <h3 className='sidebar-options'>Home</h3>
      </a>
      <a href='#' className='menu-item'>
        <span className='sidebar-icons'>
          <FiCompass />
        </span>
        <h3 className='sidebar-options'>Explore</h3>
      </a>
      <a href='#' className='menu-item'>
        <span className='sidebar-icons'>
          <FiBookmark />
        </span>
        <h3 className='sidebar-options'>Bookmarks</h3>
      </a>
      <a href='#' className='menu-item'>
        <span className='sidebar-icons'>
          <FiUser />
        </span>
        <h3 className='sidebar-options'>Profile</h3>
      </a>
    </div>
  );
};
