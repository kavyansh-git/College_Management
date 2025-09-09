import { useState } from "react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

const AttendanceCard = ({ student, submitted, setSubmitted, index }) => {

    const [value, setValue ] = useState("");

    const handleSubmit = async () => {
        
        try {
            if (!value) {
                toast.info("Please enter attendance value!");
                return;
            }
            const response = await axios.post(`/student/updateAttendance/${student._id}`, { attendance: value });
            if (response.status === 200) {
                setSubmitted((prev) => [...prev, student._id]); // ✅ triggers re-render in parent
                toast.success("Attendance updated successfully!");
            }
        } catch (error) {
            console.error("Failed to update attendance:", error.response?.data || error.message);
            toast.error("Failed to update attendance!");
        }       
    };

    const isSubmitted = submitted.includes(student._id);

  return (
    <div className="w-full h-1/7 flex items-center justify-center text-white">
      <div className="w-1/20 h-full flex items-center justify-center">
        {index + 1}.
      </div>
      <div className="w-1/10 h-full flex items-center justify-center">
        <div className="overflow-hidden">
            <img
                src={student.profileImage}
                alt="Avatar"
                className="w-9 h-9 rounded-sm"
            />
        </div>
      </div>
      <div className="w-1/4 h-full flex items-center pl-2 justify-start">
        {`${student.firstName} ${student.lastName}`}
      </div>
      <div className="w-1/5 h-full flex items-center pl-2 justify-start">
        {student.rollNo}
      </div>
      <div className="w-1/4 h-full flex items-center pl-2 justify-start">
        <div className="flex flex-col items-center justify-center space-y-2 w-full">            
            <input 
                type="text" 
                placeholder="Enter attendance in %" 
                className="w-8/10 h-8/10 p-2 bg-transparent border-2 border-white rounded placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                value={value}
                onChange={(e)=>{setValue(e.target.value) }}                
                />
            </div>
        </div>
      <div className="w-1/7 h-full flex items-center pl-2 justify-center">
        <button
            onClick={handleSubmit}
            className={`w-3/4 h-[60%] rounded-md transition duration-200 ease-in-out cursor-pointer ${
                isSubmitted ? "bg-green-600 hover:bg-green-700" : "bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={isSubmitted}
            >
            {isSubmitted ? "Submitted" : "Submit"}
            </button>
      </div>
    </div>
  );
};

export default AttendanceCard;
