// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Admin = () => {
//   const [open, setOpen] = useState(true);
//   return (
//     <div className="flex w-full space-x-0 px-4">
//       <div className="flex flex-col w-full">
//         <div className="flex text-3xl font-bold ml-6 mt-6">
//           <h1> Admin Dashboard for Managing Book Inventory</h1>
//         </div>
//         <div className="flex flex-col md:flex-row w-full">
//           <div className="ml-6 mt-6 w-full md:w-4/12">
//             <div>
//               <h1 className="text-black text-3xl font-bold">Stats</h1>
//             </div>
//             <div className="mt-4">
//               <div className="bg-green-300 h-32 w-96 rounded-xl">
//                 <div className="text-2xl py-3 font-semibold ml-4">
//                   Welcome Admin,
//                 </div>
//                 <div className="px-7">
//                   <button className="bg-white px-5 rounded-md font-semibold py-1">
//                     Start Tracking
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4 flex">
//               <div className="bg-yellow-200 h-32 w-44 rounded-xl">
//                 <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
//                   20
//                 </div>
//                 <div className="flex justify-center mt-2 font-medium text-lg">
//                   Tasks Finished
//                 </div>
//               </div>
//               <div className="bg-yellow-200 h-32 w-44 rounded-xl ml-8">
//                 <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
//                   5.5
//                 </div>
//                 <div className="flex justify-center mt-2 font-medium text-lg">
//                   Tracked Hours
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="bg-purple-400 h-32 w-96 rounded-xl">
//                 <div className="text-2xl flex ml-4 py-2 font-semibold">
//                   Your daily plan
//                 </div>
//                 <div className="mt-3 ml-4 font-semibold text-lg">
//                   5 of 8 Completed
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col w-full md:w-7/12 mt-6 ml-6 md:ml-20">
//             <div>
//               <h1 className="text-black text-3xl font-bold">Your task today</h1>
//             </div>
//             <div className="w-[550px] h-auto border-2 mt-4 rounded-xl flex flex-col border-gray-400">
//               <div className="flex items-center px-6 mt-2 justify-between">
//                 <div className="text-base text-gray-500">Number 10</div>
//                 <div className="text-base text-gray-500">4h</div>
//               </div>
//               <div className="px-5 text-2xl font-bold mt-2">
//                 Blog and social posts
//               </div>
//               <div className="flex mb-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="black"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 mt-3.5 ml-4 text-white"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
//                   />
//                 </svg>
//                 <h3 className="mt-3 ml-1 text-gray-500">Deadline is today</h3>
//               </div>
//             </div>
//             <div className="w-[550px] h-auto border-2 mt-4 rounded-xl flex flex-col border-gray-400">
//               <div className="flex items-center px-6 mt-2 justify-between">
//                 <div className="text-base text-gray-500">Number 9</div>
//                 <div className="text-base text-gray-500">7d</div>
//               </div>
//               <div className="px-5 text-2xl font-bold mt-2">
//                 New campaign review
//               </div>
//               <div className="flex mb-3">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="black"
//                   viewBox="0 0 24 24"
//                   strokeWidth="1.5"
//                   stroke="currentColor"
//                   className="size-5 mt-3.5 ml-4 text-white"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
//                   />
//                 </svg>
//                 <h3 className="mt-3 ml-1 text-gray-500">New Feedback</h3>
//               </div>
//             </div>
//             <div className="w-[550px] h-auto border-2 mt-4 rounded-xl flex flex-col border-gray-400 mb-6">
//               <div className="flex items-center px-6 mt-2 justify-between">
//                 <div className="text-base text-gray-500">Team Webwizards App</div>
//               </div>
//               <div className="px-5 text-2xl font-bold mt-2 mb-5">
//                 Cross Platform and Questionnaire
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;


import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Admin = () => {
  const [open, setOpen] = useState(true);

  // Sample data for stats and tasks
  const [stats, setStats] = useState({
    welcomeMessage: "Welcome Admin",
    tasksFinished: 20,
    trackedHours: 5.5,
    dailyPlan: "5 of 8 Completed",
  });

  const [tasks, setTasks] = useState([
    {
      id: 1,
      number: 10,
      title: "Blog and social posts",
      duration: "4h",
      deadline: "Deadline is today",
    },
    {
      id: 2,
      number: 9,
      title: "New campaign review",
      duration: "7d",
      deadline: "New Feedback",
    },
    {
      id: 3,
      number: "Team Webwizards App",
      title: "Cross Platform and Questionnaire",
      duration: null,
      deadline: null,
    },
  ]);

  return (
    <div className="flex w-full space-x-0 px-4">
      <div className="flex flex-col w-full">
        <div className="flex text-3xl font-bold ml-6 mt-6">
          <h1> Admin Dashboard for Managing Book Inventory</h1>
        </div>
        <div className="flex flex-col md:flex-row w-full">
          <div className="ml-6 mt-6 w-full md:w-4/12">
            <div>
              <h1 className="text-black text-3xl font-bold">Stats</h1>
            </div>
            <div className="mt-4">
              <div className="bg-green-300 h-32 w-96 rounded-xl">
                <div className="text-2xl py-3 font-semibold ml-4">
                  {stats.welcomeMessage},
                </div>
                <div className="px-7">
                  <button className="bg-white px-5 rounded-md font-semibold py-1">
                    Start Tracking
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex">
              <div className="bg-yellow-200 h-32 w-44 rounded-xl">
                <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
                  {stats.tasksFinished}
                </div>
                <div className="flex justify-center mt-2 font-medium text-lg">
                  Tasks Finished
                </div>
              </div>
              <div className="bg-yellow-200 h-32 w-44 rounded-xl ml-8">
                <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
                  {stats.trackedHours}
                </div>
                <div className="flex justify-center mt-2 font-medium text-lg">
                  Tracked Hours
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-purple-400 h-32 w-96 rounded-xl">
                <div className="text-2xl flex ml-4 py-2 font-semibold">
                  Your daily plan
                </div>
                <div className="mt-3 ml-4 font-semibold text-lg">
                  {stats.dailyPlan}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-7/12 mt-6 ml-6 md:ml-20">
            <div>
              <h1 className="text-black text-3xl font-bold">Your task today</h1>
            </div>
            {tasks.map((task) => (
              <div
                key={task.id}
                className="w-[550px] h-auto border-2 mt-4 rounded-xl flex flex-col border-gray-400"
              >
                <div className="flex items-center px-6 mt-2 justify-between">
                  <div className="text-base text-gray-500">Number {task.number}</div>
                  {task.duration && (
                    <div className="text-base text-gray-500">{task.duration}</div>
                  )}
                </div>
                <div className="px-5 text-2xl font-bold mt-2">{task.title}</div>
                {task.deadline && (
                  <div className="flex mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="black"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 mt-3.5 ml-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                    <h3 className="mt-3 ml-1 text-gray-500">{task.deadline}</h3>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
