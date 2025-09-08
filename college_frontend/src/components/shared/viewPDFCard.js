export default function PDFCard({ pdf, onClick }) {
  return (
    <div
      onClick={onClick}
      className="w-full p-3 text-blue-400 border-b border-dashed border-gray-400 backdrop-blur-sm overflow-hidden cursor-pointer hover:font-semibold hover:bg-red-800 hover:bg-opacity-80 hover:text-white hover:overflow-hidden"
    >
      {pdf.title}
    </div>
  );
}
