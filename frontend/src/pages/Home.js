import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="card text-center home-card">
        <div className="card-header bg-primary text-white">
          <h2>Welcome to the Student Management System</h2>
        </div>
        <div className="card-body">
          <p className="card-text">Use the links below to manage students:</p>
          <div className="mt-4 home-buttons">
            <Link to="/students" className="btn btn-primary me-2">
              View Student List
            </Link>
            <Link to="/add" className="btn btn-success">
              Add New Student
            </Link>
          </div>
        </div>
        <div className="card-footer text-muted">CBIT Student Management</div>
      </div>
    </div>
  );
};

export default Home;
