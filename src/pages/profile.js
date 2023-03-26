import React, { useEffect, useState } from "react";
import avatar from "./avatar.png";
import "./profile.css";
import { db, auth } from "../backend/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userInfoCollection = collection(db, "users");
    const currentUser = auth.currentUser;

    const getUserInfo = async () => {
      try {
        const userDoc = doc(userInfoCollection, currentUser.uid);
        const userData = await getDoc(userDoc);

        if (userData.exists()) {
          setUserData(userData.data());
        } else {
          console.log("No such user document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  if (!userData) {
    return <p>Loading...</p>;
  }

  const { name, email, score } = userData;

  return (
    <nav className="menu" tabIndex="0">
      <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
        <img src={avatar} alt="Avatar" />
        <div className="profile__info">
          <div className="profile__info__item">
            <h3 className="username">{name}</h3>
            <p className="usermail">
              <i class="fa fa-envelope" aria-hidden="true"></i> {email}
            </p>
            <p className="userscore">{score}</p>
          </div>
        </div>
      </header>
      <ul>
        <li tabIndex="0" className="icon-contest">
          <i class="fa fa-tasks" aria-hidden="true"></i>
          <span> Contest</span>
        </li>
        <li tabIndex="0" className="icon-ranking">
          <i class="fa fa-bar-chart" aria-hidden="true"></i>{" "}
          <span>Ranking</span>
        </li>
        <li
          tabIndex="0"
          className="icon-forum"
          style={{ color: "#808080", backgroundColor: "#696969" }}
        >
          <i class="fa fa-comments-o" aria-hidden="true"></i>{" "}
          <span>Forum</span>
        </li>
        <li
          tabIndex="0"
          className="icon-users"
          style={{ color: "#808080", backgroundColor: "#696969" }}
        >
          <i class="fa fa-user" aria-hidden="true"></i> <span>Profile</span>
        </li>
        <li
          tabIndex="0"
          className="icon-settings"
          style={{ color: "#808080", backgroundColor: "#696969" }}
        >
          <i class="fa fa-cog" aria-hidden="true"></i> <span>Settings</span>
        </li>
      </ul>
    </nav>
  );
}

export default Profile;