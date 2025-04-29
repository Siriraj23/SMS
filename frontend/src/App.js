// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';
import EditStudentForm from './components/EditStudentForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/add" element={<AddStudentForm />} />
          <Route path="/edit/:id" element={<EditStudentForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;