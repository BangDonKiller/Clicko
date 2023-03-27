import "./App.css";
import Contest from "./pages/contest";
import SideBar from "./pages/sideBar";
import "./loader.css";
import React, { useEffect, useState } from "react";
import Landing from "./auth/landing";
import { auth } from "./backend/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import Ranking from "./pages/ranking";

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
              <SideBar />
              <Routes>
                <Route path="/" element={<Contest/>} />
                <Route path="/ranking" element={<Ranking/>} />

              </Routes>
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
