import axios from "../utils/axios";
import srms_logo from "../assets/images/srms-logo.png";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import "../App.css";

const AdminLoginComponent = () => {

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token", "user"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = {adminId, password};

        try {
          const response = await axios.post("/admin/adminLogin", data);

        if (response.data && !response.data.err) {
            const token = response.data.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);

            // setting cookie for 30 days
            setCookie("token", token, {path: "/", expires: date});
            setCookie("user", response, {path: "/", expires: date});          
            navigate("/AdminDashboard");
            toast.success("Successfully logged in");
        } else {
            toast.error("Failed to login!");
        }
      } catch (error) {
        console.error("Login error:", error.response?.data || error.message);
        toast.error("Server error during login");
      }
  };

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-9/10 bg-black bg-opacity-40 flex items-center justify-center">

        { /* first div  */ }
        <div className="w-1/2 h-full">
          <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <div className="w-1/3 h-1/2 flex items-center justify-center">
                    <img className=" w-full object-cover p-4" src={srms_logo} alt="spotify logo " width={125}/>
                  </div>
              <div className="w-9/10 h-1/2 shadow shadow-white rounded-xl backdrop-blur-sm flex flex-col items-center justify-center">
                  <div className="w-full h-2/3 border-b rounded-t-xl bg-black bg-opacity-50 text-2xl font-bold text-red-600 text-center flex justify-center items-center">
                      SHRI RAM MURTI SMARAK COLLEGE OF ENGINEERING & TECHNOLOGY
                  </div>
                  <div className="w-full h-1/3 shadow-xl rounded-b-xl bg-black bg-opacity-50 font-semibold text-lg text-white text-center flex justify-center items-center">
                      Nainital Road, Bareilly. ( U.P. 243202 )
                  </div>
              </div>
            </div>
          <div className="w-full h-2/3 rounded-xl flex items-center justify-center">
            <div className="w-2/3 h-4/5 flex-col border-4 border-white bg-black bg-opacity-50 backdrop-blur-sm text-white text-opacity-100 rounded-lg flex items-center justify-center">
              <div className="w-full h-4/5 rounded-t-lg flex items-center justify-evenly">
              <div className="w-1/3 h-3/4 flex flex-col items-center justify-center">
                          <div className="w-full h-3/5 mt-6 rounded-lg flex justify-center items-end">
                              <Icon icon="icon-park-outline:people-safe" width="125"/>
                          </div>
                          <div className="w-2/3 h-1/6 rounded-lg bg-transparent flex justify-center items-center text-xl text-white font-medium">
                            Admin
                          </div>                          
              </div>
              <div className="w-1/2 h-3/4 flex flex-col items-center justify-center">
                <TextInput 
                        label="Admin ID"
                        placeholder="Enter admin id"
                        className="my-4"
                        value={adminId}
                        setValue={setAdminId}    
                />
                <PasswordInput 
                        label="Password"
                        placeholder="Enter admin password"
                        value={password}
                        setValue={setPassword}    
                />                                       
              </div>
            </div>            
          <div className="w-full h-1/5 rounded-b-lg flex items-start justify-center">
            <button className="w-2/5 h-1/2 rounded-lg bg-green-600 flex justify-center items-center text-white font-semibold hover:bg-green-700"
                    onClick={(e) => {e.preventDefault();
                    login();
                    }}
              >
              LOG IN
            </button>
          </div>
          </div>
        </div>        
      </div>
      </div>

      { /* second div  */ }
      <div className="w-full h-1/10 flex items-center justify-center bg-black opacity-85">

      <div className="w-1/3 h-full flex flex-col items-center justify-center">
          <div className="w-2/3 h-1/3 font-semibold text-white flex items-center justify-center">
            Follow us :
          </div>
          <div className="w-2/3 h-1/3 font-thin text-white flex items-center justify-center">
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:instagram-fill" width="20"/>_Instagram
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:facebook-fill" width="20"/>_facebook
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:youtube-fill" width="20"/>_youtube
            </div>
          </div>
        </div>

        <div className="w-1/3 h-full flex flex-col items-center justify-center">
          <div className="w-2/3 h-1/3 font-semibold text-white flex items-center justify-center">
            Developed by :
          </div>
          <div className="w-2/3 h-1/3 font-thin text-white flex items-center justify-center">
            Kavyansh Gupta
          </div>

        </div>

        <div className="w-1/3 h-full flex flex-col items-center justify-center">
          <div className="w-1/2 h-1/3 font-semibold text-white bg-black bg-opacity-25 flex items-center justify-center">
            Contact us :
          </div>
          <div className="w-1/2 h-1/3 font-thin text-white bg-black bg-opacity-25 flex items-center justify-center">
            +91-1234567890
          </div>
        </div>        

      </div>
    </div>
    );
}

export default AdminLoginComponent;