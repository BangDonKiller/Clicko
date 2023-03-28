import React from "react";
import "./contest.css";
var glicko2 = require("glicko2");

function Contest() {
  const contest_name = "DashBoard001";
  const join_code = "123456";
  const pending = false;
  const user1 = "User1";
  let user1_score = 1500;
  const user2 = "User2";
  let user2_score = 1500;

  var settings = {
    // tau : "Reasonable choices are between 0.3 and 1.2, though the system should
    //      be tested to decide which value results in greatest predictive accuracy."
    tau: 0.5,
    // rating : default rating
    rating: 1500,
    //rd : Default rating deviation
    //     small number = good confidence on the rating accuracy
    rd: 200,
    //vol : Default volatility (expected fluctation on the player rating)
    vol: 0.06,
  };
  var ranking = new glicko2.Glicko2(settings);

  const player1 = ranking.makePlayer(user1_score, settings.rd);
  const player2 = ranking.makePlayer(user2_score, settings.rd);
  var matches = [];
  const updateScores = (winner) => {
    if (winner === "User1") {
      matches.push([player1, player2, 1]); //player1 won over player2
    } else if (winner === "User2") {
      matches.push([player1, player2, 0]); //player1 lost against player2
    } else {
      matches.push([player1, player2, 0.5]); //player1 and player2 drew
    }
    ranking.updateRatings(matches);

    user1_score = player1.getRating();
    user2_score = player2.getRating();

    console.log(`New rating for ${user1}: ${user1_score}`);
    console.log(`New rating for ${user2}: ${user2_score}`);
  };

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
              updateScores(user1);
              window.history.back();
            }}
          >
            {user1}
          </div>
          <div
            className="contest_title"
            onClick={() => {
              updateScores("draw");
              window.history.back();
            }}
          >
            {contest_name}
          </div>
          <div
            className="second_user"
            onClick={() => {
              updateScores(user2);
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
