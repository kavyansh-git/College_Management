import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import HomeLoginComponent from "./routes/Login";
import AdminLoginComponent from "./routes/AdminLogin";
import AdminDashboardComponent from "./routes/AdminDashboard";
import StudentCreateComponent from "./routes/StudentCreate";
import StudentLoginComponent from "./routes/StudentLogin";
import StudentDashboardComponent from "./routes/StudentDashboard";
import StudentProfileComponent from "./routes/StudentProfile";
import StudentExamsComponent from "./routes/StudentExams";
import StudentFeesComponent from "./routes/StudentFees";
import StudentDocsComponent from "./routes/StudentDocs";
import StudentNotesComponent from "./routes/StudentNotes";
import FacultyCreateComponent from "./routes/FacultyCreate";
import FacultyLoginComponent from "./routes/FacultyLogin";
import FacultyDashboardComponent from "./routes/FacultyDashboard";
import FacultyProfileComponent from "./routes/FacultyProfile";
import FacultyExamsComponent from "./routes/FacultyExams";
import FacultyTimetableComponent from "./routes/FacultyTimetable";
import FacultyAttendanceComponent from "./routes/FacultyAttendance";

function App() {

  const [cookie, setCookie] = useCookies(["token"]);

  return (
    <div className="w-screen h-screen">
      <BrowserRouter>

        {
            cookie.token? (
              // Logged in routes
        <Routes>
          
          <Route path="/AdminDashboard" element={<AdminDashboardComponent />} />
        
          <Route path="/StudentCreate" element={<StudentCreateComponent />} />
          <Route path="/StudentDashboard" element={<StudentDashboardComponent />} />
          <Route path="/StudentProfile" element={<StudentProfileComponent />} />
          <Route path="/StudentExams" element={<StudentExamsComponent />} />
          <Route path="/StudentFees" element={<StudentFeesComponent />} />
          <Route path="/StudentDocs" element={<StudentDocsComponent />} />
          <Route path="/StudentNotes" element={<StudentNotesComponent />} />
          
          <Route path="/FacultyCreate" element={<FacultyCreateComponent />} />
          <Route path="/FacultyDashboard" element={<FacultyDashboardComponent />} />
          <Route path="/FacultyProfile" element={<FacultyProfileComponent />} />
          <Route path="/FacultyExams" element={<FacultyExamsComponent />} />
          <Route path="/FacultyTimetable" element={<FacultyTimetableComponent />} />
          <Route path="/FacultyAttendance" element={<FacultyAttendanceComponent />} />
          

        </Routes>
            ) : (
              <Routes>
                <Route path="/login" element={<HomeLoginComponent />} />
                <Route path="/AdminLogin" element={<AdminLoginComponent />} />
                <Route path="/StudentLogin" element={<StudentLoginComponent />} />
                <Route path="/StudentCreate" element={<StudentCreateComponent />} />
                <Route path="/FacultyLogin" element={<FacultyLoginComponent />} />
                <Route path="/FacultyCreate" element={<FacultyCreateComponent />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>

            )
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
