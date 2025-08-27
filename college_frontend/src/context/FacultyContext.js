import { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { makeUnauthenticatedGETRequest } from '../utils/serverHelpers';

const FacultyContext = createContext();

export const FacultyProvider = ({ children }) => {
const [cookies] = useCookies(["user"]);
const [faculty, setFaculty] = useState(null);

useEffect(() => {
  if (!cookies.user || !cookies.user._id) return;

  const fetchFaculty = async () => {
    try {
      const data = await makeUnauthenticatedGETRequest("/faculty/getFaculty/" + cookies.user._id);
      setFaculty(data);
    } catch (error) {
      console.error("Failed to fetch faculty:", error);
    }
  };

  fetchFaculty();
}, [cookies.user]); // 👈 Dependency ensures effect runs when cookie changes


  return (
    <FacultyContext.Provider value={{ faculty }}>
      {children}
    </FacultyContext.Provider>
  );
};

export const useFaculty = () => useContext(FacultyContext);
