import React from "react";
import { Link } from "react-router-dom";
// import { useState } from "react";

// const About = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contact, setContact] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleClearForm = () => {
//     setFullName("");
//     setEmail("");
//     setContact("");
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = {
//         fullName,
//         email,
//         contact,
//       };
//       console.log("Form Data Submitted:", data);
//     } catch (error) {
//       console.log(error.message);
//     } finally {
//       setIsLoading(false);
//     }

//     handleClearForm();
//   };

//   return (
//     <>
//       <div className="text-center px-96 text-neutral-700 font-family: 'Abel', sans-serif ">
//         <h1 className="text-4xl pb-5">Contact Us</h1>
//         <div htmlFor="container text-xl">
//           <form onReset={handleClearForm} onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="fullName">Full Name: </label>
//               <input
//                 type="text"
//                 name="fullName"
//                 className="border m-3 rounded p-1 text-blue-900"
//                 value={fullName}
//                 onChange={(event) => setFullName(event.target.value)}
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="border m-3 rounded p-1 text-blue-900"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="contact">Contact:</label>
//               <input
//                 type="number"
//                 name="contact"
//                 className="border m-3 rounded p-1 text-blue-900"
//                 value={contact}
//                 onChange={(event) => setContact(event.target.value)}
//                 placeholder="Enter your phone no."
//                 required
//               />
//             </div>
//             <button
//               className=" bg-amber-400 border border-black me-3 rounded p-1"
//               type="submit"
//             >
//               {isLoading ? "Loading..." : "Submit"}
//             </button>
//             <button
//               className=" bg-blue-700 border border-black rounded p-1"
//               type="reset"
//             >
//               Reset
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default About;

const About = () => {
  return 
  <>
  
  </>;
};

export default About;
