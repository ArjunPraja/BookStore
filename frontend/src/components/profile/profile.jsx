// import React, { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({ username: '', email: '', role: '' });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         console.log("Response status:", response.status);

//         if (!response.ok) {
//           throw new Error('Failed to fetch user details');
//         }

//         const user = await response.json();
//         console.log("User data:", user);

//         setUserInfo({
//           username: user.data.username,
//           email: user.data.email,
//           role: user.data.role // Ensure role is under data
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in with Firebase
//         const email = user.email;
//         const extractedUsername = email.substring(0, email.indexOf('@'));
//         setUserInfo((prevUserInfo) => ({
//           ...prevUserInfo,
//           username: extractedUsername,
//           email: email
//         }));
//       } else {
//         // User is not signed in with Firebase, fetch user data from your backend
//         fetchUserData();
//       }
//     });
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside className="w-80 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 shadow-lg">
//         <div className="text-center mb-6">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="User avatar"
//             className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
//           />
//           <h2 className="text-2xl font-semibold mt-4">{userInfo.username}</h2>
//           <p className="text-sm mt-1">{userInfo.email}</p>
//           <p className="italic text-gray-200 mt-1">{userInfo.role}</p>
//         </div>
//         <nav className="flex flex-col space-y-4 mt-4">
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Favourites
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Order History
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Settings
//           </button>
//           <button className="py-3 px-4 text-left text-red-500 hover:text-red-400 font-semibold transition duration-300">
//             Log Out
//           </button>
//         </nav>
//       </aside>
//       <main className="flex-grow p-6">
//         <h1 className="text-3xl font-bold mb-6">Profile Details</h1>
//         {/* Add additional profile content here */}
//       </main>
//     </div>
//   );
// };

// export default Profile;





// import React, { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({
//     username: '',
//     email: '',
//     role: '',
//     city: '',
//     age: '',
//     country: '',
//     state: '',
//     contactNo: ''
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         console.log("Response status:", response.status);

//         if (!response.ok) {
//           throw new Error('Failed to fetch user details');
//         }

//         const user = await response.json();
//         console.log("User data:", user);

//         setUserInfo({
//           username: user.data.username,
//           email: user.data.email,
//           role: user.data.role,
//           city: user.data.city,
//           age: user.data.age,
//           country: user.data.country,
//           state: user.data.state,
//           contactNo: user.data.contactNo
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in with Firebase
//         const email = user.email;
//         const extractedUsername = email.substring(0, email.indexOf('@'));
//         setUserInfo((prevUserInfo) => ({
//           ...prevUserInfo,
//           username: extractedUsername,
//           email: email
//         }));
//       } else {
//         // User is not signed in with Firebase, fetch user data from your backend
//         fetchUserData();
//       }
//     });
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside className="w-80 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 shadow-lg">
//         <div className="text-center mb-6">
//           <img
//             src="https://via.placeholder.com/100"
//             alt="User avatar"
//             className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
//           />
//           <h2 className="text-2xl font-semibold mt-4">{userInfo.username}</h2>
//           <p className="text-sm mt-1">{userInfo.email}</p>
//           <p className="italic text-gray-200 mt-1">{userInfo.role}</p>
//         </div>
//         <nav className="flex flex-col space-y-4 mt-4">
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Favourites
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Order History
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Settings
//           </button>
//           <button className="py-3 px-4 text-left text-red-500 hover:text-red-400 font-semibold transition duration-300">
//             Log Out
//           </button>
//         </nav>
//       </aside>
//       <main className="flex-grow p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold mb-6 text-gray-900">Profile Details</h1>
//         <div className="space-y-6">
//           <div className="p-4 border rounded-lg shadow-sm">
//             <p className="text-lg font-semibold"><strong>Username:</strong> {userInfo.username}</p>
//             <p className="text-gray-600"><strong>Email:</strong> {userInfo.email}</p>
//             <p className="text-gray-600"><strong>Contact Number:</strong> {userInfo.contactNo}</p>
//             <p className="text-gray-600"><strong>Age:</strong> {userInfo.age}</p>
//             <p className="text-gray-600"><strong>City:</strong> {userInfo.city}</p>
//             <p className="text-gray-600"><strong>State:</strong> {userInfo.state}</p>
//             <p className="text-gray-600"><strong>Country:</strong> {userInfo.country}</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile;






// import React, { useState, useEffect } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// const Profile = () => {
//   const [userInfo, setUserInfo] = useState({
//     username: '',
//     email: '',
//     role: '',
//     city: '',
//     age: '',
//     country: '',
//     state: '',
//     contactNo: '',
//     avatar: '' // Add an avatar field
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         console.log("Token:", token);

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         console.log("Response status:", response.status);

//         if (!response.ok) {
//           throw new Error('Failed to fetch user details');
//         }

//         const user = await response.json();
//         console.log("User data:", user);

//         setUserInfo({
//           username: user.data.username,
//           email: user.data.email,
//           role: user.data.role,
//           city: user.data.city,
//           age: user.data.age,
//           country: user.data.country,
//           state: user.data.state,
//           contactNo: user.data.contactNo,
//           avatar: `https://ui-avatars.com/api/?name=${user.data.username}&background=random` // Generate avatar URL
//         });
//       } catch (error) {
//         console.error("Error fetching user details:", error);
//       }
//     };

//     const auth = getAuth();
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const email = user.email;
//         const extractedUsername = email.substring(0, email.indexOf('@'));
//         setUserInfo((prevUserInfo) => ({
//           ...prevUserInfo,
//           username: extractedUsername,
//           email: email,
//           avatar: `https://ui-avatars.com/api/?name=${extractedUsername}&background=random` // Generate avatar URL
//         }));
//       } else {
//         fetchUserData();
//       }
//     });
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <aside className="w-80 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 shadow-lg">
//         <div className="text-center mb-6">
//           <img
//             src={userInfo.avatar}
//             alt="User avatar"
//             className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
//           />
//           <h2 className="text-2xl font-semibold mt-4">{userInfo.username}</h2>
//           <p className="text-sm mt-1">{userInfo.email}</p>
//           <p className="italic text-gray-200 mt-1">{userInfo.role}</p>
//         </div>
//         <nav className="flex flex-col space-y-4 mt-4">
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Favourites
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Order History
//           </button>
//           <button className="py-3 px-4 text-left bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 transform hover:scale-105">
//             Settings
//           </button>
//           <button className="py-3 px-4 text-left text-red-500 hover:text-red-400 font-semibold transition duration-300">
//             Log Out
//           </button>
//         </nav>
//       </aside>
//       <main className="flex-grow p-6">
//         <h1 className="text-3xl font-bold mb-6">Profile Details</h1>
//         <div className="space-y-4">
//           <p><strong>Username:</strong> {userInfo.username}</p>
//           <p><strong>Email:</strong> {userInfo.email}</p>
//           <p><strong>City:</strong> {userInfo.city}</p>
//           <p><strong>Age:</strong> {userInfo.age}</p>
//           <p><strong>Country:</strong> {userInfo.country}</p>
//           <p><strong>State:</strong> {userInfo.state}</p>
//           <p><strong>Contact Number:</strong> {userInfo.contactNo}</p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Profile;





// src/components/Profile.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { generateProfilePicture } from '../utils'; // Import the utility function
import {generateProfilePicture} from '../utils/utils';
const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    role: '',
    city: '',
    age: '',
    country: '',
    state: '',
    contactNo: '',
    avatar: '' // Add an avatar field
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log("Token:", token);

        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
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
          role: user.data.role,
          city: user.data.city,
          age: user.data.age,
          country: user.data.country,
          state: user.data.state,
          contactNo: user.data.contactNo,
          avatar: generateProfilePicture(user.data.username) // Use the utility function
        });
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const extractedUsername = email.substring(0, email.indexOf('@'));
        setUserInfo((prevUserInfo) => ({
          ...prevUserInfo,
          username: extractedUsername,
          email: email,
          avatar: generateProfilePicture(extractedUsername) // Use the utility function
        }));
      } else {
        fetchUserData();
      }
    });
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-80 bg-gradient-to-br from-blue-700 to-blue-500 text-white p-6 shadow-lg">
        <div className="text-center mb-6">
          <img
            src={userInfo.avatar}
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
        <div className="space-y-4">
          <p><strong>Username:</strong> {userInfo.username}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>City:</strong> {userInfo.city}</p>
          <p><strong>Age:</strong> {userInfo.age}</p>
          <p><strong>Country:</strong> {userInfo.country}</p>
          <p><strong>State:</strong> {userInfo.state}</p>
          <p><strong>Contact Number:</strong> {userInfo.contactNo}</p>
        </div>
      </main>
    </div>
  );
};

export default Profile;
