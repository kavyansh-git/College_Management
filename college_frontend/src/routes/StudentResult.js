import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import { useStudent } from "../context/StudentContext";
import { useState } from "react";
import axios from "../utils/axios";
import "../App.css";
import ResultViewCard from "../components/shared/ResultViewCard";

const StudentResultComponent = () => {

    const { student } = useStudent();

    const [ results, setResults ] = useState([]);

        const fetchResults = async () => {
          try {
            const response = await axios.get(`/view/results?rollNo=${student.rollNo}`); // adjust endpoint if needed
            setResults(response.data);
          } catch (error) {
            console.error("Failed to fetch results:", error.response?.data || error.message);
          }
        };
    
        fetchResults();

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-40">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Exams"/>
            
            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-50 backdrop-blur-sm border border-white rounded-xl">
                  
                            <div className="w-full h-1/10 bg-white rounded-t-xl bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                                Result ( 2025-26 )
                            </div>
                            <div className="w-full h-9/10 overflow-auto">                                

                                <div className="w-full h-1/10 flex items-center justify-center text-white">
                                    <div className="w-1/20 h-full pl-2 flex items-center justify-start">
                                        S.No
                                    </div>
                                    <div className="w-8/10 h-full flex items-center pl-2 justify-start">
                                        Exam
                                    </div>
                                    <div className="w-1/7 h-full flex items-center justify-center">
                                        Open
                                    </div>                                                                       
                                </div>                                                     
                            

                                <div className="w-full border-t border-white overflow-y-auto flex flex-col items-center justify-start">
                                    {results.map((result, index) => (
                                            <ResultViewCard result={result} index={index} />
                                    ))}                                    
                                </div>

                            </div>                  
        
                </div>
              </div>
            <div className="w-2/10 h-full bg-black bg-opacity-40 flex items-center justify-center">
            </div>            
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default StudentResultComponent;