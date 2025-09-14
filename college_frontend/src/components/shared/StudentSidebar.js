import profile_image from "../../assets/images/profile_image1.jpg";
import SidebarButton from "./SidebarButton";
import { useStudent } from "../../context/StudentContext";

const StudentSidebar = ({ curActiveScreen }) => {

    const { student } = useStudent();

    return (
        <div className="w-1/7 h-full bg-black bg-opacity-40 backdrop-blur-sm border-r border-gray-500">
                
                <div className="w-full bg-black bg-opacity-40 aspect-square flex items-center justify-center border-b border-gray-500">
                    <div className="w-2/3 aspect-square rounded-full overflow-hidden border-2 border-white">
                        <img 
                            className="w-full h-full object-cover" 
                            src={ student ? student.profileImage : profile_image } 
                            alt="photograph"
                        />
                    </div>
                </div>
                <div className="w-full h-3/5 bg-black bg-opacity-40">
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