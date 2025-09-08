import PDFModal from "./viewPDFModal";
import { useState } from "react";

const NotesCard = ({ note, index }) => {

    const [ selectedPDF, setSelectedPDF ] = useState(null);

    const handleDownload = async () => {
    const response = await fetch(note.fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${note.title}.pdf`;
    a.click();
    window.URL.revokeObjectURL(url);
    };

    const handleOpen = () => {

      setSelectedPDF(note);
      
    }

  return (
    <div className="w-full h-1/7 flex items-center justify-center text-white hover:bg-red-800 hover:bg-opacity-80 hover:cursor-pointer">
      <div className="w-1/20 h-full flex items-center justify-center">
        {index + 1}.
      </div>      
      <div className="w-6/10 h-full flex items-center pl-2 justify-start">
        {note.title}
      </div>
      <div className="w-1/7 h-full flex items-center justify-center">
        <button
            onClick={handleOpen}
            className="w-3/4 h-[60%] rounded-md transition duration-200 ease-in-out cursor-pointer bg-blue-600 hover:bg-blue-700"
            >
            Open
            </button>
      </div>
      <div className="w-1/5 h-full flex items-center pl-2 justify-center">
        <button
            onClick={handleDownload}
            className="w-1/2 h-[60%] rounded-md transition duration-200 ease-in-out cursor-pointer bg-green-600 hover:bg-green-700"
            >
            Download
            </button>
      </div>
      {selectedPDF && (
              <PDFModal pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
            )}
    </div>    
      
  );
};

export default NotesCard;
