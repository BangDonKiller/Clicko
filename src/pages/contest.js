import React from "react";

function Contest({ pending, complete, contest_name, join_code, user1, user2}) {
  const [pending, setPending] = React.useState("True");
  const [complete, setComplete] = React.useState("False");

  return (
    <div>
      {pending ? (
        <div className="contest_pending">
          <div className="contest_title">{contest_name}</div>
          <div className="light-loader">
              <div className="loader"></div>
            </div>
          <div className="contest_join_code">Join Code: {join_code}</div>
        </div>
      ) : (
        <div className="contest_item">
          <div className="first_user">{user1}</div>
            <div className="contest_title">{contest_name}</div>
          <div className="second_user">{user2}</div>
        </div>
      )}
    </div>
  );
}

export default Contest;