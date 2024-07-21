import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth,provider } from '../googleSignin/config';
import {signInWithPopup} from "firebase/auth";

const Register = () => {
  // const [value,setValue] = useState('')
  // const handleClick = ()=>{
  //   signInWithPopup(auth,provider).then((data)=>{
  //     setValue(data.user.email)
  //     localStorage.setItem("email",data.user.email)
  //     window.location.href="/home";
      
  //   })
  // }
  // useEffect(()=>{
  //   setValue(localStorage.getItem('email'))
  // })
  const [value,setValue] = useState('')
  const handleClick = ()=>{
    signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
      window.location.href="/home";

    })
  }
  useEffect(()=>{
    setValue(localStorage.getItem('email'))
  })
  
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    contactNo: '',
    age: '',
    city: '',
    state: '',
    country: ''
  });

  const [errors, setErrors] = useState({});
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value.trim() !== '') {
      setErrors((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === '') {
      setErrors((prevState) => ({
        ...prevState,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();

      if (data.success) {
        setResponseMessage(data.message);
        setFormData({
          name: '',
          username: '',
          email: '',
          password: '',
          contactNo: '',
          age: '',
          city: '',
          state: '',
          country: ''
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Email already exists');
    }
  };

  


  return (
    <div className="flex flex-wrap flex-col md:flex-row w-full mt-10 justify-center items-center">
      <div>
        <div className="flex flex-wrap flex-col shadow-lg h-auto rounded-xl border-gray-400 border-2 items-start shadow-gray-500 px-12 py-6">
          <div className="flex flex-wrap flex-col w-full justify-center mb-6 items-center">
            <h1 className="text-black text-2xl mb-1 font-semibold inline-block">
              BookPavilian
            </h1>
            <div>
              <h1 className="font-bold text-4xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text">Welcome...</h1>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Name"
                className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"
                required
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Username"
                className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"
                required
              />
              {errors.username && <p className="text-red-600">{errors.username}</p>}
            </div>
            <div className="mb-4 w-full">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Email"
                className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"
                required
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div className="mb-4 w-full">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Password"
                className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"
                required
              />
              {errors.password && <p className="text-red-600">{errors.password}</p>}
            </div>
            <div className="mb-4 w-full">
              <input
                type="text"
                name="contactNo"
                value={formData.contactNo}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Contact No."
                className="text-black p-1 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none"
                required
              />
              {errors.contactNo && <p className="text-red-600">{errors.contactNo}</p>}
            </div>
            <div className="mb-4 w-full">
              <div className="flex justify-between">
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Age"
                  className="text-black p-1 w-5/12 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 font-medium border-b-2 border-slate-400 inline-block outline-none"
                  required
                />
                
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="City"
                  className="text-black p-1 w-5/12 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 font-medium border-b-2 border-slate-400 inline-block outline-none"
                  required
                />
                
              </div>
            </div>
            <div className="mb-4 w-full">
              <div className="flex justify-between">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="State"
                  className="text-black p-1 w-5/12 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 font-medium border-b-2 border-slate-400 inline-block outline-none"
                  required
                />
                
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Country"
                  className="text-black p-1 w-5/12 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 font-medium border-b-2 border-slate-400 inline-block outline-none"
                  required
                />
                
              </div>
            </div>
            <div className="flex flex-wrap flex-col w-full">
              <button type="submit" className="bg-black text-white px-6 py-2 rounded-md font-bold hover:opacity-85 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-lg mb-3">Sign up</button>
              {responseMessage && <p className="text-green-600">{responseMessage}</p>}
              {error && <p className="text-red-600">{error}</p>}
            </div>
          </form>
          <div className="flex flex-wrap flex-col w-full">
            <button onClick={handleClick} className="flex justify-center text-black px-6 py-2 rounded-md font-bold hover:opacity-85 text-lg border-2 border-[#f3a7e6] shadow-md shadow-pink-300">
              <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="-0.5 0 48 48" version="1.1"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </svg>
              <span>Continue with Google</span>
            </button>
            <h2 className="mt-2 text-base font-semibold mx-auto">Already have an account? &nbsp;
              <Link to="/login" className="text-blue-800 underline">Log in</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;