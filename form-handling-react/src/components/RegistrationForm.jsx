import React, { useState } from 'react';

const RegistrationForm = () => {
  // States to manage form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  // Form validation logic
  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = 'Username is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // If no errors, return true
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear the general error
    setError('');
    
    if (validateForm()) {
      // If the form is valid, proceed with registration logic, e.g., API call
      console.log('Form submitted:', { username, email, password });
    } else {
      setError('Please fill in all required fields correctly.');
    }
  };
// Custom setErrors function to mimic Formik's behavior
  const setErrors = (errors) => {
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      ...errors,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />
        {formErrors.username && <div style={{ color: 'red' }}>{formErrors.username}</div>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {formErrors.email && <div style={{ color: 'red' }}>{formErrors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {formErrors.password && <div style={{ color: 'red' }}>{formErrors.password}</div>}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
