// src/UserContext.js for profile picture 
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { generateProfilePicture } from '../utils/utils';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

        const user = await response.json();
        const avatar = generateProfilePicture(user.data.username);
        setUser({
          ...user.data,
          avatar
        });
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user.email;
        const extractedUsername = email.substring(0, email.indexOf('@'));
        const avatar = generateProfilePicture(extractedUsername);
        setUser({
          username: extractedUsername,
          email: email,
          avatar
        });
      } else {
        fetchUserData();
      }
    });
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
