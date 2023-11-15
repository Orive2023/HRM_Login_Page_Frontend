import { BrowerRouter, Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Employee from './components/Employee';
import Manager from './components/Manager';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/' element={<Employee />} />
        <Route path='/' element={<Manager />} />
      </Routes>
    </BrowserRouter>




  )




};

export default App;
