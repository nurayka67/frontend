import React, { useState } from 'react';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateName = (value) => {
    if (!value) return 'Name is required';
    if (value.length < 2) return 'Name must be at least 2 characters';
    return '';
  };

  const validateEmail = (value) => {
    if (!value) return 'Email is required';
    if (!value.includes('@') || !value.includes('.')) return 'Invalid email';
    return '';
  };

  const validateAge = (value) => {
    if (!value) return 'Age is required';
    if (Number(value) < 18) return 'Must be 18 or older';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const ageErr = validateAge(age);
    
    setNameError(nameErr);
    setEmailError(emailErr);
    setAgeError(ageErr);
    
    if (!nameErr && !emailErr && !ageErr) {
      setSuccess(true);
      setName('');
      setEmail('');
      setAge('');
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Registration Form</h1>
      
      {success && <p style={{ color: 'green' }}>Success!</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(validateName(e.target.value));
            }}
          />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(validateEmail(e.target.value));
            }}
          />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        
        <div>
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setAgeError(validateAge(e.target.value));
            }}
          />
          {ageError && <p style={{ color: 'red' }}>{ageError}</p>}
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RegistrationForm;