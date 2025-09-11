import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import "../App.css";
import ResultCard from "../components/shared/ResultCard";

const FacultyResultComponent = () => {

    const [exam, setExam] = useState("");
    const [rollNo, setRollNo] = useState("");
    const [student, setStudent] = useState("");
    const [submitted, setSubmitted] = useState([]);

    const handleSearchStudent = async () => {
        if ( !rollNo ) {
            toast.info("Please enter Student's Roll no. !");
            return;
        }
        try {
            const response = await axios.get(`/student/getStudent?rollNo=${rollNo}`); // adjust endpoint if needed
            setStudent(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Failed to fetch student:", error.response?.data || error.message);
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
                                Result upload
                            </div>
                            <div className="w-full h-9/10 overflow-auto">

                                <div className="w-full h-1/7 border-white flex items-center justify-start">

                                    <div className="w-3/4 h-full flex items-center justify-center">
                                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                                            <div className="w-full h-full ml-4 flex items-center justify-start">
                                                <div className="flex items-center justify-center">Exam : 
                                                    <select 
                                                        className={`input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded`} 
                                                        value={exam} 
                                                        onChange={(e) => setExam(e.target.value)}
                                                        >
                                                        <option value="">Select Exam</option>
                                                        <option value="Unit test">Unit test</option>
                                                        <option value="Mid Semester">Mid Semester</option>
                                                        <option value="Pre University">Pre University</option>                                                    
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-1/2 h-full text-white flex items-center justify-center">
                                            
                                                <div className="w-full h-6/10 flex items-center justify-center">
                                                <div className="w-1/8">
                                                    Roll no. :
                                                </div>
                                                <div className="w-7/8">
                                                    <input
                                                        type="text"
                                                        placeholder="Enter Student's roll no."
                                                        className="w-full input ml-4 p-2 bg-black text-white border hover:border-blue-400 border-white rounded"
                                                        value={rollNo}
                                                        onChange={(e) => setRollNo(e.target.value)}
                                                    />
                                                    </div>
                                                </div>
                                            
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">                                        
                                        <button onClick={handleSearchStudent} className="w-3/4 h-1/2 rounded-md font-semibold bg-blue-500 hover:bg-blue-600 hover: cursor-pointer ">
                                            Search Student
                                        </button>                                        
                                    </div>
                                </div>

                                {student && 
                                <div className="w-full h-1/10 flex items-center justify-center text-white">
                                    
                                    <div className="w-1/10 h-full flex items-center justify-center">
                                        Profile
                                    </div>
                                    <div className="w-1/4 h-full flex items-center pl-2 justify-start">
                                        Name
                                    </div>
                                    <div className="w-1/7 h-full flex items-center pl-2 justify-start">
                                        Roll No.
                                    </div>
                                    <div className="w-1/5 h-full flex items-center pl-2 justify-center">
                                        Course
                                    </div>
                                    <div className="w-1/7 h-full flex items-center pl-2 justify-center">
                                        Batch
                                    </div>
                                    <div className="w-1/7 h-full flex items-center pl-2 justify-center">
                                        Branch
                                    </div>
                                </div> }                                                     
                            
                                {student &&
                                <div className="w-full h-3/4 rounded-b-xl border-t border-white overflow-y-auto flex flex-col items-center justify-start">
                                    
                                    <ResultCard student={student} exam={exam} />
                                                                       
                                </div> }

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

export default FacultyResultComponent;