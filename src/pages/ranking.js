import React from "react";
import "./ranking.css";
import avatar from "./avatar.png";

function Ranking() {
  return (
    <div className="ranking_bg">
      <section className="top_three">
        <div className="first_place">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="player_name">John Doe</div>
          <div className="player_score">- 1700 pts -</div>
        </div>
        <div className="second_place">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="player_name">Tom Cruise</div>
          <div className="player_score">- 1600 pts -</div>
        </div>
        <div className="third_place">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="player_name">Gerald Jinx</div>
          <div className="player_score">- 1500 pts -</div>
        </div>
      </section>
      <section className="ranking_board">
        <div className="user_ranking">
          <div className="ranking_num">4. </div>
          <div className="ranking_name">Jason</div>
          <div className="ranking_score">1400 pts</div>
        </div>
        <b class="hr anim"></b>
        <div className="user_ranking">
          <div className="ranking_num">5. </div>
          <div className="ranking_name">Emily</div>
          <div className="ranking_score">1300 pts</div>
        </div>
        <b class="hr anim"></b>
        <div className="user_ranking">
          <div className="ranking_num">6. </div>
          <div className="ranking_name">Jason</div>
          <div className="ranking_score">1400 pts</div>
        </div>
        <b class="hr anim"></b>
        <div className="user_ranking">
          <div className="ranking_num">7. </div>
          <div className="ranking_name">Emily</div>
          <div className="ranking_score">1300 pts</div>
        </div>
        <b class="hr anim"></b>
        <div className="user_ranking">
          <div className="ranking_num">8. </div>
          <div className="ranking_name">Jason</div>
          <div className="ranking_score">1400 pts</div>
        </div>
        <b class="hr anim"></b>
        <div className="user_ranking">
          <div className="ranking_num">9. </div>
          <div className="ranking_name">Emily</div>
          <div className="ranking_score">1300 pts</div>
        </div>
      </section>
    </div>
  );
}

export default Ranking;
