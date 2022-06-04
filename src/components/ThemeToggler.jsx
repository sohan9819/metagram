import { FiSun, FiMoon } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme, toggle } from '../features/theme/themeSlice';
import { useRef, useEffect } from 'react';

export const ThemeToggler = () => {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const toggleCheckbox = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      toggleCheckbox.current.checked = true;
      dispatch(setTheme('dark'));
    } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      toggleCheckbox.current.checked = false;
      dispatch(setTheme('light'));
    }
  }, []);

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
