import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {

    axios.get('')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        <p>Welcome, {userData.username}!</p>
        <p>Email: {userData.pasword}</p>

      </div>
    </div>
  );
};

export default Dashboard;