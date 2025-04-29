import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      Swal.fire('Error!', 'Could not fetch students.', 'error');
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/students/${id}`);
          fetchStudents();
          Swal.fire('Deleted!', 'Student has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting student:', error);
          Swal.fire('Error!', 'Could not delete student.', 'error');
        }
      }
    });
  };

  return (
    <div className="container mt-5">
      <h2>Student List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Enrollment Year</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{new Date(student.dob).toLocaleDateString()}</td>
              <td>{student.department}</td>
              <td>{student.enrollmentYear}</td>
              <td>{student.isActive ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/edit/${student._id}`} className="btn btn-sm btn-primary me-2">
                  Edit
                </Link>
                <button onClick={() => handleDelete(student._id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/add" className="btn btn-success">
        Add New Student
      </Link>
    </div>
  );
};

export default StudentList;
