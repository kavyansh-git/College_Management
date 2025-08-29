import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import UploadPDFModal from "../components/shared/UploadPDFModal";
import "../App.css";

const FacultyDashboardComponent = () => {

  const leavesTaken = 1;
  const totalLeaves = 4;
  const leavePercent = ((leavesTaken/totalLeaves)*100);
  
    const [fillWidth, setFillWidth] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [uploadModalLabel, setUploadModalLabel] = useState('');
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setFillWidth(leavePercent);
      }, 500); // slight delay for smoother animation
  
      return () => clearTimeout(timeout);
    }, [leavePercent]);

    const handleNoticeUploadModal = () => {
      setUploadModalLabel('Notice');
      setShowModal(true);
    };
    
    const handleAssignmentUploadModal = () => {
      setUploadModalLabel('Assignment');
      setShowModal(true);
    };

    const handleNotesUploadModal = () => {
      setUploadModalLabel('Notes');
      setShowModal(true);
    };

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />

          <div className="w-full h-4/5 flex items-center justify-start">
            <FacultySidebar curActiveScreen="Dashboard" />

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-8/10 h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 rounded-xl flex items-center justify-center">
                  <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                    
                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2 rounded-tl-xl row-span-2">
                      <div className="w-9/10 h-95/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-1/7 bg-white bg-opacity-10 flex items-center justify-center border-b border-white">
                            <div className="w-1/6 h-full text-white flex items-center justify-center">
                            <Icon icon="ion:mail-notification-outline" width="28"/>
                            </div>
                            <div className="w-5/6 h-full font-medium text-white flex items-center justify-start">
                              Notices
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <div className="w-8/10 border-2 border-black shadow shadow-gray-500 bg-gray-300 bg-opacity-20 rounded-full h-4 overflow-hidden">
                                <div
                                  className="bg-green-600 h-full transition-all duration-500"
                                  style={{ width: `${fillWidth}%` }}
                                ></div>
                              </div>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center">
                              Leaves taken : {leavesTaken}/{totalLeaves}
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="uil:file-upload-alt" width="80" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center">
                              Result upload
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="iconoir:brain-research" width="80" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center">
                              Quiz upload
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="material-symbols:add-notes-outline-rounded" width="80" className=""/>
                            </div>
                            <div onClick={handleNotesUploadModal} className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Notes upload
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="pepicons-pop:raise-hand-circle" width="80" className=""/>
                            </div>
                            <Link to="/FacultyAttendance" className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Attendance upload
                            </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="material-symbols:assignment-add-outline-rounded" width="80" className=""/>
                            </div>
                            <div onClick={handleAssignmentUploadModal} className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Assignment upload
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="lucide:mail-plus" width="80" className=""/>
                            </div>
                            <div onClick={handleNoticeUploadModal} className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Notice upload
                            </div>
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

      <UploadPDFModal isOpen={showModal} onClose={() => setShowModal(false)} label={uploadModalLabel} />

    </div>
    );
}

export default FacultyDashboardComponent;