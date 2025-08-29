import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import { useFaculty } from "../context/FacultyContext";
import { useState } from "react";
import SelectField from "../components/shared/SelectField";
import "../App.css";

const FacultyAttendanceComponent = () => {

    const { faculty } = useFaculty();

    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const [branch, setBranch] = useState("");
    const courses = ["B.Tech", "B.Pharm", "B.C.A.", "M.Tech", "M.Pharm"];
    const batches = ["2022", "2023", "2024", "2025"];
    const branches = ["CS", "IT", "EC", "EN", "ME"];

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
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 border border-white rounded-xl">
                  
                            <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                                Attendance upload
                            </div>
                            <div className="w-full h-9/10 overflow-auto">

                                <div className="w-full h-1/4 border-b border-white flex items-center justify-start">

                                    <div className="w-1/5 h-full flex text-white items-center justify-center">
                                        <div className="w-8/10 h-full flex items-center justify-start">
                                            <div className="flex gap-3 mb-2 text-white">                                    
                                                <SelectField
                                                    id="course"
                                                    label="Course"
                                                    required={true}
                                                    value={course}
                                                    onChange={setCourse}
                                                    options={courses}
                                                    placeholder="Select Course"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/5 h-full flex text-white items-center justify-center">
                                        <div className="w-8/10 h-full flex items-center justify-start">
                                            <div className="flex gap-3 mb-2 text-white">                                    
                                                <SelectField
                                                    id="batch"
                                                    label="Batch"
                                                    required={true}
                                                    value={batch}
                                                    onChange={setBatch}
                                                    options={batches}
                                                    placeholder="Select Batch"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/5 h-full flex text-white items-center justify-center">
                                        <div className="w-8/10 h-full flex items-center justify-start">
                                            <div className="flex gap-3 mb-2 text-white">                                    
                                                <SelectField
                                                    id="branch"
                                                    label="Branch"
                                                    required={true}
                                                    value={branch}
                                                    onChange={setBranch}
                                                    options={branches}
                                                    placeholder="Select Branch"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex-col text-white items-center justify-center">
                                        <div className="w-full h-4/10 flex items-center justify-start">                                            
                                        </div>
                                        <div className="w-full h-6/10 flex items-start justify-end">
                                            <button className="w-8/10 h-6/10 rounded-md font-semibold bg-green-600 hover:bg-green-700 hover: cursor-pointer ">
                                                Search Students
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full h-1/10 bg-gray-400 flex items-center justify-center text-white">
                                    <div className="w-1/20 h-full bg-blue-300 flex items-center justify-center">
                                        
                                    </div>
                                    <div className="w-1/20 h-full bg-blue-400 flex items-center justify-center">

                                    </div>
                                    <div className="w-1/20 h-full bg-blue-500 flex items-center justify-center">
                                    </div>
                                    <div className="w-1/20 h-full bg-blue-600 flex items-center justify-center">
                                    </div>
                                    <div className="w-1/20 h-full bg-blue-400 flex items-center justify-center">
                                </div>
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