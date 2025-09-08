import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import { useStudent } from "../context/StudentContext";
import { useState } from "react";
import axios from "../utils/axios";
import "../App.css";
import NotesCard from "../components/shared/NotesCard";

const StudentNotesComponent = () => {

    const { student } = useStudent();

    const [ notes, setNotes ] = useState([]);

        const fetchNotes = async () => {
          try {
            const response = await axios.get(`/view/notes?batch=${student.batch}&branch=${student.branch}`); // adjust endpoint if needed
            setNotes(response.data);
          } catch (error) {
            console.error("Failed to fetch notes:", error.response?.data || error.message);
          }
        };
    
        fetchNotes();

  return (

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Dashboard"/>
            
            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-40 border border-white rounded-xl">
                  
                            <div className="w-full h-1/10 bg-white rounded-t-xl bg-opacity-10 flex items-center justify-center border-white text-white text-xl">
                                Notes
                            </div>
                            <div className="w-full h-9/10 overflow-auto">                                

                                <div className="w-full h-1/10 flex border-t items-center justify-center text-white">
                                    <div className="w-1/20 h-full pl-2 flex items-center justify-start">
                                        S.No
                                    </div>
                                    <div className="w-6/10 h-full flex items-center pl-2 justify-start">
                                        Description
                                    </div>
                                    <div className="w-1/7 h-full flex items-center justify-center">
                                        Open
                                    </div>
                                    <div className="w-1/5 h-full flex items-center pl-2 justify-center">
                                        Download
                                    </div>                                   
                                </div>                                                     
                            

                                <div className="w-full h-3/4 rounded-b-xl border-t border-white overflow-y-auto flex flex-col items-center justify-start">
                                    {notes.map((note, index) => (
                                            <NotesCard note={note} index={index} />
                                    ))}                                    
                                </div>

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