import { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { makeUnauthenticatedGETRequest } from '../utils/serverHelpers';

const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
const [cookies] = useCookies(["user"]);
const [student, setStudent] = useState(null);

useEffect(() => {
  if (!cookies.user || !cookies.user._id) return;

  const fetchStudent = async () => {
    try {
      const data = await makeUnauthenticatedGETRequest("/student/getStudent/" + cookies.user._id);
      setStudent(data);
    } catch (error) {
      console.error("Failed to fetch student:", error);
    }
  };

  fetchStudent();
}, [cookies.user]); // 👈 Dependency ensures effect runs when cookie changes


  return (
    <StudentContext.Provider value={{ student }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => useContext(StudentContext);
