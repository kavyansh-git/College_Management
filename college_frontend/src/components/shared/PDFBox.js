import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import PDFCard from "./viewPDFCard";
import PDFModal from "./viewPDFModal";

export default function PDFBox({ batch, branch, label}) {

  const [pdfs, setPDFs] = useState([]);
  const [selectedPDF, setSelectedPDF] = useState(null);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await axios.get(`/view/${label}?batch=${batch}&branch=${branch}`); // adjust endpoint if needed
        setPDFs(response.data);
      } catch (error) {
        console.error("Failed to fetch pdfs:", error.response?.data || error.message);
      }
    };

    fetchPDFs();
  }, [ batch, branch, label ]);

  return (

    <div className="w-full flex flex-col">
      {pdfs.map((pdf) => (
        <PDFCard key={pdf._id} pdf={pdf} onClick={() => setSelectedPDF(pdf)} />
      ))}
      
      {selectedPDF && (
        <PDFModal pdf={selectedPDF} onClose={() => setSelectedPDF(null)} />
      )}
    </div>    
  );
}
