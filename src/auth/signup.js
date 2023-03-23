import React, { useState } from "react";
import "./signup.css";
import { auth } from "../backend/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../backend/firebase";
import { doc, setDoc } from "firebase/firestore";

function Signup({ onSwitchPage, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [email, setEmail] = useState("");

  // const [formData, setFormData] = useState(
  //   {
  //     username: "",
  //     password: "",
  //     // passwordConfirm: "",
  //     email: ""
  //   }
  // );

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user: ", user);
        // Add user's email and name to Firestore
        setDoc(doc(db, "users", user.uid), {
          email: email,
          name: username,
          password: password,
          score: 1500
        });

        // const userRef = db.collection("users").doc(user.uid);
        // userRef.set({
        //   email: email,
        //   name: username,
        //   password: password,
        // })
        // .then(() => {
        //   console.log("Document successfully written!");
        onLogin();
        // })
        // .catch((error) => {
        //   console.error("Error writing document: ", error);
        // });
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    console.log(
      `Submitted username: ${username}, password: ${password}, email: ${email}`
    );
  };

  return (
    <div
      id="signup-tab-content"
      className="tabcontent"
      style={{ display: "block" }}
    >
      <form
        className="signup-form"
        action=""
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="inputBox">
          <input
            type="email"
            className="input"
            id="user_email_signup"
            autoComplete="off"
            required="required"
            value={email}
            onChange={handleEmailChange}
          />
          <span>Email</span>
        </div>
        <div className="inputBox">
          <input
            type="text"
            className="input"
            id="user_name_signup"
            autoComplete="off"
            required="required"
            value={username}
            onChange={handleUsernameChange}
          />
          <span>UserName</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            className="input"
            id="user_pass_signup"
            autoComplete="off"
            required="required"
            value={password}
            onChange={handlePasswordChange}
          />
          <span>Password</span>
        </div>
        <div className="inputBox">
          <input
            type="password"
            className="input"
            id="user_pass_confirm"
            autoComplete="off"
            required="required"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
          />
          <span>Confirm Password</span>
        </div>
        <input type="submit" className="button" value="Sign Up" />
      </form>
      <div className="help-text">
        <p>
        <span>Already have an account? </span>
        <button onClick={onSwitchPage}>Log in now</button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
