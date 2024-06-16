import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css';
import logo from '../../assets/logo.png';


const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    navigate('/home');
  };

  return (
    <div className="registration-page">
      <div className="registration-box">
        <img src={logo} alt="Logo" className="registration-logo" />
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="registration-input"
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="registration-input"
        />
        <button onClick={handleRegistration} className="registration-button">Register</button>
      </div>
    </div>
  );
};

export default Registration;
