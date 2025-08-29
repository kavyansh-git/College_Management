import { useState } from "react";
import { usePDFUpload } from "../../services/usePDFUpload";
import { toast } from "react-toastify";

export default function UploadPDFModal({ isOpen, onClose, label }) {
  const [title, setTitle] = useState("");
  const [batch, setBatch] = useState("");
  const [branch, setBranch] = useState("");
  const [file, setFile] = useState(null);
  const { uploadPDF, loading } = usePDFUpload();

  const handleClose = () => {
  setTitle("");
  setBatch("");
  setBranch("");
  setFile(null);
  onClose(); // Call parent close handler
};

  const handleSubmit = async () => {

    console.log("file sent from modal is :" , file);

    const response = await uploadPDF({ title, batch, branch, file, label });
    handleClose();
    if (response) {
        toast.success(`${label} uploaded Successfully! 🎉`);
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative w-6/10 h-8/10 bg-black shadow shadow-white text-white rounded-lg">

            <div className="w-full h-1/8 text-white flex items-center justify-center">
                {/* Close Button */}
                <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-white text-xl font-bold"
                >
                &times;
                </button>

                <h2 className="text-xl font-semibold flex items-center justify-center">Upload {label}</h2>
                <hr className="ml-4 mr-4"/>
            </div>

            <hr className="ml-4 mr-4"/> 

            <div className="w-full h-7/8 flex items-center justify-center">
                <div className="w-1/2 h-full p-6">

                    <div className="flex gap-3 mb-3 text-white">
                        <div className="flex items-center justify-center">Batch : 
                            <select className="input ml-2 p-2 bg-black text-white border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" value={batch} onChange={(e) => setBatch(e.target.value)}>
                                <option value="">Select Batch</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                            </select>
                        </div>

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

                    <div className="">Title :
                        <input
                            type="text"
                            placeholder="Enter Notice Title here"
                            className="input ml-4 mt-2 p-2 bg-black text-white border hover:border-blue-400 border-white rounded"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <br />

                    {/* Hidden input */}
                    <input
                        type="file"
                        accept="application/pdf"
                        id="noticeFile"
                        className="hidden"
                        onChange={(e) => setFile(e.target.files[0])}
                    />

                    {/* Custom trigger */}
                    <label
                        htmlFor="noticeFile"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition duration-200 ease-in-out mb-4"
                    >
                    📁 Select PDF Notice
                    </label>

                    {/* File name preview */}
                            {file && (
                            <p className="text-sm text-gray-300 mb-4 ml-1">
                                Selected: <span className="font-medium text-green-500">{file.name}</span>
                            </p>
                            )}
                            {console.log(file)}

                </div>
                <div className="w-1/2 h-full p-6 flex-col items-center justify-center">
                    <div className="w-9/10 h-9/10">
                        {file && (
                            <iframe
                                title="Preview"
                                src={URL.createObjectURL(file)}
                                className="w-full h-full border rounded-md mb-3"
                            />
                        )}
                    </div>
                    <div className="w-9/10 h-1/10 font-semibold flex items-end justify-end">
                        {file && (
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                            >
                        {loading ? "Uploading..." : "Upload"}
                        </button>
                    )}
                    </div>

                </div>
            </div>
      </div>
    </div>
  ) : null;
}
