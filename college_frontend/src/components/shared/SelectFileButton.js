import { useRef, useState } from "react";

const SelectFileButton = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState(null);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  setFileName(e.target.files[0]?.name || "")
  if (!file) return;

  const type = file.type;
  setFileType(type);

  if (type === "application/pdf") {
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  } else {
    setPreviewUrl(null);
  }
};

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
<div className="w-full h-full">
    
    { previewUrl ?
    <div className="w-8/10 h-full mt-5 overflow-auto flex items-center">
        {previewUrl && fileType === "application/pdf" && (
            <iframe
                src={previewUrl}
                title="PDF Preview"
                className="w-full h-full border rounded-lg shadow"
            />
        )}
    </div> : <div></div> }

    <div className="mt-2">
      {/* Hidden input */}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*,application/pdf"
        onChange={handleFileChange}
        />

      {/* Custom button */}
      <button
        onClick={handleClick}
        className="bg-green-600 hover:bg-green-700 mb-4 mt-2 text-white font-semibold py-2 px-4 rounded shadow"
      >
        {fileName ? <p className="text-sm text-gray-100">Selected: {fileName}</p> : <p>Select file </p>}
      </button>
      
    </div>
    </div>
  );
};

export default SelectFileButton;
