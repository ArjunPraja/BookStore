// import React from "react";
// import home from "../home.png";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="px-4 md:px-20 py-8 md:py-24">
//       <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
//         <div className="flex flex-col justify-center items-start text-center md:text-left md:w-6/12 w-full mb-8">
//           <p className="text-black text-3xl md:text-4xl font-semibold mb-4">
//             Hello, welcome to BookPavilian! Read something{" "}
//             <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text">
//               new every day!!
//             </span>
//           </p>
//           <p className="text-lg text-black font-sans font-medium mb-6">
//             Reading books enriches your mind, reduces stress, improves focus and language skills, and opens the door to endless knowledge and imagination.
//           </p>
//           <Link to="/register">
//             <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] px-6 py-3 rounded-lg text-white text-md font-bold hover:opacity-75">
//               Get Started
//             </button>
//           </Link>
//         </div>
//         <div className="flex justify-center md:justify-end md:w-6/12 w-full">
//           <img src={home} alt="BookPavilian" className="w-full max-w-xs md:max-w-md"/>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;




import React from "react";
import home from "../home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="px-4 md:px-20 py-8 md:py-24">
      <div className="flex flex-col md:flex-row items-center max-w-screen-xl mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-6/12 w-full mb-8">
          <p className="text-black text-3xl md:text-4xl font-semibold mb-4">
            Hello, welcome to BookPavilian! Read something{" "}
            <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text">
              new every day!!
            </span>
          </p>
          <p className="text-lg text-black font-sans font-medium mb-6">
            Reading books enriches your mind, reduces stress, improves focus and language skills, and opens the door to endless knowledge and imagination.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Link to="/register">
              <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] px-6 py-3 rounded-lg text-white text-md font-bold hover:opacity-75">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end md:w-6/12 w-full">
          <img src={home} alt="BookPavilian" className="w-full max-w-xs md:max-w-md"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
