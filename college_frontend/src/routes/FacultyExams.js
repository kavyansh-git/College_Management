import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import UploadPDFModal from "../components/shared/UploadPDFModal";
import "../App.css";

const FacultyExamsComponent = () => {  
    
    const [showModal, setShowModal] = useState(false);
    const [uploadModalLabel, setUploadModalLabel] = useState('');

    const handleNoticeUploadModal = () => {
      setUploadModalLabel('Notice');
      setShowModal(true);
    };

    const handleAnswerSheetUploadModal = () => {
      setUploadModalLabel('Answer copy');
      setShowModal(true);
    };

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-40">
          <Header />

          <div className="w-full h-4/5 flex items-center justify-start">
            <FacultySidebar curActiveScreen="Exams" />

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-8/10 h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="w-9/10 h-9/10 rounded-xl flex items-center justify-center">
                  <div className="w-full h-full grid grid-cols-3 grid-rows-3">                
                    

                    

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 bg-black bg-opacity-40 border border-white rounded-xl backdrop-blur-sm hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="uil:file-upload-alt" width="80" className=""/>
                            </div>
                            <Link to="/FacultyResult" className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Result upload
                            </Link>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 bg-black bg-opacity-40 border border-white rounded-xl backdrop-blur-sm hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="lucide:mail-plus" width="75" className=""/>
                            </div>
                            <div onClick={handleNoticeUploadModal} className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Notice upload
                            </div>
                        </div>
                      </div>
                    </div>      

                                    
                    
                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 bg-black bg-opacity-40 border border-white rounded-xl backdrop-blur-sm hover:shadow-md hover:shadow-white hover:border-2">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="stash:search-results" width="85" className=""/>
                            </div>
                            <div onClick={handleAnswerSheetUploadModal} className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Upload answer copies
                            </div>
                        </div>
                      </div>
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

      <UploadPDFModal isOpen={showModal} onClose={() => setShowModal(false)} label={uploadModalLabel} />

    </div>
    );
}

export default FacultyExamsComponent;