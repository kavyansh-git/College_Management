import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import { useStudent } from "../context/StudentContext";
import "../App.css";


const StudentNotesComponent = () => {

    const { student }  = useStudent();
  
    return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
            <Header />
                              
            <div className="w-full h-4/5 flex items-center justify-start">
                <StudentSidebar curActiveScreen="My profile"/>

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-8/10 h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 border border-white rounded-xl">
                  
                    <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                        Personal Details
                    </div>
                    <div className="w-full h-9/10 overflow-auto">                      
                            
                    </div>                  
        
                </div>
              </div>
            <div className="w-2/10 h-full bg-black bg-opacity-70 flex items-center justify-center">
            </div>            
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default StudentNotesComponent;