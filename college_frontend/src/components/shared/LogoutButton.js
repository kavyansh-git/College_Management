import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const LogoutButton = () => {

    const navigate = useNavigate();

    const removeToken = () => {
        Cookies.remove("token", { path: "/" }); // Adjust path if needed
        Cookies.remove("user", { path: "/" }); // Adjust path if needed
    };


    const handleLogout = async () => {

        // Clear authentication tokens or session data here          
            removeToken();            
        // Redirect to the login page or home page
            navigate("/login");
            toast.success("Successfully logged out");
    }


    return (
        <div className="w-full h-4/10 flex items-start justify-center">
                        <div className="w-1/4 h-6/10 mr-2 flex items-center justify-end text-white font-semibold">
                            <Icon icon="icon-park-outline:people-safe" width="32" />
                        </div>
                        <button onClick={handleLogout} className="w-1/3 h-6/10 backdrop-blur-sm border-2 border-white flex items-center justify-center text-white font-semibold rounded-lg hover: cursor-pointer hover:text-blue-500 hover:border-blue-500">
                            Logout
                        </button>
                    </div>
    );
}

export default LogoutButton;
// This component can be used in the Header or any other component where a logout button is needed.