// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { GiBookshelf } from "react-icons/gi";
// import Swal from "sweetalert2";

// const navlinks = [
//   { title: "Home", link: "/" },
//   { title: "Books", link: "/books" },
//   { title: "Contact", link: "/contact" },
//   { title: "About", link: "/about" }
// ];

// export default function Header() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const isLoggedIn = false; // Adjust this based on actual login state

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(prev => !prev);
//   };

//   const handleBookClick = (event) => {
//     if (!isLoggedIn) {
//       event.preventDefault(); // Prevent navigation
//       Swal.fire({
//         title: "Alert!",
//         text: "You are not able to access. Please Login first!"
//       });
//     }
//   };

//   return (
//     <header className="bg-white shadow">
//       <nav className="py-4 px-6 lg:px-14 max-w-screen-xl mx-auto flex items-center">
//         <div className="">
//           <GiBookshelf className="w-11 h-11" />
//         </div>
//         <h1 className="text-black text-2xl lg:text-4xl font-semibold">
//           <Link to="/">BookPavilian</Link>
//         </h1>
//         <div className="lg:hidden flex items-center ml-auto">
//           <button
//             type="button"
//             onClick={toggleMobileMenu}
//             className="text-xl text-black"
//           >
//             {isMobileMenuOpen ? "✖" : "☰"}
//           </button>
//         </div>
//         <div className="hidden lg:flex ml-auto space-x-4">
//           {navlinks.map((link, index) => (
//             <NavLink
//               key={index}
//               to={link.link}
//               onClick={link.title === "Books" ? handleBookClick : undefined}
//               className={({ isActive }) =>
//                 `block py-2 px-4 text-lg font-medium ${
//                   isActive ? "text-pink-500" : "text-black"
//                 } hover:text-pink-500`
//               }
//             >
//               {link.title}
//             </NavLink>
//           ))}
//         </div>
//         <div className="hidden lg:flex ml-4">
//           <Link to="/login">
//             <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
//               Login
//             </button>
//           </Link>
//         </div>
//       </nav>
//       {isMobileMenuOpen && (
//         <div className="lg:hidden bg-white shadow">
//           <div className="flex flex-col items-center py-4 space-y-2">
//             {navlinks.map((link, index) => (
//               <NavLink
//                 key={index}
//                 to={link.link}
//                 onClick={link.title === "Books" ? handleBookClick : undefined}
//                 className="text-lg font-medium text-black hover:text-pink-500"
//               >
//                 {link.title}
//               </NavLink>
//             ))}
//             <Link to="/login">
//               <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
//                 Login
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }







import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import Swal from "sweetalert2";

const navlinks = [
  { title: "Home", link: "/" },
  { title: "Books", link: "/books" },
  { title: "Contact", link: "/contact" },
  { title: "About", link: "/about" }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLoggedIn = false; // Adjust this based on actual login state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const handleBookClick = (event) => {
    if (!isLoggedIn) {
      event.preventDefault(); // Prevent navigation
      Swal.fire({
        title: "Alert!",
        text: "You are not able to access. Please Login first!"
      });
    }
  };

  return (
    <header className="bg-white shadow">
      <nav className="py-4 px-6 lg:px-14 max-w-screen-xl mx-auto flex items-center">
        <div className="flex items-center">
          <GiBookshelf className="w-11 h-11 mr-3" />
          <h1 className="text-black text-2xl lg:text-4xl font-semibold">
            <Link to="/">BookPavilian</Link>
          </h1>
        </div>
        <div className="lg:hidden flex items-center ml-auto">
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="text-xl text-black"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <div className="hidden lg:flex ml-auto space-x-4">
          {navlinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              onClick={link.title === "Books" ? handleBookClick : undefined}
              className={({ isActive }) =>
                `block py-2 px-4 text-lg font-medium ${
                  isActive ? "text-pink-500" : "text-black"
                } hover:text-pink-500`
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex ml-4">
          <Link to="/login">
            <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
              Login
            </button>
          </Link>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow">
          <div className="flex flex-col items-center py-4 space-y-2">
            {navlinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.link}
                onClick={link.title === "Books" ? handleBookClick : undefined}
                className="text-lg font-medium text-black hover:text-pink-500"
              >
                {link.title}
              </NavLink>
            ))}
            <Link to="/login">
              <button className="px-4 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
                Login
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
