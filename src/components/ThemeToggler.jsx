import { FiSun, FiMoon } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../features/theme/themeSlice';

export const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  const toggleHandler = (evt) => {
    dispatch(toggle());
    document.body.classList = [theme];
  };

  return (
    <label htmlFor='toggler-checkbox' className='toggler'>
      <input type='checkbox' id='toggler-checkbox' onClick={toggleHandler} />
      <span className='ball'></span>
      <FiSun className='sun' />
      <FiMoon className='moon' />
    </label>
  );
};
