import React, { useContext, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { CreateContext } from '../context/CreateContext';

const ToggleTheme = () => {
  const context = useContext(CreateContext);

  console.log(context.theme);

  const [button, setButton] = useState(true);

  const handleTheme = () => {
    const changeTheme = context.theme === 'light' ? 'dark' : 'light';
    context.setTheme(changeTheme);
    setButton(!button);
  };

  return (
    <div className="toggle" onClick={handleTheme}>
      {button ? (
        <FaSun className="toggle__sun" />
      ) : (
        <FaMoon className="toggle__moon" />
      )}
    </div>
  );
};

export default ToggleTheme;
