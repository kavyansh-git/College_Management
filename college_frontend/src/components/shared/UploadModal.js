const UploadModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="relative bg-black shadow shadow-white text-white rounded-lg w-[80vw] h-[80vh] p-6 overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-white text-xl font-bold"
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default UploadModal;
