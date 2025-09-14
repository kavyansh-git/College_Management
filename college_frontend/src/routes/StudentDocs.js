import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import "../App.css";

const StudentDocsComponent = () => {
  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">
        {/* first div  */}
        <div className="w-full h-full bg-black bg-opacity-40">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Academic docs"/>

            <div className="w-6/7 h-full bg-black bg-opacity-40 flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDocsComponent;
