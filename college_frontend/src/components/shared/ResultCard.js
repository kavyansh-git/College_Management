import { useState } from "react";
import axios from "../../utils/axios";
import { toast } from "react-toastify";

const ResultCard = ({ exam, student }) => {

    console.log(exam);
    const subjectNames = ["Data Structures", "Cloud Computing", "Artificial Intelligence", "Machine Learning", "Web Development"];
    const subjectVariables = ["Data_Structures", "Cloud_Computing", "Artificial_Intelligence", "Machine_Learning", "Web_Development"];
    const [ marks, setMarks ] = useState({
      Data_Structures: "",
      Cloud_Computing: "",
      Artificial_Intelligence: "",
      Machine_Learning: "",
      Web_Development: "",
    });
    const [loading, setLoading] = useState(false);
    

    const handleMarksChange = (e) => {
      const { name, value } = e.target;

      setMarks((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    
    const handleSubmit = async (e) => {
      e.preventDefault();

      const resultData = {
        rollNo: student.rollNo, // example
        exam: exam,
        subjects: subjectVariables.map((subject) => ({
          name: subject,
          marks: marks[subject],
        })),
      };
      
      setLoading(true);
      try {
        const response = await axios.post("/upload/result", resultData);
        console.log(response);
        toast.success("Result uploaded successfully");
      } catch (err) {
        toast.error("Upload failed");
      } finally {
        setLoading(false);
      }
    };

  return (

    <div className="w-full h-full flex flex-col items-center justify-start">
      <div className="w-full h-1/7 border-b border-white mb-2 flex items-center justify-center text-white">
        
        <div className="w-1/10 h-full flex items-center justify-center">
          <div className="overflow-hidden">
              <img
                  src={student.profileImage}
                  alt="Avatar"
                  className="w-9 aspect-square rounded-sm"
              />
          </div>
        </div>
        <div className="w-1/4 h-full flex items-center pl-2 justify-start">
          {`${student.firstName} ${student.lastName}`}
        </div>
        <div className="w-1/7 h-full flex items-center pl-2 justify-start">
          {student.rollNo}
        </div>
        <div className="w-1/5 h-full flex items-center pl-2 justify-center">
          {student.course}
        </div>
        <div className="w-1/7 h-full flex items-center pl-2 justify-center">
          {student.batch}
        </div>
        <div className="w-1/7 h-full flex items-center pl-2 justify-center">
          {student.branch}
        </div>      
      </div>
      <div className="w-full h-6/7 text-white flex flex-col items-center justify-center">
          {subjectVariables.map((subject, index) => (
            <div key={subject} className="flex items-center justify-start p-1 w-full min-h-10">
              <label className="w-1/5 ml-4">{index + 1}. {subjectNames[index]} :</label>
              <input
                type="text"
                name={subject}
                className="w-1/3 p-1 bg-transparent border-2 border-white rounded placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                value={marks[subject]}
                onChange={handleMarksChange}
                placeholder={`Enter marks for ${subjectNames[index]}`}
              />
            </div>
          ))}
          <div className="w-full min-h-14 flex items-center justify-end">
            <button 
              className="w-1/5 h-6/10 mr-5 text-white font-semibold rounded-md bg-green-600 hover:cursor-pointer hover:bg-green-700"
              onClick={handleSubmit}
              >              
              { loading ? "Uploading..." : "Upload Result" }
            </button>
          </div>

      </div>
    </div>
  );
};

export default ResultCard;
