// import React from "react";
// import { NavLink } from "react-router-dom";
// import { SocialIcon } from 'react-social-icons'


// function Footer1(){
//     return(
//         <div>
//             <div className="flex flex-col flex-wrap w-full h-auto items-center py-4 ">
//                 <div className="">
//                     <ul className="flex justify-between items-center w-72 ">
//                     <li>
//                 <NavLink
//                   to="/home"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "lg:text-pink-500 " : "text-black "
//                     }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/books"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-pink-500" : "text-black"
//                     }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
//                   }
//                 >
//                   Books
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-pink-500" : "text-black"
//                     }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about1"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-pink-500" : "text-black"
//                     }  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-pink-500 lg:p-0 text-base font-medium`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//                     </ul>
//                 </div>

//                 <div className="flex justify-between items-center w-48 mt-3 h-10">
                   
//                 <SocialIcon network="facebook" url="www.vimeo.com" bgColor="white" fgColor="black" className="h-1 w-0 "/>

//                 <SocialIcon network="instagram" url="www.vimeo.com" bgColor="white" fgColor="black" className="h-1 w-0 "/>

//                 {/* <SocialIcon network="twitter" url="www.vimeo.com" bgColor="black" className="h-1 w-0 border-2"/> */}

//                 <svg xmlns="http://www.w3.org/2000/svg" 
//                 className="h-9 w-9"
//                 enable-background="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x"><path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99
// 		h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" transform="translate(52.39 -25.059)"></path></svg>

//                 </div>

//                 <div className="flex items-center w-auto mt-3">
//                     <span className="text-base font-medium">Copyright &copy; 2024 - All rights reserved by Team Webwizards</span>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Footer1;



import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

function Footer1() {
  return (
    <div>
      <div className="flex flex-col flex-wrap w-full h-auto items-center py-4">
        <div className="">
          <ul className="flex justify-between items-center w-72">
            <li>
              <NavLink
                to="/home"
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
                to="/about1"
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

        <div className="flex justify-between items-center w-48 mt-3 h-10">
          <SocialIcon network="facebook" url="www.vimeo.com" bgColor="white" fgColor="black" className="h-1 w-0" />
          <SocialIcon network="instagram" url="www.vimeo.com" bgColor="white" fgColor="black" className="h-1 w-0" />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" enable-background="new 0 0 1668.56 1221.19" viewBox="0 0 1668.56 1221.19" id="twitter-x">
            <path d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99 h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z" transform="translate(52.39 -25.059)"></path>
          </svg>
        </div>

        <div className="flex justify-center w-full mt-3">
          <span className="text-base font-medium text-center">
            Copyright &copy; 2024 - All rights reserved by Team Webwizards
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
