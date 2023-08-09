import React, {useContext} from 'react';

import classes from './Navigation.module.css';
import AuthContextValue from '../../context/auth-context';

const Navigation = (props) => {
  const cxt = useContext(AuthContextValue);
  return (
    <nav className={classes.nav}>
      <ul>
        {cxt.isUserLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {cxt.isUserLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {cxt.isUserLoggedIn && (
          <li>
            <button onClick={cxt.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
