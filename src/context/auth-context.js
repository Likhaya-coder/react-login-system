import React from 'react';

const AuthContextValue = React.createContext({
    isUserLoggedIn: false,
    onLogout: () => {}
});

export default AuthContextValue;