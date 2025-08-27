import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import { useStudent } from "../context/StudentContext";
import "../App.css";


const StudentProfileComponent = () => {

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
                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Name :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {`${student.firstName} ${student.lastName}`}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Roll no. :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.rollNo}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Reg. no. :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.regNo}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Branch :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.branch}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full pr-4 rounded-xl font-semibold flex items-center justify-end">
                                          Course :
                                      </div>
                                      <div className="w-1/2 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.course}
                                      </div>
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                          Batch :
                                      </div>
                                      <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.batch}
                                      </div>
                                    </div>                                                                
                                </div>

                                <div className="w-full h-1/10 flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full pr-4 rounded-xl font-semibold flex items-center justify-end">
                                          D.O.B. :
                                      </div>
                                      <div className="w-1/2 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                            {student.dob}
                                      </div>
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                          Nationality :
                                      </div>
                                      <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                          {student.nationality}
                                      </div>
                                    </div>                                                                
                                </div>

                                <div className="w-full h-1/10 flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full pr-4 rounded-xl font-semibold flex items-center justify-end">
                                          Religion :
                                      </div>
                                      <div className="w-1/2 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                            {student.religion}
                                      </div>
                                    </div>
                                    <div className="w-1/2 h-full flex items-center justify-center">
                                      <div className="w-1/2 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                          Caste :
                                      </div>
                                      <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                            {student.caste}
                                      </div>
                                    </div>                                                                
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Father's name :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.fatherName}
                                    </div>                              
                                </div>                             

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Father's occupation :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.fatherOccupation}
                                    </div>                              
                                </div>                            

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Mother's name :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.motherName}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Mother's occupation :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.motherOccupation}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Permanent address :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.permanentAddress}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Mailing address :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.mailingAddress}
                                    </div>                              
                                </div>                                

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Contact no.( Student ) :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.contactNoStudent}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        Contact no.( Parent ) :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.contactNoParents}
                                    </div>                              
                                </div>

                                <div className="w-full h-1/10 rounded-xl flex items-center text-lg justify-center font-medium text-white">
                                    <div className="w-1/4 h-full rounded-xl pr-4 font-semibold flex items-center justify-end">
                                        E-mail :
                                    </div>
                                    <div className="w-5/6 h-full pl-4 rounded-xl font-thin flex items-center justify-start">
                                        {student.email}
                                    </div>                              
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

export default StudentProfileComponent;