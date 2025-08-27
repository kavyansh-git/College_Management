import { Icon } from "@iconify/react";
import srms_logo from "../assets/images/srms-logo.png";
import { Link } from "react-router-dom";
import "../App.css";

const AdminDashboardComponent = () => {  

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">

        { /* first div  */ }
        <div className="w-1/2 h-full bg-black bg-opacity-20 shadow-xl shadow-white">
          <div className="w-full h-1/3 flex flex-col items-center justify-center">
                  <div className="w-1/3 h-1/2 flex items-center justify-center">
                    <img className=" w-full object-cover p-4" src={srms_logo} alt="spotify logo " width={125}/>
                  </div>
              <div className="w-9/10 h-1/2 shadow shadow-white rounded-xl flex flex-col items-center justify-center">
                  <div className="w-full h-2/3 border-b rounded-t-xl bg-black bg-opacity-50 text-2xl font-bold text-red-600 text-center flex justify-center items-center">
                      SHRI RAM MURTI SMARAK COLLEGE OF ENGINEERING & TECHNOLOGY
                  </div>
                  <div className="w-full h-1/3 shadow-xl bg-opacity-50 rounded-b-xl bg-black font-semibold text-lg text-white text-center flex justify-center items-center">
                      Nainital Road, Bareilly. (U.P. 243202)
                  </div>
              </div>
            </div>
        <div className="w-full h-2/3 flex flex-col items-center justify-center">
            <div className="w-full h-2/10 flex items-end justify-center">
                <div className="w-1/2 h-6/10 rounded-md shadow shadow-white bg-black bg-opacity-60 text-white text-lg flex items-center justify-center">
                    <Icon icon="icon-park-outline:people-safe" width="40" className="mr-2" />Admin Dashboard
                </div>

            </div>
            <div className="w-full h-8/10 flex items-center justify-center">
          
                
                <div className="w-full h-full text-white flex flex-col items-center justify-start">
                <div className="w-full h-8/10 flex items-center justify-center">
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="w-1/2 h-1/2 bg-black bg-opacity-60 border-2 shadow shadow-white rounded-md flex flex-col items-center justify-center">
                            <div className="w-full h-3/4 rounded-t-md flex items-center justify-center">
                                <Icon icon="hugeicons:students" width="120" />
                            </div>
                            <div className="w-full h-1/4 flex items-center justify-center">
                                <Link to='/StudentCreate' className="w-full h-1/4 font-semibold text-white flex items-end justify-center hover:text-blue-500 cursor-pointer">
                                Add Student
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="w-1/2 h-1/2 bg-black bg-opacity-60 border-2 shadow shadow-white rounded-md flex flex-col items-center justify-center">
                            <div className="w-full h-3/4 rounded-t-md flex items-center justify-center">
                                <Icon icon="hugeicons:teacher" width="100" />
                            </div>
                            <div className="w-full h-1/4 flex items-center justify-center">
                                <Link to='/FacultyCreate' className="w-full h-1/4 font-semibold text-white flex items-end justify-center hover:text-blue-500 cursor-pointer">
                                Add Faculty
                                </Link>
                            </div>
                        </div>                
                    </div>
                    </div>                                
                

            </div>
        </div>
        </div>        
      </div>
      </div>

    </div>
    );
}

export default AdminDashboardComponent;