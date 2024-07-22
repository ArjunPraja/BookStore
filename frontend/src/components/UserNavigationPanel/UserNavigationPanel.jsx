// import React, { useEffect, useState } from 'react';
// import { AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const UserNavigationPanel = () => {
//   const logout = () => {
//     localStorage.clear();
//   };
  
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch user details');
//         }

//         const data = await response.json();
//         setUsername(data.data.username); // Adjust according to your response structure
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

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
//           <button onClick={logout} className="w-full text-left pl-4 py-2 hover:bg-gray-200">
//             <h1 className="font-bold text-lg">LogOut</h1>
//             <p className="text-gray-600">@{username}</p>
//           </button>
//         </Link>
//       </div>
//     </AnimatePresence>
//   );
// };

// export default UserNavigationPanel;




import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Import Firebase auth

const UserNavigationPanel = () => {
  const logout = () => {
    localStorage.clear();
    const auth = getAuth();
    auth.signOut();
  };
  
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }

        const data = await response.json();
        setUsername(data.data.username);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in with Firebase
        const email = user.email;
        const extractedUsername = email.substring(0, email.indexOf('@'));
        setUsername(extractedUsername);
      } else {
        // User is not signed in with Firebase, fetch user data from your backend
        fetchUserData();
      }
    });
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
          <button onClick={logout} className="w-full text-left pl-4 py-2 hover:bg-gray-200">
            <h1 className="font-bold text-lg">LogOut</h1>
            <p className="text-gray-600">@{username}</p>
          </button>
        </Link>
      </div>
    </AnimatePresence>
  );
};

export default UserNavigationPanel;
