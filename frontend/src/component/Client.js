// import React from 'react';
// import Avatar from '@mui/material/Avatar';

// function Client({ username }) {
//   return (
//     <div className="d-flex align-items-center mb-3">
//       <Avatar alt={username} src="" sx={{ width: 50, height: 50, borderRadius: "14px" }} />
//       <span className='mx-2'>{username || "User"}</span>
//     </div>
//   );
// }

// export default Client;

import React from "react";

const Client = ({ username, color }) => {
  return (
    <div className="d-flex align-items-center mb-2">
      <div className="rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "35px", height: "35px", backgroundColor: color, color: "#fff", fontWeight: "bold" }}>
        {username.charAt(0).toUpperCase()}
      </div>
      <span className="ms-2">{username}</span>
    </div>
  );
};

export default Client;
