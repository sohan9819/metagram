import { FiSun, FiMoon } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggle } from '../features/theme/themeSlice';
import { useRef, useEffect } from 'react';

export const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const toggleCheckbox = useRef(null);

  useEffect(() => {
    toggleCheckbox.current.checked = theme === 'dark';
  }, []);

  useEffect(() => {
    document.body.classList = [theme];
  }, [theme]);

  const themeChangehandler = () => {
    toggleCheckbox.current.checked
      ? dispatch(setTheme('dark'))
      : dispatch(setTheme('light'));
  };

  return (
    <label htmlFor='toggler-checkbox' className='toggler'>
      <input
        type='checkbox'
        id='toggler-checkbox'
        onChange={themeChangehandler}
        ref={toggleCheckbox}
      />
      <span className='ball'></span>
      <FiSun className='sun' />
      <FiMoon className='moon' />
    </label>
  );
};
