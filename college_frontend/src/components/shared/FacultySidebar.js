import profile_image from "../../assets/images/profile_image.jpg";
import SidebarButton from "./SidebarButton";

const FacultySidebar = ({curActiveScreen}) => {

    return (
        <div className="w-1/7 h-full bg-black bg-opacity-70 backdrop-blur-sm border-r border-gray-500">
                
                <div className="w-full h-2/5 flex items-center justify-center border-b border-gray-500">
                    <div className="w-40 h-41 rounded-full border-2 border-white">
                        <img className="w-full object-cover rounded-full" src={profile_image} alt="photograph"/>
                    </div>
                </div>
                <div className="w-full h-3/5">
                  <SidebarButton icon="bi:person-circle" screen={curActiveScreen} iconWidth="28" label="My profile" target="/FacultyProfile"/>
                  <SidebarButton icon="carbon:dashboard" screen={curActiveScreen} iconWidth="30" label="Dashboard" target="/FacultyDashboard"/>
                  <SidebarButton icon="healthicons:i-exam-multiple-choice-outline" screen={curActiveScreen} iconWidth="35" label="Exams" target="/FacultyExams"/>
                  <SidebarButton icon="carbon:event-schedule" screen={curActiveScreen} iconWidth="32" label="Time table" target="/FacultyTimetable"/>                
                </div>

                <div className="">

                </div>
            </div>
    )
};

export default FacultySidebar;