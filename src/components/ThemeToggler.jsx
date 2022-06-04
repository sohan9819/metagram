import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggler = () => {
  return (
    <label for='toggler-checkbox' class='toggler'>
      <input type='checkbox' id='toggler-checkbox' />
      <span class='ball'></span>
      {/* <i class='uil uil-sun sun'></i>
        <i class='uil uil-moon moon'></i> */}
      <FiSun className='sun' />
      <FiMoon className='moon' />
    </label>
  );
};
