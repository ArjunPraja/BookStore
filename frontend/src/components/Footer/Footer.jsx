import React from "react";
import { NavLink } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaInstagram } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const handleBooksClick = (e) => {
    e.preventDefault(); 
    Swal.fire({
      title: 'Alert!',
      text: 'You are not able to access. Please Login first!',
      confirmButtonText: 'OK',
      
    });
  };

  return (
    <div>
      <div className="flex flex-col items-center py-4">
        <div className="flex flex-wrap justify-center w-full">
          <ul className="flex justify-between items-center w-72 mb-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "lg:text-pink-500 " : "text-black "
                  }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                onClick={handleBooksClick}
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-pink-500" : "text-black"
                  }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
                }
              >
                Books
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-pink-500" : "text-black"
                  }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-pink-500" : "text-black"
                  }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
                }
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-center items-center w-full mb-3">
          <div className="flex justify-between items-center w-48">
            <ImFacebook2 className="text-black h-6 w-6" />
            <FaInstagram className="text-black h-6 w-6" />
            <FaXTwitter className="text-black h-6 w-6" />
          </div>
        </div>

        <div className="w-full flex justify-center mt-3">
          <span className="text-base font-medium text-center">
            Copyright &copy; 2024 - All rights reserved by Team Webwizards
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
