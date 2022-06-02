import { FiSearch } from 'react-icons/fi';

export const SearchBar = () => {
  return (
    <div className='search-bar'>
      <FiSearch />
      <input
        className='search-input'
        type='search'
        name=''
        id=''
        placeholder='Search for creators , insprirations and projects'
      />
    </div>
  );
};
