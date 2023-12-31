import React, { useState, useEffect } from 'react';
import { getStudentList, addStudent, deleteStudent } from '../../services/api/schoolAdmin';

function SchoolAdmin() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student list on component mount
    const fetchStudentList = async () => {
      const studentList = await getStudentList();
      setStudents(studentList);
    };

    fetchStudentList();
  }, []);

  const handleAddStudent = async (newStudent) => {
    await addStudent(newStudent);
    // Update student list after addition
    setStudents([...students, newStudent]);
  };

  const handleDeleteStudent = async (studentId) => {
    await deleteStudent(studentId);
    // Update student list after deletion
    const updatedStudentList = students.filter((student) => student.id !== studentId);
    setStudents(updatedStudentList);
  };

  return (
    <div>
      <h2>School Admin Dashboard</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.firstName} {student.lastName} - {student.email}
            <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddStudent({ firstName: 'New', lastName: 'Student', email: 'new@student.com' })}>
        Add Student
      </button>
    </div>
  );
}

export default SchoolAdmin;
