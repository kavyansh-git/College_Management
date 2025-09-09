import { Icon } from "@iconify/react";
import { useStudent } from "../context/StudentContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import FeesPieChart from "../components/shared/FeesPieChart";
import PDFCard from "../components/shared/viewPDFCard";
import PDFModal from "../components/shared/viewPDFModal";
import "../App.css";

const StudentDashboardComponent = () => {

  const { student } = useStudent();
  const [notices, setNotices] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const [fillWidth, setFillWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFillWidth(student ? student.attendance : "0%");
    }, 500); // slight delay for smoother animation

    return () => clearTimeout(timeout);
  }, [student]);
  
  const fetchNotices = async () => {
      try {
        const response = await axios.get(`/view/notices?batch=${student.batch}&branch=${student.branch}`); // adjust endpoint if needed
        setNotices(response.data);
      } catch (error) {
        console.error("Failed to fetch notices:", error.response?.data || error.message);
      }
    };
  fetchNotices();

  const fetchAssignments = async () => {
      try {
        const response = await axios.get(`/view/assignments?batch=${student.batch}&branch=${student.branch}`); // adjust endpoint if needed
        setAssignments(response.data);
      } catch (error) {
        console.error("Failed to fetch assignments:", error.response?.data || error.message);
      }
    };
  fetchAssignments();

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Dashboard" />

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-8/10 h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 rounded-xl flex items-center justify-center">
                  <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                    
                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2 rounded-tl-xl row-span-2">
                      <div className="w-9/10 h-95/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        
                        <div className="w-full h-1/7 bg-white bg-opacity-10 rounded-t-xl flex items-center justify-center border-b border-white">
                            <div className="w-1/6 h-full text-white flex items-center justify-center">
                              <Icon icon="ion:mail-notification-outline" width="28"/>
                            </div>
                            <div className="w-5/6 h-full font-medium text-white flex items-center justify-start">
                              Notices
                            </div>
                        </div>

                        <div className="w-full h-6/7 px-0.5 overflow-y-auto">
                          {notices.map((notice) => (
                              <PDFCard pdf={notice} onClick={() => setSelectedPDF(notice)} />
                            ))}

                          {selectedPDF && (
                              <PDFModal pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
                            )}
                        </div>

                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white backdrop-blur-sm rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <FeesPieChart deposited={100000} total={150000} />
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center">
                              Fees details
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white backdrop-blur-sm rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="stash:search-results" width="80" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Exams result
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white backdrop-blur-sm rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="iconoir:brain-research" width="80" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Online quiz
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2 rounded-tl-xl row-span-2">
                      <div className="w-9/10 h-95/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        
                        <div className="w-full h-1/7 bg-white bg-opacity-10 rounded-t-xl flex items-center justify-center border-b border-white">
                            <div className="w-1/6 h-full text-white flex items-center justify-center">
                              <Icon icon="hugeicons:assignments" width="28"/>
                            </div>
                            <div className="w-5/6 h-full font-medium text-white flex items-center justify-start">
                              Assignments & Tutorials
                            </div>
                        </div>

                        <div className="w-full h-6/7">
                          {assignments.map((assignment) => (
                              <PDFCard pdf={assignment} onClick={() => setSelectedPDF(assignment)} />
                            ))}

                          {selectedPDF && (
                              <PDFModal pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
                            )}
                        </div>

                      </div>  
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white backdrop-blur-sm rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 rounded-t-xl text-white flex items-center justify-center">
                              <div className="w-8/10 border-2 border-black shadow shadow-gray-500 bg-gray-300 bg-opacity-20 rounded-full h-4 overflow-hidden">
                                <div
                                  className="bg-green-600 h-full transition-all duration-500"
                                  style={{ width: fillWidth }}
                                ></div>
                              </div>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center">
                              Attendance : {student ? student.attendance : "0%"}
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white backdrop-blur-sm rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="solar:document-add-outline" width="80" className=""/>
                            </div>
                            <Link to="/StudentNotes" className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Notes
                            </Link>
                        </div>
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

export default StudentDashboardComponent;