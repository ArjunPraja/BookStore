// import { AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const UserNavigationPanel = () => {
//   return (
//     <AnimatePresence>
//       <div className="bg-white absolute right-0 top-14 border border-grey w-60 duration-200 rounded-lg shadow-lg">
//         <Link to="/profile" className="block pl-4 py-2 hover:bg-gray-200">
//           Profile  
//         </Link>
//         <Link to="/settings" className="block pl-4 py-2 hover:bg-gray-200">
//           Settings
//         </Link>
//         <div className="border-t border-gray-200 my-2"></div>
//         <Link to='/'>
//         <button className="w-full text-left pl-4 py-2 hover:bg-gray-200">
//           <h1 className="font-bold text-lg">LogOut</h1>
//           <p className="text-gray-600">@username</p>
//         </button>
//         </Link>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default UserNavigationPanel;






import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const UserNavigationPanel = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/users/userinfo'); // Update this URL to your actual endpoint
        const data = await response.json();
        if (response.ok) {
          setUsername(data.data.username); // Adjust according to your response structure
        } else {
          console.error('Failed to fetch user details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <AnimatePresence>
      <div className="bg-white absolute right-0 top-14 border border-grey w-60 duration-200 rounded-lg shadow-lg">
        <Link to="/profile" className="block pl-4 py-2 hover:bg-gray-200">
          Profile  
        </Link>
        <Link to="/settings" className="block pl-4 py-2 hover:bg-gray-200">
          Settings
        </Link>
        <div className="border-t border-gray-200 my-2"></div>
        <Link to='/'>
        <button className="w-full text-left pl-4 py-2 hover:bg-gray-200">
          <h1 className="font-bold text-lg">LogOut</h1>
          <p className="text-gray-600">@{username}</p>
        </button>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default UserNavigationPanel;
