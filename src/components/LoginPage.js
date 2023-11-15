import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const onClickButton = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https/api', {
        name,
        password,
      });

      const { token, role } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('role', role);


      if (role === 'admin') {
        navigate('/Manager');
      } else if (role === 'user') {
        navigate('/Employee');
      } else {

        console.error('Unknown user role');
      }
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid username or password. Please try again.');
    }
  };






  return (
    <div class="common-container">
      <div class="background-image">
        <div class="wrapper">
          <div class="title">
            <span class="boldText">Login Form</span>
          </div>


          <form action="#" class="form">
            <div class="field">
              <input type="text" required onChange={(e) => setName(e.target.value)} />
              <label for="username">UserName<i className="fas fa-user" style={{ marginLeft: '150px' }}
              ></i></label>
            </div>
            <div class="field">
              <input type="password" required onChange={(e) => setPassword(e.target.value)} />
              <label for="password"> Password<i className="fas fa-lock" style={{ marginLeft: '160px' }}></i></label>
            </div>
            <div class="content">
              <div class="checkbox">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me" >Remember me</label>
              </div>
              <div class="pass-link">
                <a href="#">Forgot password?</a>
              </div>
            </div>
            <div class="field">
              <input type="submit" value="Login" onClick={onClickButton} />
            </div>
            <div class="signup-link">
              Not a member? <a href="#" style={{ marginLeft: '15px' }}>Signup now</a>
            </div>

            <div className="content-icon">
              <span className='content-span'><i className="fab fa-facebook-f"></i></span>
              <span className='content-span'><i className="fab fa-twitter"></i></span>
              <span className='content-span'><i className="fab fa-instagram"></i></span>
            </div>
          </form>

        </div>

      </div>




    </div>
);

};

export default LoginPage;
