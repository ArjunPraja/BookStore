// import React, { useState, useEffect, useRef } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { GiBookshelf } from "react-icons/gi";
// import { BsCart3 } from "react-icons/bs";
// import UsernavigationPanel from "../UserNavigationPanel/UserNavigationPanel";

// const navlinks = [
//   { title: "Home", link: "/home" },
//   { title: "Books", link: "/books" },
//   { title: "Contact", link: "/contact" },
//   { title: "About", link: "/about1" }
// ];

// export default function Header1() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [userNavPanel, setUserNavPanel] = useState(false);
//   const userNavRef = useRef(null);
//   const navRef = useRef();
//   let navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const handleUserNavPanel = () => {
//     setUserNavPanel((currentVal) => !currentVal);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userNavRef.current && !userNavRef.current.contains(event.target)) {
//         setUserNavPanel(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header className="bg-white z-10 flex items-center w-full px-4 py-5 h-[80px] border-b">
//       <nav className="max-w-screen-xl mx-auto flex items-center justify-between w-full">
//         <div className="flex items-center">
//           <GiBookshelf className="w-11 h-11 mr-3" />
//           <h1 className="text-black text-2xl lg:text-4xl font-semibold">
//             <Link to="/">BookPavilian</Link>
//           </h1>
//         </div>
//         <div className="lg:hidden flex items-center">
//           <button
//             type="button"
//             onClick={toggleMobileMenu}
//             className="text-xl text-black"
//           >
//             {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//         <div className="hidden lg:flex items-center space-x-4">
//           {navlinks.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.link}
//               className={({ isActive }) =>
//                 `block py-2 px-4 text-lg font-medium ${
//                   isActive ? "text-pink-500" : "text-black"
//                 } hover:text-pink-500`
//               }
//             >
//               {link.title}
//             </NavLink>
//           ))}
//           <NavLink
//             to="/cart"
//             className={({ isActive }) =>
//               `block py-2 px-4 text-lg font-medium ${
//                 isActive ? "text-pink-500" : "text-black"
//               } hover:text-pink-500`
//             }
//           >
//             <BsCart3 className="w-6 h-6" />
//           </NavLink>
//           <div className="relative" ref={userNavRef} onClick={handleUserNavPanel}>
//             <button className="w-12 h-12 mt-1">
//               <img
//                 src="path-to-your-image.jpg" // Replace with your image path
//                 alt="User"
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </button>
//             {userNavPanel && <UsernavigationPanel />}
//           </div>
//         </div>
//       </nav>
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white shadow w-full absolute top-[80px] left-0">
//           <div className="flex flex-col items-center py-4 space-y-2">
//             {navlinks.map((link, index) => (
//               <NavLink
//                 key={index}
//                 to={link.link}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-lg font-medium text-black hover:text-pink-500"
//               >
//                 {link.title}
//               </NavLink>
//             ))}
//             <NavLink
//               to="/cart"
//               className="text-lg font-medium text-black hover:text-pink-500"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               <BsCart3 className="w-6 h-6" />
//             </NavLink>
//             <div className="relative" ref={userNavRef} onClick={handleUserNavPanel}>
//               <button className="w-12 h-12 mt-1">
//                 <img
//                   src="path-to-your-image.jpg" // Replace with your image path
//                   alt="User"
//                   className="w-full h-full object-cover rounded-full"
//                 />
//               </button>
//               {userNavPanel && <UsernavigationPanel />}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }




// src/components/Header1.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import UsernavigationPanel from "../UserNavigationPanel/UserNavigationPanel";
// import { generateProfilePicture } from '../utils'; // Import the utility function
import { generateProfilePicture} from '../utils/utils';
const navlinks = [
  { title: "Home", link: "/home" },
  { title: "Books", link: "/books" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about1" }
];

export default function Header1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [userNavPanel, setUserNavPanel] = useState(false);
  const [avatar, setAvatar] = useState(''); // State to hold the avatar URL
  const userNavRef = useRef(null);
  const navRef = useRef();
  let navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleUserNavPanel = () => {
    setUserNavPanel((currentVal) => !currentVal);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userNavRef.current && !userNavRef.current.contains(event.target)) {
        setUserNavPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Fetch or generate the avatar URL for the user
    const username = "User"; // Replace this with the actual username or logic to get it
    setAvatar(generateProfilePicture(username));
  }, []);

  return (
    <header className="bg-white z-10 flex items-center w-full px-4 py-5 h-[80px] border-b">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between w-full">
        <div className="flex items-center">
          <GiBookshelf className="w-11 h-11 mr-3" />
          <h1 className="text-black text-2xl lg:text-4xl font-semibold">
            <Link to="/">BookPavilian</Link>
          </h1>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-xl text-black"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              className={({ isActive }) =>
                `block py-2 px-4 text-lg font-medium ${
                  isActive ? "text-pink-500" : "text-black"
                } hover:text-pink-500`
              }
            >
              {link.title}
            </NavLink>
          ))}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `block py-2 px-4 text-lg font-medium ${
                isActive ? "text-pink-500" : "text-black"
              } hover:text-pink-500`
            }
          >
            <BsCart3 className="w-6 h-6" />
          </NavLink>
          <div className="relative" ref={userNavRef} onClick={handleUserNavPanel}>
            <button className="w-12 h-12 mt-1">
              <img
                src={avatar} // Use the avatar state
                alt="User"
                className="w-full h-full object-cover rounded-full"
              />
            </button>
            {userNavPanel && <UsernavigationPanel />}
          </div>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow w-full absolute top-[80px] left-0">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navlinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-black hover:text-pink-500"
              >
                {link.title}
              </NavLink>
            ))}
            <NavLink
              to="/cart"
              className="text-lg font-medium text-black hover:text-pink-500"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BsCart3 className="w-6 h-6" />
            </NavLink>
            <div className="relative" ref={userNavRef} onClick={handleUserNavPanel}>
              <button className="w-12 h-12 mt-1">
                <img
                  src={avatar} // Use the avatar state
                  alt="User"
                  className="w-full h-full object-cover rounded-full"
                />
              </button>
              {userNavPanel && <UsernavigationPanel />}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
