import { Icon } from "@iconify/react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/serverHelpers";
import { toast } from "react-toastify";
import srms_logo from "../assets/images/srms-logo.png";
import TextInput from "../components/shared/TextInput";
import PasswordInput from "../components/shared/PasswordInput";
import "../App.css";

const LoginFacultyComponent = () => {

  const [facultyId, setFacultyId] = useState("");
  const [password, setPassword] = useState("");
  const [cookie, setCookie] = useCookies(["token", "user"]);
  const navigate = useNavigate();

  const login = async () => {

        const data = {facultyId, password};
        const response = await makeUnauthenticatedPOSTRequest("/faculty/facultyLogin", data);
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, {path: "/", expires: date});
            setCookie("user", response, {path: "/", expires: date});
            navigate("/FacultyDashboard");
            toast.success("Successfully logged in!");
        }
        else {
            toast.error("Failed to login!");
        }
    }

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
                      Nainital Road, Bareilly. (U.P. 243202)
                  </div>
              </div>
            </div>
          <div className="w-full h-2/3 rounded-xl flex items-center justify-center">
            <div className="w-2/3 h-4/5 flex-col border-4 border-white bg-black bg-opacity-50 backdrop-blur-sm text-white text-opacity-100 rounded-lg flex items-center justify-center">
              <div className="w-full h-4/5 rounded-t-lg flex items-center justify-evenly">
              <div className="w-1/3 h-3/4 flex flex-col items-center justify-center">
                          <div className="w-full h-3/5 mt-6 rounded-lg flex justify-center items-end">
                              <Icon icon="hugeicons:teacher" width="125"/>
                          </div>
                          <div className="w-2/3 h-1/6 rounded-lg bg-transparent flex justify-center items-center text-xl text-white font-medium">
                            Faculty
                          </div>                          
              </div>
              <div className="w-1/2 h-3/4 flex flex-col items-center justify-center">
                <TextInput 
                        label="Faculty ID"
                        placeholder="Enter your faculty id"
                        className="my-4"
                        value={facultyId}
                        setValue={setFacultyId}    
                />
                <PasswordInput 
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        setValue={setPassword}    
                />                                       
              </div>
            </div>            
          <div className="w-full h-1/5 rounded-b-lg flex items-start justify-center">
            <button className="w-2/5 h-1/2 rounded-lg bg-green-800 flex justify-center items-center text-white font-semibold hover:bg-green-600"
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
            Kavyansh Gupta & other team members.
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

export default LoginFacultyComponent;