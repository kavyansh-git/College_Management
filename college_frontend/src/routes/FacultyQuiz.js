import Header from "../components/shared/Header";
import FacultySidebar from "../components/shared/FacultySidebar";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import "../App.css";

const FacultyQuizComponent = () => {

    const [course, setCourse] = useState("");
    const [batch, setBatch] = useState("");
    const [branch, setBranch] = useState("");
    const [subject, setSubject] = useState("");
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);

        const handleAddQuestion = () => {
            setQuestions((prev) => [
            ...prev,
            {
                questionText: "",
                options: ["", "", "", ""],
                correctOptionIndex: null,
            },
            ]);
        };

        const handleQuestionChange = (index, value) => {
            const updated = [...questions];
            updated[index].questionText = value;
            setQuestions(updated);
        };

        const handleOptionChange = (qIndex, optIndex, value) => {
            const updated = [...questions];
            updated[qIndex].options[optIndex] = value;
            setQuestions(updated);
        };

        const handleCorrectOptionChange = (qIndex, value) => {
            const updated = [...questions];
            updated[qIndex].correctOptionIndex = Number(value);
            setQuestions(updated);
        };


  const handleSubmit = async (e) => {
      e.preventDefault();

      const resultData = {
       // rollNo: student.rollNo, // example
       // exam: exam,
       // subjects: subjectVariables.map((subject) => ({
       //   name: subject,
       //   marks: marks[subject],
       // })),
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

    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">

        { /* first div  */ }
        <div className="w-full h-full bg-black bg-opacity-40">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <FacultySidebar curActiveScreen="Dashboard"/>
            
            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-50 backdrop-blur-sm border border-white rounded-xl">
                  
                            <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                                Quiz upload
                            </div>
                            <div className="w-full h-9/10">

                                <div className="w-full h-1/7 border-b border-white flex items-center justify-start">

                                        <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Course : 
                                                <select className="input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={course} onChange={(e) => setCourse(e.target.value)}>
                                                    <option value="">Select Course</option>
                                                    <option value="B.Tech">B.Tech</option>
                                                    <option value="B.Pharm">B.Pharm</option>
                                                    <option value="B.C.A.">B.C.A.</option>
                                                    <option value="M.Tech">M.Tech</option>
                                                    <option value="M.Pharm">M.Pharm</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Batch : 
                                                <select className="input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={batch} onChange={(e) => setBatch(e.target.value)}>
                                                    <option value="">Select Batch</option>
                                                    <option value="2022">2022</option>
                                                    <option value="2023">2023</option>
                                                    <option value="2024">2024</option>
                                                    <option value="2025">2025</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-1/4 h-full flex text-white items-center justify-center">
                                        <div className="w-full h-full ml-4 flex items-center justify-start">
                                            <div className="flex items-center justify-center">Branch : 
                                                <select className="input p-2 ml-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={branch} onChange={(e) => setBranch(e.target.value)}>
                                                    <option value="">Select Branch</option>
                                                    <option value="CS">CS</option>
                                                    <option value="IT">IT</option>
                                                    <option value="EC">EC</option>
                                                    <option value="EN">EN</option>
                                                    <option value="ME">ME</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                        <div className="w-1/3 h-full flex text-white items-center justify-center">
                                            <div className="w-full h-full ml-4 flex items-center justify-start">
                                                <div className="flex items-center justify-center">Subject : 
                                                    <select 
                                                        className={`input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded`} 
                                                        value={subject} 
                                                        onChange={(e) => setSubject(e.target.value)}
                                                        >
                                                        <option value="">Select Subject</option>
                                                        <option value="Data Structures">Data Structures</option>
                                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                        <option value="Machine Learning">Machine Learning</option>                                                    
                                                        <option value="Web Technology">Web Technology</option>                                                    
                                                        <option value="Cloud Computing">Cloud Computing</option>                                                    
                                                    </select>
                                                </div>
                                            </div>
                                        </div>                                      
                                                                        
                                </div>                                                                                    
                            
                            
                                <div className="w-full h-7/10 overflow-y-auto flex flex-col items-center justify-start">
                                    
                                    <div className="w-full p-4 space-y-6">
                                        <button
                                            onClick={handleAddQuestion}
                                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                                        >
                                            + Add Question
                                        </button>

                                        {questions.map((q, qIndex) => (
                                            <div key={qIndex} className="p-4 rounded space-y-4">
                                            <textarea
                                                placeholder={`Question ${qIndex + 1}`}
                                                value={q.questionText}
                                                onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                                                className="w-full text-white bg-transparent p-2 border rounded"
                                                rows={3}
                                            />

                                            <div className="grid grid-cols-2 gap-4">
                                                {q.options.map((opt, optIndex) => (
                                                <input
                                                    key={optIndex}
                                                    type="text"
                                                    placeholder={`Option ${optIndex + 1}`}
                                                    value={opt}
                                                    onChange={(e) =>
                                                    handleOptionChange(qIndex, optIndex, e.target.value)
                                                    }
                                                    className="p-2 border bg-transparent text-white rounded"
                                                />
                                                ))}
                                            </div>
                                            <div className="mt-2">
                                                <label className="block text-white mb-1 font-medium">Correct Option:</label>
                                                <select
                                                    value={q.correctOptionIndex ?? ""}
                                                    onChange={(e) => handleCorrectOptionChange(qIndex, e.target.value)}
                                                    className="p-2 border bg-black text-white rounded w-full"
                                                >
                                                    <option value="" disabled>Select correct option</option>
                                                    {q.options.map((opt, optIndex) => (
                                                    <option key={optIndex} value={optIndex}>
                                                        {`Option ${optIndex + 1}`}
                                                    </option>
                                                    ))}
                                                </select>
                                                </div>
                                            </div>
                                        ))}
                                        </div>
                                                                       
                                </div>
                                <div className="w-full h-1/7 mr-5 rounded-b-xl flex flex-col items-end justify-center">
                                    { questions[0] && <button 
                                        className="w-1/6 h-6/10 mr-5 text-white font-semibold rounded-md bg-green-600 hover:cursor-pointer hover:bg-green-700"
                                        onClick={handleSubmit}
                                        >              
                                        { loading ? "Uploading..." : "Upload Quiz" }
                                    </button> }
                                </div> 

                            </div>                  
        
                </div>
              </div>
            <div className="w-2/10 h-full bg-black bg-opacity-40 flex items-center justify-center">
            </div>            
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default FacultyQuizComponent;