import { useState } from "react";

const ResultViewCard = ({ result, index }) => {

    const [ isOpen, setIsOpen ] = useState(false);
    const SUBJECTS = result.subjects;

    const handleOpen = () => {

      setIsOpen(!isOpen);
      
    }

  return (
    <div className="w-full">
      <div className={`w-full min-h-14 flex items-center justify-center text-white hover:bg-red-800 hover:bg-opacity-80 ${isOpen ? "bg-red-800 border-y border-white" : "bg-transparent"}`} >
        <div className="w-1/20 h-full flex items-center justify-center">
          {index + 1}.
        </div>      
        <div className="w-8/10 h-full flex items-center pl-2 justify-start">
          {result.exam}
        </div>        
        <div className="w-1/7 h-full flex items-center justify-center">
          <button
            onClick={handleOpen}
            className="w-3/4 h-[60%] p-1 rounded-md transition duration-200 ease-in-out cursor-pointer bg-green-600 hover:bg-green-700"
            >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>
      </div>
    {isOpen && <div className="w-full min-h-10">
      {SUBJECTS.map((subject, index) => (
            <div key={subject} className="flex items-center justify-start p-1 w-full min-h-10">
              <div className="w-1/5 ml-4 text-white">{index + 1}. {subject.name.replace(/_/g, " ")} : </div>
              <div className="w-1/10 ml-4 text-white">{subject.marks}</div>              
            </div>
          ))}
    </div> }
  </div>       
      
  );
};

export default ResultViewCard;
