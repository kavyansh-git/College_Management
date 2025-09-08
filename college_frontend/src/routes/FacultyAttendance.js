import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import "../App.css";
import AttendanceCard from "../components/shared/AttendanceCard";

const FacultyAttendanceComponent = () => {

    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const [branch, setBranch] = useState("");
    const [students, setStudents] = useState([]);
    const [submitted, setSubmitted] = useState([]);


    const handleSearchStudents = async () => {
        if (!course || !batch || !branch) {
            toast.info("Please select all the required fields!");
            return;
        }
        try {
            const response = await axios.get(`/student/getStudents?batch=${batch}&branch=${branch}`); // adjust endpoint if needed
            setStudents(response.data);
        } catch (error) {
            console.error("Failed to fetch students:", error.response?.data || error.message);
        }
        };

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <FacultySidebar curActiveScreen="Dashboard"/>
            
            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 backdrop-blur-sm border border-white rounded-xl">
                  
                            <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                                Attendance upload
                            </div>
                            <div className="w-full h-9/10 overflow-auto">

                                <div className="w-full h-1/7 border-white flex items-center justify-start">

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Course : 
                                                <select className="input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={course} onChange={(e) => setCourse(e.target.value)}>
                                                    <option value="">Select Course</option>
                                                    <option value="B.Tech">B.Tech</option>
                                                    <option value="B.Pharm">B.Pharm</option>
                                                    <option value="B.C.A.">B.C.A.</option>
                                                    <option value="M.Tech">M.Tech</option>
                                                    <option value="M.Pharm">M.Pharm</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Batch : 
                                                <select className="input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={batch} onChange={(e) => setBatch(e.target.value)}>
                                                    <option value="">Select Batch</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Branch : 
                                                <select className="input p-2 ml-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={branch} onChange={(e) => setBranch(e.target.value)}>
                                                    <option value="">Select Branch</option>
                                                    <option value="CS">CS</option>
                                                    <option value="IT">IT</option>
                                                    <option value="EC">EC</option>
                                                    <option value="EN">EN</option>
                                                    <option value="ME">ME</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">                                        
                                        <button onClick={handleSearchStudents} className="w-3/4 h-1/2 rounded-md font-semibold bg-green-600 hover:bg-green-700 hover: cursor-pointer ">
                                            Search Students
                                        </button>                                        
                                    </div>
                                </div>

                                {students[0] && 
                                <div className="w-full h-1/10 flex items-center justify-center text-white">
                                    <div className="w-1/20 h-full pl-2 flex items-center justify-start">
                                        S.No
                                    </div>
                                    <div className="w-1/10 h-full flex items-center justify-center">
                                        Profile
                                    </div>
                                    <div className="w-1/4 h-full flex items-center pl-2 justify-start">
                                        Name
                                    </div>
                                    <div className="w-1/5 h-full flex items-center pl-2 justify-start">
                                        Roll No.
                                    </div>
                                    <div className="w-1/4 h-full flex items-center pl-2 justify-center">
                                        Enter Attendance
                                    </div>
                                    <div className="w-1/7 h-full flex items-center pl-2 justify-center">
                                        Submit
                                    </div>
                                </div> }                                                     
                            

                                <div className="w-full h-3/4 rounded-b-xl border-t border-white overflow-y-auto flex flex-col items-center justify-start">
                                    {students.map((student, index) => (
                                            <AttendanceCard student={student} submitted={submitted} setSubmitted={setSubmitted} index={index} />
                                    ))}                                    
                                </div>

                            </div>                  
        
                </div>
              </div>
            <div className="w-2/10 h-full bg-black bg-opacity-70 flex items-center justify-center">
            </div>            
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default FacultyAttendanceComponent;