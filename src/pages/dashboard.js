import React from 'react';

function DashBoard() {
  return (
    <div className="dashboard">
    </div>
  )
}

export default DashBoard;


// This dashboard might have the following functions:
// 1. show the current contests
// 2. show the current rank in this system
// 3. Able user to create a new contest
// 4. Able user to join a contest
// 5. A discussion forum




























// Cool dashboard
// import React, { useState } from "react";
// import "./dashboard.css"

// function DashBroad() {
//   const [activeTab, setActiveTab] = useState(0);

//   const tabHeaders = [
//     { icon: 'fa-code', label: 'Join' },
//     { icon: 'fa-pencil-square-o', label: 'Create' },
//     { icon: 'fa-bar-chart', label: 'Rank' },
//     { icon: 'fa-envelope-o', label: 'Forum' },
//   ];

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <div className="dashboard">
//     <div className="tabs">
//       <div className="tab-header">
//         {tabHeaders.map((tab, index) => (
//           <div
//             key={index}
//             className={index === activeTab ? 'active' : ''}
//             onClick={() => handleTabClick(index)}
//           >
//             <i className={`fa ${tab.icon}`}></i> {tab.label}
//           </div>
//         ))}
//       </div>
//       <div className="tab-indicator" style={{ left: `calc(calc(100% / 4) * ${activeTab})` }}></div>
//       <div className="tab-body">
//         {tabHeaders.map((tab, index) => (
//           <div key={index} className={index === activeTab ? 'active' : ''}>
//             <h2>This is {tab.label.toLowerCase()} section</h2>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// }

// export default DashBroad;