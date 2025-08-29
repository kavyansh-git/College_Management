export default function NoticeModal({ pdf, onClose }) {

  const handleDownload = async () => {
  const response = await fetch(pdf.fileUrl);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${pdf.title}.pdf`;
  a.click();
  window.URL.revokeObjectURL(url);
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative w-1/2 h-9/10 border border-white rounded-lg shadow shadow-white overflow-hidden flex flex-col justify-between">
        
        {/* Header Section */}
        <div className="w-full h-1/8 backdrop-blur-sm relative">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
          >
            &times;
          </button>
          <div className="w-full h-full bg-white bg-opacity-10 p-4 border-b border-gray-400 flex items-center justify-center">
            <h2 className="text-xl font-bold text-white">{pdf.title}</h2>
          </div>
        </div>

        {/* PDF Preview Section */}
        <div className="w-full h-7/8 backdrop-blur-sm flex items-center justify-center">

          <div className="w-1/2 h-full flex items-center justify-center py-4">
            <div className="w-full h-full">
              <iframe
                src={pdf.fileUrl}
                title="Notice Preview"
                className="w-full h-full border rounded"
              />
            </div>
        </div>
        </div>

        {/* Download Button */}
        <div className="w-full h-1/8 backdrop-blur-sm flex items-start justify-center">
          <div className="w-1/2 flex items-start justify-end">
            <button
              onClick={handleDownload}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 ease-in-out"
            >
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
