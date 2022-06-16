// import logoregister from "../../assets/images/logoregister.png";
// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";

// function SetPasswordForm() {
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   return (
//     <div className=" container">
//       <div className="row">
//         <div className="setimage col ">
//           <img src={logoregister} />
//         </div>
//         <div className="col ">
//           <div className="register d-flex flex-column  py-5">
//             <div className="mb-3">
//               <div className=" px-5">Create your account</div>
//             </div>
//             <div className="boxregister container-fluid mt-2 ">
//               {/*Password*/}
//               <div className="input-group px-3 p-3 mb-3">
//                 <input
//                   value={password}
//                   type="text"
//                   className="form-control"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               {/*Confirm Password*/}
//               <div className="input-group px-3 p-3 mb-3">
//                 <input
//                   value={confirmPassword}
//                   type="text"
//                   className="form-control"
//                   placeholder="Confirm password"
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className=" d-flex justify-content-center ">
//               <a href="login" className="btn btn-danger">
//                 Create
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SetPasswordForm;
