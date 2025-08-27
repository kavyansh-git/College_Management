import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import "../App.css";

const FacultyTimetableComponent = () => {
  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">
        {/* first div  */}
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <FacultySidebar curActiveScreen="Time table"/>

            <div className="w-6/7 h-full bg-black bg-opacity-70 flex items-center justify-center">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyTimetableComponent;
