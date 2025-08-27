import profile_image from "../../assets/images/profile_image1.jpg";
import SidebarButton from "./SidebarButton";

const StudentSidebar = ({curActiveScreen}) => {

    return (
        <div className="w-1/7 h-full bg-black bg-opacity-70 border-r border-gray-500">
                
                <div className="w-full h-2/5 flex items-center justify-center border-b border-gray-500">
                    <div className="w-40 h-41 rounded-full border-2 border-white">
                        <img className="w-full object-cover rounded-full" src={profile_image} alt="photograph"/>
                    </div>
                </div>
                <div className="w-full h-3/5">
                  <SidebarButton icon="bi:person-circle" screen={curActiveScreen} iconWidth="28" label="My profile" target="/StudentProfile"/>
                  <SidebarButton icon="carbon:dashboard" screen={curActiveScreen} iconWidth="30" label="Dashboard" target="/StudentDashboard"/>
                  <SidebarButton icon="healthicons:i-exam-multiple-choice-outline" screen={curActiveScreen} iconWidth="35" label="Exams" target="/StudentExams"/>
                  <SidebarButton icon="game-icons:money-stack" screen={curActiveScreen} iconWidth="32" label="Pay fees" target="/StudentFees"/>
                  <SidebarButton icon="oui:documents" screen={curActiveScreen} iconWidth="28" label="Academic docs" target="/StudentDocs"/>                
                </div>

                <div className="">

                </div>
            </div>
    )
};

export default StudentSidebar;