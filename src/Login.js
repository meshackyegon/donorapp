// Login.js

import React, { useState } from 'react';
import App from './App';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login here (e.g., API call to authenticate user)
  

    console.log(formData);
    const API_BASE_URL = 'http://localhost/php/login';
    const login = async (username, password) => {
      try {
        const response = await fetch(`${API_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),

          //redirect to app:
          

        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const responseData = await response.json();
        console.log(responseData);
    
        return responseData; 
      } catch (error) {
        console.error('Error during login:', error);
        throw error; 
      }
    };

    //send the form data to the backend to authenticate the user in services/api/login.js
    //call the api for login
    //if successful, store the token in local storage
    //redirect to the donor page
    //if unsuccessful, display an error message


  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Username/Email:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginTop: '50px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
  },
  form: {
    marginTop: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '10px',
    boxSizing: 'border-box',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;