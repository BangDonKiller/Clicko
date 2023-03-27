import React,{useEffect, useState} from "react";
import "./ranking.css";
import avatar from "./avatar.png";
import { db } from "../backend/firebase";

import { collection, query, orderBy, limit, getDocs } from "firebase/firestore";


function Ranking() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const q = query(collection(db, "users"), orderBy("score", "desc"), limit(10));
      const querySnapshot = await getDocs(q);
      const usersData = querySnapshot.docs.map((doc) => doc.data());
      setUsers(usersData);
    };
    getUsers();
  }, []);

  return (
    <div className="ranking_bg">
      <section className="top_three">
        {users.slice(0, 3).map((user, index) => (
          <div key={user.id} className={`place_${index + 1}`}>
            <img src={avatar} alt="Avatar" className="avatar" />
            <div className="player_name">{user.name}</div>
            <div className="player_score">- {user.score} pts -</div>
          </div>
        ))}
      </section>
      <section className="ranking_board">
        {users.slice(3).map((user, index) => (
          <React.Fragment key={user.id}>
            <div className="user_ranking">
              <div className="ranking_num">{index + 4}. </div>
              <div className="ranking_name">{user.name}</div>
              <div className="ranking_score">{user.score} pts</div>
            </div>
            {index !== users.length - 4 && <b className="hr anim"></b>}
          </React.Fragment>
        ))}
      </section>
    </div>
  );
}

export default Ranking;























// function Ranking() {
//   return (
//     <div className="ranking_bg">
//       <section className="top_three">
//         <div className="first_place">
//           <img src={avatar} alt="Avatar" className="avatar" />
//           <div className="player_name">John Doe</div>
//           <div className="player_score">- 1700 pts -</div>
//         </div>
//         <div className="second_place">
//           <img src={avatar} alt="Avatar" className="avatar" />
//           <div className="player_name">Tom Cruise</div>
//           <div className="player_score">- 1600 pts -</div>
//         </div>
//         <div className="third_place">
//           <img src={avatar} alt="Avatar" className="avatar" />
//           <div className="player_name">Gerald Jinx</div>
//           <div className="player_score">- 1500 pts -</div>
//         </div>
//       </section>
//       <section className="ranking_board">
//         <div className="user_ranking">
//           <div className="ranking_num">4. </div>
//           <div className="ranking_name">Jason</div>
//           <div className="ranking_score">1400 pts</div>
//         </div>
//         <b class="hr anim"></b>
//         <div className="user_ranking">
//           <div className="ranking_num">5. </div>
//           <div className="ranking_name">Emily</div>
//           <div className="ranking_score">1300 pts</div>
//         </div>
//         <b class="hr anim"></b>
//         <div className="user_ranking">
//           <div className="ranking_num">6. </div>
//           <div className="ranking_name">Jason</div>
//           <div className="ranking_score">1400 pts</div>
//         </div>
//         <b class="hr anim"></b>
//         <div className="user_ranking">
//           <div className="ranking_num">7. </div>
//           <div className="ranking_name">Emily</div>
//           <div className="ranking_score">1300 pts</div>
//         </div>
//         <b class="hr anim"></b>
//         <div className="user_ranking">
//           <div className="ranking_num">8. </div>
//           <div className="ranking_name">Jason</div>
//           <div className="ranking_score">1400 pts</div>
//         </div>
//         <b class="hr anim"></b>
//         <div className="user_ranking">
//           <div className="ranking_num">9. </div>
//           <div className="ranking_name">Emily</div>
//           <div className="ranking_score">1300 pts</div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Ranking;
