// // src/components/Profile.jsx
// import React, { useState, useEffect } from 'react';
// // import { fetchUserDetails } from '../Api/api';

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({ username: '', email: '', role: '' });

//   useEffect(() => {
//     const getUserInfo = async () => {
//       try {
//         const user = await fetchUserDetails();
//         setUserInfo({
//           username: user.username,
//           email: user.email,
//           role: user.role
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     getUserInfo();
//   }, []);

//   return (
//     <aside className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white p-6 w-80 h-screen shadow-lg rounded-lg flex flex-col">
//       <div className="text-center mb-6 flex-shrink-0">
//         <img 
//           src="https://via.placeholder.com/100" 
//           alt="User avatar" 
//           className="rounded-full mx-auto border-4 border-white shadow-lg" 
//         />
//         <h2 className="text-2xl font-semibold mt-4">{userInfo.username}</h2>
//         <p className="text-sm mt-1">{userInfo.email}</p>
//         <p className="italic text-gray-300 mt-1">{userInfo.role}</p>
//       </div>
//       <ul className="flex-grow space-y-3 mt-4">
//         <li>
//           <button 
//             className="w-full text-left py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105"
//           >
//             Favourites
//           </button>
//         </li>
//         <li>
//           <button 
//             className="w-full text-left py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105"
//           >
//             Order History
//           </button>
//         </li>
//         <li>
//           <button 
//             className="w-full text-left py-3 px-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105"
//           >
//             Settings
//           </button>
//         </li>
//         <li>
//           <button 
//             className="w-full text-left py-3 px-4 text-red-500 hover:text-red-400 font-semibold transition duration-300"
//           >
//             Log Out
//           </button>
//         </li>
//       </ul>
//     </aside>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [userInfo, setUserInfo] = useState({ username: '', email: '', role: '' });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token:", token);

        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:8080/api/users/userinfo', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const user = await response.json();
        console.log("User data:", user);

        setUserInfo({
          username: user.data.username,
          email: user.data.email,
          role: user.data.role  // Ensure `role` is under `data`
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    getUserInfo();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-80 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 shadow-lg">
        <div className="text-center mb-6">
          <img 
            src="https://via.placeholder.com/100" 
            alt="User avatar" 
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg" 
          />
          <h2 className="text-2xl font-semibold mt-4">{userInfo.username}</h2>
          <p className="text-sm mt-1">{userInfo.email}</p>
          <p className="italic text-gray-200 mt-1">{userInfo.role}</p>
        </div>
        <nav className="flex flex-col space-y-4 mt-4">
          <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
            Favourites
          </button>
          <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
            Order History
          </button>
          <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
            Settings
          </button>
          <button className="py-3 px-4 text-left text-red-500 hover:text-red-400 font-semibold transition duration-300">
            Log Out
          </button>
        </nav>
      </aside>
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Profile Details</h1>
        {/* Add additional profile content here */}
      </main>
    </div>
  );
};

export default Profile;
