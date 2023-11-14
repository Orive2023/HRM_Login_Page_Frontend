import React from 'react';

const EmployeePage = ({ isEmployee }) => (
  <div>
    <h2>Employee Page</h2>
    {isEmployee ? <p>Welcome, Employee!</p> : <p>Unauthorized Access!</p>}
  </div>
);

export default EmployeePage;