import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContextValue from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const LoggedUser = localStorage.getItem("isUserLoggedIn");

    if (LoggedUser === "1") {
      setIsLoggedIn(true); //changing the state;
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isUserLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isUserLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContextValue.Provider
      value={{
        isUserLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContextValue.Provider>
  );
}

export default App;
