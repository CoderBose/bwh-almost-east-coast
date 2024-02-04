import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    console.log('Username changed:', e.target.value);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log('Password changed:', e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Username:', username);
    console.log('Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className='icon-container'>
        <img src="/login-icon.png" alt="" />
      </div>
      <h1>Welcome Back!</h1>
      <div className="label-container">
        <h3>Don't have an account?</h3>
        <Link to="/sign-up">
            <h3>Sign Up</h3>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username" className="bold-label">Username</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="bold-label">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="forgot-container">
            <Link to="/forgot-password">
                <h3>Forgot Password?</h3>
            </Link>
        </div>
        <div className="button-container">
            <button className="button" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
