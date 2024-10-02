import React from 'react';
import SignupForm from './SignupForm';
import ExchangeGraph from './ExchangeGraph';

function App() {
  const handleFormSubmit = (userData) => {
    // Post user data to backend
    fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    }).then(() => alert('You have been registered!'));
  };

  return (
    <div>
      <SignupForm onSubmit={handleFormSubmit} />
      <ExchangeGraph />
    </div>
  );
}

export default App;

