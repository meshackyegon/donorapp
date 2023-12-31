// services/api/schoolAdmin.js

const API_BASE_URL = 'http://localhost/php'; 

export const getStudentList = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const studentList = await response.json();
    return studentList;
  } catch (error) {
    console.error('Error fetching student list:', error);
    throw error;
  }
};

export const addStudent = async (newStudent) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Error adding student:', error);
    throw error;
  }
};

export const deleteStudent = async (studentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/students/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }


    return true;
  } catch (error) {
    console.error('Error deleting student:', error);
    throw error;
  }
};
