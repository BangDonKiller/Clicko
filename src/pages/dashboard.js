import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { db, auth } from "../backend/firebase";
import {
  collection,
  doc,
  getDoc,
  addDoc,
  onSnapshot,
} from "firebase/firestore"; //updateDoc

function DashBoard() {
  const [inputValues, setInputValues] = useState([]);
  const [userData, setUserData] = useState(null);
  const [clickos, setClickos] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const clickosCollection = collection(db, "clickos");
    const unsubscribe = onSnapshot(clickosCollection, (snapshot) => {
      const clickosList = [];
      snapshot.forEach((doc) => {
        clickosList.push({ id: doc.id, ...doc.data() });
      });
      setClickos(clickosList);
    });

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
    return unsubscribe;
  }, []);

  if (!userData) {
    return (
      <div className="loading-bg">
        <div className="loader"></div>
      </div>
    );
  }

  const { name, score } = userData; // ClickoTime, identity
  var joinCode;

  const handleCreateClicko = async () => {
    try {
      const docRef = await addDoc(collection(db, "clickos"), {
        player1: name,
        player2: "",
        clickoName: document.getElementById("clicko_name").value,
        status: "pending...",
        result: "",
        code: "",
      });
      joinCode = docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    const state = {
      userName: name,
      userScore: score,
      clickoName: document.getElementById("clicko_name").value,
      joinCode: joinCode,
    };
    navigate("/contest", { state: state });
  };

  const handleInvite = (clickoId, inputValue) => {
    if (inputValue !== clickoId) {
      alert("Wrong Code !!!");
      return;
    } else {
      alert("Correct Code !!!");
    }
  };



  // var totalCreateTime = 5;

  // if (identity === "normal") {
  //   totalCreateTime = 5;
  // } else if (identity === "premium") {
  //   totalCreateTime = 10;
  // } else if (identity === "admin") {
  //   totalCreateTime = 15;
  // }

  return (
    <div className="dashboard_bg">
      <section className="notifications">
        <div className="coffee-card">
          <span className="title">&#9749; Clicko Notice</span>
          <p className="description">
            We are still in the process of building this website. Every time 20
            new members join, we will add a new feature to it.
          </p>
        </div>
        <div className="coffee-card">
          <span className="title">&#x1F4B5; Donation Notice</span>
          <p className="description">
            This is a work in progress, you can donate to keep it going. If you
            donate more than 50 NT$, you'll get a free premium membership.
          </p>
        </div>
        <div className="coffee-card">
          <span className="title">&#x1F41E; Bug Report Notice</span>
          <p className="description">
            If you find any bugs, please report them to us. We'll fix them as
            soon as possible. <br />
            Find us on{" "}
            <a href="https://www.facebook.com/NCUcafeclub">Facebook</a>.
            <br />
          </p>
        </div>
      </section>
      <section className="contest_board">
        {clickos.map((clicko, index) => (
          console.log(clicko.id),
          <div className="contest_list" key={clicko.id}>
            <div className="contest_item">
              <div className="contest_title">{clicko.clickoName}</div>
              <div className="contest_time">{clicko.status}</div>
              <div className="input-container">
                <input required="" value={inputValues[index]} onChange={(e) => {
          const newValues = [...inputValues];
          newValues[index] = e.target.value;
          setInputValues(newValues);
        }}/>
                <button className="invite-btn" type="button" 
                  onClick={() => handleInvite(clicko.id, inputValues[index])}
                >
                  Join
                </button>
              </div>
            </div>
            <div className="h-divider">
              <div className="shadow"></div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: "20px",
          }}
        />
      </section>
      <section className="add_contest">
        <div className="create_contest">
          <span className="title">Create your Clicko</span>
          <div className="create_description">
            Create a Clicko and invite your friends to compete with you.
            <div className="light-loader">
              <div className="loader"></div>
            </div>
          </div>
        </div>
        <div className="create_clicko">
          <input
            type="text"
            className="clicko_name"
            id="clicko_name"
            name="clicko_name"
            placeholder="Clicko Name"
            autoComplete="off"
          />
          <input
            className="button--submit"
            value="Create"
            type="submit"
            onClick={handleCreateClicko}
          />
        </div>
        {/* <div className="create_footer">Time left: {ClickoTime}/{totalCreateTime}</div> */}
      </section>
    </div>
  );
}

export default DashBoard;
