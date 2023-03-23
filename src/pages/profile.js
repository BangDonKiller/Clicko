import React, { useEffect, useState } from "react";
import avatar from "./avatar.png";
// import "./profile.css";
import "./sidebar.css";
import { db } from "../backend/firebase";
import { collection, getDocs } from "firebase/firestore";

function Profile() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userInfoCollection = collection(db, "users");
    const getUserInfo = async () => {
      try {
        const data = await getDocs(userInfoCollection);
        const filteredData = await data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUserList(filteredData);
        console.log(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getUserInfo();
  }, []);

  return (
    <nav className="menu" tabIndex="0">
      <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
        <img src={avatar} alt="Avatar" />
        <div className="profile__info">
              {userList.map((user) => (
                <div className="profile__info__item" key={user.id}>
                  <h3 className="username">{user.name}</h3>
                  <p className="usermail"><i class="fa fa-envelope" aria-hidden="true"></i> {user.email}</p>
                  <p className="userscore">{user.score}</p>
                  {/* <i class="fa fa-trophy" aria-hidden="true"></i> */}
                </div>
              ))}
            </div>
      </header>
      <ul>
        <li tabIndex="0" className="icon-dashboard"><span>Dashboard</span></li>
        <li tabIndex="0" className="icon-customers"><span>Customers</span></li>
        <li tabIndex="0" className="icon-users"><span>Users</span></li>
        <li tabIndex="0" className="icon-settings"><span>Settings</span></li>
      </ul>
    </nav>
  );
}

export default Profile;