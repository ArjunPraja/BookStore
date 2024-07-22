// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { auth,provider } from '../googleSignin/config';
// import {signInWithPopup} from "firebase/auth";
// import Home1 from "../Home/Home1";

// const Login = () => {

//   const [value,setValue] = useState('')
//   const handleClick = ()=>{
//     signInWithPopup(auth,provider).then((data)=>{
//       setValue(data.user.email)
//       localStorage.setItem("email",data.user.email)
//       window.location.href="/home";
      
//     })
//   }
//   useEffect(()=>{
//     setValue(localStorage.getItem('email'))
//   })

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }

//       const data = await response.json();

//       if (data.success) {
//         setFormData({
//           email: '',
//           password: ''
//         });

//         // Store the token in local storage
//         localStorage.setItem('token', data.token);

//         // Decode the token to extract user role
//         const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
//         const { role } = decodedToken;
//         console.log(role);

//         // Check the user's role and navigate accordingly
//         if (role === 'admin') {
//           navigate('/admin', { state: { message: 'Admin successfully logged in!' } });
//         } else if (role === 'user') {
//           navigate('/home', { state: { message: 'User successfully logged in!' } });
//         } else {
//           setError('Unknown role.');
//         }
//       } else {
//         setError(data.message);
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       // setError('Network error. Please try again later.');
//       toast.error('Please enter correct details');
//     }
//   };

//   return (
//     <div className="flex flex-wrap flex-col md:flex-row w-full mt-10 justify-center items-center">
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
//       <div>
//         <div className="flex flex-wrap flex-col shadow-lg h-auto rounded-xl border-gray-400 border-2 items-start shadow-gray-500 px-12 py-6">
//           <div className="flex flex-wrap flex-col w-full justify-center items-center mb-6">
//             <h1 className="text-black text-2xl mb-1 font-semibold inline-block">
//               BookPavilian
//             </h1>
//             <div>
//               <h1 className="font-bold text-4xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text">Welcome Back...</h1>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 w-full">
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
//             </div>
//             <div className="mb-4 w-full">
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
//             </div>
//             <div className="flex flex-wrap flex-col w-full mt-7">
//               <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-bold hover:opacity-85 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-lg mb-3 ">Log in</button>
//               {error && <p className="text-red-600">{error}</p>}
//             </div>
//           </form>
//           <div className="flex flex-wrap flex-col w-full mt-2">
//             <button onClick={handleClick} className="flex justify-center text-black px-6 py-2 rounded-md font-bold hover:opacity-85 text-lg border-2 border-[#f3a7e6] shadow-md shadow-pink-300 ">
//               <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
//               <span>Signin with Google</span>
//             </button>
            
            
            
//             <h2 className="mt-2 text-base font-semibold mx-auto">Don't have an account? &nbsp;
//               <Link to="/register" className="text-blue-800 underline">Sign up</Link>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;








// Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth, provider } from '../googleSignin/config';
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setValue(result.user.email);
      localStorage.setItem("email", result.user.email);
      
      // Use navigate instead of window.location.href
      navigate('/home', { state: { message: 'Successfully logged in with Google!' } });
    } catch (error) {
      console.error('Error logging in with Google:', error);
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (data.success) {
        setFormData({
          email: '',
          password: ''
        });

        localStorage.setItem('token', data.token);

        const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
        const { role } = decodedToken;

        if (role === 'admin') {
          navigate('/admin', { state: { message: 'Admin successfully logged in!' } });
        } else if (role === 'user') {
          navigate('/home', { state: { message: 'User successfully logged in!' } });
        } else {
          setError('Unknown role.');
        }
      } else {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error logging in user:', error);
      toast.error('Please enter correct details');
    }
  };

  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full mt-10 justify-center items-center">
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
      <div>
        <div className="flex flex-wrap flex-col shadow-lg h-auto rounded-xl border-gray-400 border-2 items-start shadow-gray-500 px-12 py-6">
          <div className="flex flex-wrap flex-col w-full justify-center items-center mb-6">
            <h1 className="text-black text-2xl mb-1 font-semibold inline-block">
              BookPavilian
            </h1>
            <div>
              <h1 className="font-bold text-4xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text">Welcome Back...</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
            </div>
            <div className="mb-4 w-full">
              <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
            </div>
            <div className="flex flex-wrap flex-col w-full mt-7">
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-bold hover:opacity-85 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-lg mb-3 ">Log in</button>
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </form>
          <div className="flex flex-wrap flex-col w-full mt-2">
            <button onClick={handleClick} className="flex justify-center text-black px-6 py-2 rounded-md font-bold hover:opacity-85 text-lg border-2 border-[#f3a7e6] shadow-md shadow-pink-300 ">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
              <span>Signin with Google</span>
            </button>
            <h2 className="mt-2 text-base font-semibold mx-auto">Don't have an account? &nbsp;
              <Link to="/register" className="text-blue-800 underline">Sign up</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;






// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { auth, provider } from '../googleSignin/config';
// import { signInWithPopup } from "firebase/auth";

// const Login = () => {
//   const [value, setValue] = useState('');
//   const navigate = useNavigate();

//   const handleClick = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       setValue(result.user.email);
//       localStorage.setItem("email", result.user.email);
//       navigate('/home', { state: { message: 'Successfully logged in with Google!' } });
//     } catch (error) {
//       console.error('Error logging in with Google:', error);
//     }
//   };

//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:8080/api/users/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok.');
//       }

//       const data = await response.json();
//       console.log('Response Data:', data);

//       if (data.success) {
//         setFormData({
//           email: '',
//           password: ''
//         });

//         localStorage.setItem('token', data.token);

//         const decodedToken = JSON.parse(atob(data.token.split('.')[1]));
//         const { role } = decodedToken;

//         if (role === 'admin') {
//           navigate('/admin', { state: { message: 'Admin successfully logged in!' } });
//         } else if (role === 'user') {
//           navigate('/home', { state: { message: 'User successfully logged in!' } });
//         } else {
//           setError('Unknown role.');
//         }
//       } else {
//         setError(data.message);
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error logging in user:', error);
//       toast.error('Please enter correct details');
//     }
//   };

//   return (
//     <div className="flex flex-wrap flex-col md:flex-row w-full mt-10 justify-center items-center">
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
//       <div>
//         <div className="flex flex-wrap flex-col shadow-lg h-auto rounded-xl border-gray-400 border-2 items-start shadow-gray-500 px-12 py-6">
//           <div className="flex flex-wrap flex-col w-full justify-center items-center mb-6">
//             <h1 className="text-black text-2xl mb-1 font-semibold inline-block">
//               BookPavilian
//             </h1>
//             <div>
//               <h1 className="font-bold text-4xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text">Welcome Back...</h1>
//             </div>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4 w-full">
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
//             </div>
//             <div className="mb-4 w-full">
//               <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"></input>
//             </div>
//             <div className="flex flex-wrap flex-col w-full mt-7">
//               <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-bold hover:opacity-85 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-lg mb-3 ">Log in</button>
//               {error && <div className="text-red-500 mt-2">{error}</div>}
//               <Link to="/register" className="text-center text-lg mt-5 font-semibold cursor-pointer text-blue-800 underline hover:text-blue-400">New User?</Link>
//             </div>
//           </form>
//         </div>
//         <button onClick={handleClick} className="flex flex-row items-center justify-between px-7 py-2 rounded-lg bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-80 mt-8 w-full shadow-xl font-bold">
//           <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google Logo" />
//           Sign in with Google
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
