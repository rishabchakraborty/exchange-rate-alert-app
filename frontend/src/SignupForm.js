import React, { useState } from 'react';

function SignupForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [threshold, setThreshold] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, threshold });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign up for Exchange Rate Alerts</h2>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>USD to CAD Threshold:</label>
      <input type="number" value={threshold} onChange={(e) => setThreshold(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;
