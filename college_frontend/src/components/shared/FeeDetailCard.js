import { useState } from "react";

const FeeDetailCard = ({index, id, label, total, remaining, feesAdded, setFeesAdded}) => {

    const [tution, setTution] = useState("");
    const [bus, setBus] = useState("");
    const [added, setAdded] = useState(false);
    const [installment, setInstallment] = useState(false);

    const handleAdd = () => {

      const remainingAmount = installment ? (id === "tution" ? tution : bus) : remaining; 
      const numericTotal = parseInt(remainingAmount.replace(/,/g, ""), 10);
      const feeObject = { id, label, amount: numericTotal };

      if (!added) {
        // Add fee to feesAdded
        setFeesAdded((prev) => [...prev, feeObject]);
      } else {
        // Remove fee from feesAdded
        setFeesAdded((prev) => prev.filter((fee) => fee.id !== id));
      }

      setAdded((prev) => !prev); // Toggle button state
    };



    return (
        <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        {index}.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        {label}
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ {total}
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ {remaining}
                      </div>
                      <div className="w-1/7 h-full text-sm flex items-center justify-center">
                        {(id === "tution" || id === "bus") ?                            
                            <div className="w-9/10 h-full flex items-center justify-center">                              
                              {id === "tution" ? 
                                <select 
                                  className="input p-1 bg-black text-gray-400 border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" 
                                  value={tution} 
                                  onChange={(e) => setTution(e.target.value)}
                                  onClick={() => setInstallment(true)}
                                  >
                                    <option value={remaining}>Select</option>
                                    <option value="84,391">Full payment</option>
                                    <option value="59,570">Two Inst.</option>
                                    <option value="24,821">Three Inst.</option>                                
                                </select> :
                                <select 
                                  className="input p-1 bg-black text-gray-400 border hover:text-blue-400 hover:cursor-pointer hover:border-blue-400 border-white rounded" 
                                  value={bus} 
                                  onChange={(e) => setBus(e.target.value)}
                                  onClick={() => setInstallment(true)}
                                  >
                                    <option value={remaining}>Select</option>
                                    <option value="18,000">Full payment</option>
                                    <option value="9,000">Two Inst.</option>                                
                                </select>}
                            </div> : <div>-</div>}
                        
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <button
                          onClick={handleAdd}
                          className={`inline-flex items-center px-1 py-1 rounded-md text-white text-sm font-medium ${
                            added ? 'bg-green-600 hover:bg-green-700 focus:ring-green-500' : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500'
                          }`}
                        >
                          {added ? (
                            <>
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              
                            </>
                          ) : (
                            <>
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                              </svg>
                              
                            </>
                          )}
                        </button>
                      </div>
                    </div>
    )
}

export default FeeDetailCard;