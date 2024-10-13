
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './styles/login.css'
//import { auth } from './firebase'; 

const LoginPage = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user=import.meta.env.VITE_U;
  const pass=import.meta.env.VITE_P;
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if(email===user&&pass===password){
    
    //  await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
      navi('/checkin');
      }
      else{
        alert('NOT AUTHORIZED');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to login');
    }
  };

  return (
    <div className='container'>
    <form >
    <div className='label'>User Name: <input className='form-control'
        type="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
        required
      /></div>
      <div className='label'>User Password: <input className='form-control'
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      /></div>
       <button onClick={handleLogin} type="submit" className='btn-primary'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
