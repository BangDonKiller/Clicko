import React from "react";
import "./contest.css";

function Contest() {
  const contest_name = "DashBoard001";
  const join_code = "123456";
  const pending = false;
  // const winner = "None";
  const user1 = "User1";
  const user2 = "User2";

  // const [pending, setPending] = React.useState("True");
  // const [complete, setComplete] = React.useState("False");

  return (
    <div className="contest_pg">
      {pending ? (
        <div className="contest_pending">
          <div className="contest_title">- {contest_name} -</div>
          <div className="contest_join_code">Join Code: {join_code}</div>
          <div className="contest-loader">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <div className="contest_complete">
          <div
            className="first_user"
            onClick={() => {
              console.log("User1 won");
              window.history.back();
            }}
          >
            {user1}
          </div>
          <div className="contest_title" onClick={() => {
              console.log("Drew");
              window.history.back();
            }}>{contest_name}</div>
          <div
            className="second_user"
            onClick={() => {
              console.log("User2 won");
              window.history.back();
            }}
          >
            {user2}
          </div>
        </div>
      )}
    </div>
  );
}

export default Contest;
