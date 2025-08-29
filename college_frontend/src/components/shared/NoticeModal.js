export default function NoticeModal({ notice, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative w-4/5 h-4/5 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl font-bold"
        >
          &times;
        </button>

        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-blue-700">{notice.title}</h2>
        </div>

        {/* PDF Preview */}
        <div className="p-4 h-full overflow-auto">
          <iframe
            src={notice.fileUrl}
            title="Notice Preview"
            className="w-full h-full border rounded"
          />
        </div>
      </div>
    </div>
  );
}
