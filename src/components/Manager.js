import React from 'react';

const ManagerPage = ({ isEmployee }) => (
  <div>
    <h2>Manager Page</h2>
    {isEmployee ? <p>Unauthorized Access!</p> : <p>Welcome, Manager!</p>}
  </div>
);

export default ManagerPage;