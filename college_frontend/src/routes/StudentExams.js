import { Icon } from "@iconify/react";
import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import "../App.css";

const StudentExamsComponent = () => {
  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Exams"/>
            
            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-8/10 h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 rounded-xl flex items-center justify-center">
                  <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                    
                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2 rounded-tl-xl row-span-2">
                      <div className="w-9/10 h-95/10 border border-white rounded-xl">
                        <div className="w-full h-1/7 bg-white bg-opacity-10 flex items-center justify-center border-b border-white">
                            <div className="w-1/6 h-full text-white flex items-center justify-center">
                            <Icon icon="ion:mail-notification-outline" width="28"/>
                            </div>
                            <div className="w-5/6 h-full font-medium text-white flex items-center justify-start">
                              Exam Notifications
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="uiw:verification" width="80" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Admit card
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="streamline-ultimate:bookmarks-document" width="70" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              Exams result
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pl-4 pr-4 pt-2 pb-2">
                      <div className="w-9/10 h-9/10 border border-white rounded-xl">
                        <div className="w-full h-full rounded-xl flex-col items-center justify-center">
                            <div className="w-full h-3/4 text-white flex items-center justify-center">
                              <Icon icon="stash:search-results" width="85" className=""/>
                            </div>
                            <div className="w-full h-1/4 font-medium text-white flex items-start justify-center hover:text-blue-400 cursor-pointer">
                              View answer sheets
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
    </div>
    );
}

export default StudentExamsComponent;