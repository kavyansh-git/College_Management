import srms_logo from "../../assets/images/srms-logo.png";
import LogoutButton from "./LogoutButton";

const Header = () => {
    return (
        
        <div className="w-full h-1/5 bg-black bg-opacity-40 flex items-center justify-center border-b border-white">
            <div className="w-1/7 h-full flex items-center justify-evenly">

                  <div className="w-full h-full flex items-center justify-center">
                    <img className=" w-full object-cover p-4" src={srms_logo} alt="srms_logo " width={125}/>
                  </div>
              
            </div>
            <div className="w-6/7 h-full flex items-center justify-center">
                <div className="w-8/10 h-full flex items-center justify-center">
                <div className="w-9/10 h-8/10 backdrop-blur-sm shadow shadow-white rounded-xl flex flex-col items-center justify-center">
                    <div className="w-full h-2/3 border-b rounded-t-xl bg-black bg-opacity-50 text-2xl font-bold text-red-600 text-center flex justify-center items-center">
                        SHRI RAM MURTI SMARAK COLLEGE OF ENGINEERING & TECHNOLOGY
                    </div>
                    <div className="w-full h-1/3 shadow-xl bg-opacity-50 rounded-b-xl bg-black font-semibold text-lg text-white text-center flex justify-center items-center">
                        Nainital Road, Bareilly. ( U.P. 243202 )
                    </div>
                </div>
                </div>
                <div className="w-2/10 h-full flex items-end justify-end">
                    <LogoutButton />
                </div>
            </div>
            
        </div>
    )
};

export default Header;
