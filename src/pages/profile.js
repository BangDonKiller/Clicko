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
    // <div className="profile">
    //   <div class="container noselect">
    //     <div class="canvas">
    //       <div id="card">
    //         <img src={avatar} alt="Avatar" className="avatar"></img>
    //         <div className="profile__info">
    //           {userList.map((user) => (
    //             <div className="profile__info__item" key={user.id}>
    //               <h3 className="username">{user.name}</h3>
    //               <p className="usermail"><i class="fa fa-envelope" aria-hidden="true"></i> {user.email}</p>
    //               <p className="userscore">{user.score}</p>
    //               {/* <i class="fa fa-trophy" aria-hidden="true"></i> */}
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Profile;



















// Cool profile card
{/* <div className="profile">
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div class="tracker tr-10"></div>
    <div class="tracker tr-11"></div>
    <div class="tracker tr-12"></div>
    <div class="tracker tr-13"></div>
    <div class="tracker tr-14"></div>
    <div class="tracker tr-15"></div>
    <div class="tracker tr-16"></div>
    <div class="tracker tr-17"></div>
    <div class="tracker tr-18"></div>
    <div class="tracker tr-19"></div>
    <div class="tracker tr-20"></div>
    <div class="tracker tr-21"></div>
    <div class="tracker tr-22"></div>
    <div class="tracker tr-23"></div>
    <div class="tracker tr-24"></div>
    <div class="tracker tr-25"></div>
    <div id="card">
      <img src={avatar} alt="Avatar" className="avatar"></img>
      <div className="profile__info">
        {userList.map((user) => (
          <div className="profile__info__item" key={user.id}>
            <h3 className="username">{user.name}</h3>
            <p className="usermail"><i class="fa fa-envelope" aria-hidden="true"></i> {user.email}</p>
            <p className="userscore">{user.score}</p>
             <i class="fa fa-trophy" aria-hidden="true"></i>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
</div> */}