// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import Home from "./Home";
// import Card from "../Card/Card";
// import Explore from "../Explore/Explore";
// import Header1 from "../Header/Header1";
// import Footer1 from "../Footer/Footer1";

// const Home1 = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.state && location.state.message) {
//       toast.success(location.state.message);
//     }
//   }, [location]);

//   return (
//     <>
//       <ToastContainer
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         toastClassName="bg-gray-800 text-white"
//         bodyClassName="text-center"
//       />
//       <Header1 />
//       <Home />
//       <hr />
//       <Card />
//       <hr />
//       <Explore />
//       <hr />
//       <Footer1 />
//     </>
//   );
// };

// export default Home1;






import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./Home";
import Card from "../Card/Card";
import Explore from "../Explore/Explore";
import Header1 from "../Header/Header1";
import Footer1 from "../Footer/Footer1";

const Home1 = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      toast.success(location.state.message);
    }
  }, [location]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="bg-gray-800 text-white"
        bodyClassName="text-center"
      />
      <Header1 />
      <Home />
      <hr />
      <Card />
      <hr />
      <Explore />
      <hr />
      <Footer1 />
    </>
  );
};

export default Home1;
