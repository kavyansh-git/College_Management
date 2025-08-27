import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import srms_logo from "../assets/images/srms-logo.png";
import "../App.css";

const LoginComponent = () => {
  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-9/10 bg-black bg-opacity-50 flex items-center justify-center">
        {/* first div  */}
        <div className="w-1/2 h-full">
          <div className="w-full h-1/3 flex flex-col items-center justify-center">
            <div className="w-1/3 h-1/2 flex items-center justify-center">
              <img
                className=" w-full object-cover p-4"
                src={srms_logo}
                alt="srms_logo "
                width={125}
              />
            </div>
            <div className="w-9/10 h-1/2 rounded-xl shadow shadow-white flex flex-col items-center justify-center">
              <div className="w-full h-2/3 border-b rounded-t-xl bg-black bg-opacity-50 text-2xl font-bold text-red-600 text-center flex justify-center items-center">
                SHRI RAM MURTI SMARAK COLLEGE OF ENGINEERING & TECHNOLOGY
              </div>
              <div className="w-full h-1/3 shadow-xl bg-opacity-50 rounded-b-xl bg-black font-semibold text-lg text-white text-center flex justify-center items-center">
                Nainital Road, Bareilly. (U.P. 243202)
              </div>
            </div>
          </div>
          <div className="w-full h-2/3 flex items-center justify-center">
            <div className="w-8/10 h-4/5 shadow-xl rounded-xl bg-black bg-opacity-60">
              <div className="w-full h-2/10 flex items-center justify-center p-4 text-xl text-white font-semibold rounded-t-xl border-2 border-white">
                Key features of ERP:
              </div>
              <div className="w-full h-8/10 rounded-b-xl flex items-center justify-center">
                <div className="w-1/2 h-full flex flex-col items-start justify-start p-4 rounded-bl-xl border-l-2 border-b-2 border-r border-white">
                  <div className="w-full h-1/6 flex items-center justify-center p-4 border-b text-lg text-white border-white">
                    for faculties:
                  </div>
                  <ul className="py-2 text-white text-md list-none space-y-2">
                    <li className="before:content-['➤'] before:mr-2">
                      Attendance upload
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Assigning Quiz
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Result upload
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Assignments
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Tutorials
                    </li>
                    <li className="before:content-['➤'] before:mr-2">Notes</li>
                  </ul>
                </div>

                <div className="w-1/2 h-full flex flex-col items-start justify-start p-4 rounded-br-xl border-r-2 border-b-2 border-l border-white">
                  <div className="w-full h-1/6 flex items-center justify-center p-4 border-b text-lg text-white border-white">
                    for students:
                  </div>
                  <ul className="py-2 text-white text-md list-none space-y-2">
                    <li className="before:content-['➤'] before:mr-2">
                      Fees management
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Attendance tracking
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Result
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Assignments
                    </li>
                    <li className="before:content-['➤'] before:mr-2">
                      Tutorials
                    </li>
                    <li className="before:content-['➤'] before:mr-2">Notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second div  */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="w-4/6 h-1/10 flex items-start justify-end">
            <div className="w-1/10 h-1/2 mr-2 flex items-center justify-end text-white font-semibold">
              <Icon icon="icon-park-outline:people-safe" width="30" />
            </div>
            <Link to="/AdminLogin" className="w-1/6 h-1/2 border-2 border-white flex items-center justify-center text-white font-semibold rounded-lg hover: cursor-pointer hover:text-blue-500 hover:border-blue-500">
              Admin
            </Link>
          </div>
          <div className="w-2/3 h-1/5 flex items-center justify-center">
            <div className="w-4/5 h-1/2 shadow shadow-white flex items-center justify-center text-white text-2xl font-semibold rounded-lg bg-black text-opacity-100 bg-opacity-50">
              Welcome to SRMS ERP
            </div>
          </div>
          <div className="w-2/3 h-1/2 border-4 border-white bg-black bg-opacity-50 text-white text-opacity-100 rounded-lg flex items-center justify-center">
            <div className="w-1/2 h-3/4 border-r-2 border-white flex flex-col items-center justify-center">
              <div className="w-2/3 h-3/5 my-4 rounded-lg flex justify-center items-center">
                <Icon icon="hugeicons:teacher" width="120" />
              </div>
              <Link to="/FacultyLogin" className="w-2/3 h-1/6 rounded-lg bg-green-800 flex justify-center items-center text-white font-semibold hover:bg-green-600 cursor-pointer">
                Faculty                
              </Link>
            </div>
            <div className="w-1/2 h-3/4 border-l-2 border-white flex flex-col items-center justify-center">
              <div className="w-2/3 h-3/5 my-4 rounded-lg flex justify-center items-center">
                <Icon icon="hugeicons:students" width="120" />
              </div>
              <Link to="/StudentLogin" className="w-2/3 h-1/6 rounded-lg bg-green-800 flex justify-center items-center text-white font-semibold hover:bg-green-600 cursor-pointer">
                Student                
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* third div  */}
      <div className="w-full h-1/10 flex items-center justify-center bg-black opacity-85">
        <div className="w-1/3 h-full flex flex-col items-center justify-center">
          <div className="w-2/3 h-1/3 font-semibold text-white flex items-center justify-center">
            Follow us :
          </div>
          <div className="w-2/3 h-1/3 font-thin text-white flex items-center justify-center">
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:instagram-fill" width="20" />
              _Instagram
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:facebook-fill" width="20" />
              _facebook
            </div>
            <div className="w-1/3 h-full flex items-center justify-center">
              <Icon icon="akar-icons:youtube-fill" width="20" />
              _youtube
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
};

export default LoginComponent;
