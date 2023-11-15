// import React, { useState } from 'react';
// import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.css';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const onClickButton = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('https/api', {
//         name,
//         password,
//       });

//       const { token, role } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       if (role === 'admin') {
//         navigate('/Manager');
//       } else if (role === 'user') {
//         navigate('/Employee');
//       } else {

//         console.error('Unknown user role');
//       }
//     } catch (error) {
//       console.error('Login failed', error);
//       setError('Invalid username or password. Please try again.');
//     }
//   };

//   return (
//     <div class="common-container">
//       <div class="background-image">
//         <div class="wrapper">
//           <div class="title">
//             <span class="boldText">Login Form</span>
//           </div>

//           <form action="#" class="form">
//             <div class="field">
//               <input type="text" required onChange={(e) => setName(e.target.value)} />
//               <label for="username">UserName<i className="fas fa-user" style={{ marginLeft: '150px' }}
//               ></i></label>
//             </div>
//             <div class="field">
//               <input type="password" required onChange={(e) => setPassword(e.target.value)} />
//               <label for="password"> Password<i className="fas fa-lock" style={{ marginLeft: '160px' }}></i></label>
//             </div>
//             <div class="content">
//               <div class="checkbox">
//                 <input type="checkbox" id="remember-me" />
//                 <label for="remember-me" >Remember me</label>
//               </div>
//               <div class="pass-link">
//                 <a href="#">Forgot password?</a>
//               </div>
//             </div>
//             <div class="field">
//               <Link to="/dashboard">
// <input type="submit" value="Login" />
//               </Link>
//             </div>
//             <div class="signup-link">
//               Not a member? <a href="#" style={{ marginLeft: '15px' }}>Signup now</a>
//             </div>

//             <div className="content-icon">
//               <span className='content-span'><i className="fab fa-facebook-f" style={{ width: '100%', height: '100%', color: 'blue' }}></i></span>
//               <span className='content-span'><i className="fab fa-twitter" style={{ width: '100%', height: '100%', color: '#00acee' }}></i></span>
//               <span className='content-span'><i className="fab fa-instagram" style={{ width: '100%', height: '100%', color: '#FD1D1D' }}></i></span>
//             </div>
//           </form>

//         </div>

//       </div>

//     </div>
// );

// };

// export default LoginPage;

import React, { useState } from "react";
import "./LoginPage.css";
import facebook from "../Assets/facebook-logo.png";
import instagram from "../Assets/instagram-logo.png";
import linkedin from "../Assets/linkedin-logo.png";
import twitter from "../Assets/twitter verified badge.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 422) {
        alert("Login Failed");
      } else {
        alert("Login Successful");
        if (json.role === "admin") {
          nav("/Manager");
        } else if (json.role === "user") {
          nav("/Employee");
        } else {
          console.log("Unknown user role");
        }
        localStorage.setItem("AuthToken", json.authToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="login-page">
        <div className="login">
          <div className="card login-card">
            <div className="card-body">
              <h5 className="card-title fs-3" style={{ textAlign: "center" }}>
                Sign In
              </h5>
              <br />
              <div className="box">
                <form className="form-potion" method="POST">
                  <div className="mb-3">
                    <i class="fa-solid fa-user"></i>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-control form-box"
                    />
                  </div>
                  <div className="mb-3">
                    <i class="fa-solid fa-lock"></i>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control form-box"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input check-box"
                    />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  <Link to={"/dashboard"}>
                    <button
                      type="submit"
                      className="btn btn-danger submit-btn"
                      onClick={handleClick}
                    >
                      Login
                    </button>
                  </Link>
                </form>
                <div className="below-form">
                  <p>Forgot Password</p>
                  <p>Signup</p>
                </div>
                <div className="logos">
                  <div className="left-logos">
                    <img className="social-logo" src={facebook} alt="" />
                    <img
                      className="social-logo"
                      style={{ marginLeft: "8px" }}
                      src={instagram}
                      alt=""
                    />
                  </div>
                  <div className="right-logos">
                    <img
                      className="social-logo"
                      style={{ marginRight: "8px" }}
                      src={linkedin}
                      alt=""
                    />
                    <img className="social-logo" src={twitter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
