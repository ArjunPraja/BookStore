import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import { GrCloudUpload } from "react-icons/gr";
import { BiLogOutCircle } from "react-icons/bi";
import { MdOutlineManageHistory } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const menus = [
    { name: "Dashboard", link: "/admin", icon: MdSpaceDashboard },
    { name: "Upload Books", link: "/admin/upload", icon: GrCloudUpload },
    { name: "Manage Books", link: "/admin/manage", icon: MdOutlineManageHistory },
    { name: "Users", link: "/admin/users", icon: FaUsers },
    { name: "Logout", link: "/", icon: BiLogOutCircle },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-gray-900 min-h-screen ${
        open ? "w-72" : "w-16"
      } duration-500 text-gray-100 px-4`}
    >
      <div className="py-3 flex justify-end">
        <HiMenuAlt3
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative font-gelasio">
        {menus.map((menu, i) => (
          <Link
            to={menu.link}
            key={i}
            className="group flex items-center text-xl gap-3.5 font-semibold p-2 hover:bg-white hover:text-black rounded-3xl"
          >
            <div>{React.createElement(menu.icon, { size: "20" })}</div>
            <h2
              className={`whitespace-pre duration-500 ${
                !open && "opacity-0 translate-x-28 overflow-hidden"
              }`}
            >
              {menu.name}
            </h2>
            <h2
              className={`${
                open && "hidden"
              } absolute left-48 bg-transparent font-semibold whitespace-pre text-gray-600 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNavbar;



// import React, { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdSpaceDashboard } from "react-icons/md";
// import { GrCloudUpload } from "react-icons/gr";
// import { BiLogOutCircle } from "react-icons/bi";
// import { MdOutlineManageHistory } from "react-icons/md";
// import { FaUsers } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const SideNavbar = () => {
//   const menus = [
//     { name: "Dashboard", link: "/admin", icon: MdSpaceDashboard },
//     { name: "Upload Books", link: "/admin/upload", icon: GrCloudUpload },
//     { name: "Manage Books", link: "/admin/manage", icon: MdOutlineManageHistory },
//     { name: "Users", link: "/admin/users", icon: FaUsers },
//     { name: "Logout", link: "/", icon: BiLogOutCircle },
//   ];

//   const [open, setOpen] = useState(false);
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className={`relative ${hovered ? 'bg-blur' : ''}`}>
//       <div
//         className={`bg-gray-900 min-h-screen ${
//           open ? "w-72" : "w-16"
//         } duration-500 text-gray-100 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-4 relative font-gelasio">
//           {menus.map((menu, i) => (
//             <Link
//               to={menu.link}
//               key={i}
//               className="group flex items-center text-xl gap-3.5 font-semibold p-2 hover:bg-white hover:text-black rounded-3xl"
//               onMouseEnter={() => setHovered(true)}
//               onMouseLeave={() => setHovered(false)}
//             >
//               <div>{React.createElement(menu.icon, { size: "20" })}</div>
//               <h2
//                 className={`whitespace-pre duration-500 ${
//                   !open && "opacity-0 translate-x-28 overflow-hidden"
//                 }`}
//               >
//                 {menu.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-transparent font-semibold whitespace-pre text-gray-600 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//               >
//                 {menu.name}
//               </h2>
//             </Link>
//           ))}
//         </div>
//       </div>
//       {hovered && (
//         <div className="fixed inset-0 bg-black opacity-25 backdrop-blur-md z-0"></div>
//       )}
//     </div>
//   );
// };

// export default SideNavbar;
