import "./App.css";
import Profile from "./pages/profile";
import DashBroad from "./pages/dashboard";
import "./loader.css";
import React, { useEffect, useState } from "react";
import Landing from "./auth/landing";
import { auth } from "./backend/firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user is logged in
    // setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  // Set loggedIn to true when the user logs in or signs up
  function handleLogin() {
    setLoggedIn(true);
  }

  return (
    <div>
      {loading ? (
        <div className="loading-bg">
          <div className="loader"></div>
        </div>
      ) : (
        <div>
          {loggedIn ? (
            <div className="main-bg">
              <Profile />
              {/* <DashBroad /> */}
            </div>
          ) : (
            <div className="App">
              <div className="auth-section">
                <Landing onLogin={handleLogin} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
