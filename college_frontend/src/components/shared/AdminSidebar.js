import profile_image from "../../assets/images/admin_image.png";
import SidebarButton from "./SidebarButton";

const AdminSidebar = ({curActiveScreen}) => {

    return (
        <div className="w-1/7 h-full bg-black bg-opacity-40 backdrop-blur-sm border-r border-gray-500">
                
                <div className="w-full h-2/5 bg-black bg-opacity-50 flex items-center justify-center border-b border-gray-500">
                    <div className="w-40 h-41 rounded-full border-2 border-white">
                        <img className="w-full object-cover rounded-full" src={profile_image} alt="photograph"/>
                    </div>
                </div>
                <div className="w-full h-3/5 bg-black bg-opacity-50">
                  <SidebarButton icon="hugeicons:students" screen={curActiveScreen} iconWidth="28" label="add Student" target="/StudentCreate"/>
                  <SidebarButton icon="hugeicons:teacher" screen={curActiveScreen} iconWidth="30" label="add Faculty" target="/FacultyCreate"/>                  
                </div>

                <div className="">

                </div>
            </div>
    )
};

export default AdminSidebar;