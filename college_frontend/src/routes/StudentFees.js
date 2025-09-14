import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import FeeDetailCard from "../components/shared/FeeDetailCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "../utils/axios";
import "../App.css";
import FeePayCard from "../components/shared/FeePayCard";

const StudentFeesComponent = () => {

  const navigate = useNavigate();
  const [feesAdded, setFeesAdded] = useState([]);
  const feeDetails = [
  { id: "tution", label: "Tution fees", total: "84,391", remaining: "24,821" },
  { id: "other", label: "Registration, ERP, Medical & Student Welfare Charges", total: "41,220", remaining: "41,220" },
  { id: "bus", label: "Bus fees", total: "18,000", remaining: "9,000" },
  { id: "security", label: "Security deposit (One Time)", total: "10,000", remaining: "10,000" },
  // Add more as needed
  ];

  const amountToBePaid = feesAdded.reduce((acc, fee) => acc + fee.amount, 0);

  const grandTotal = feeDetails.reduce((acc, fee) => {
    const numericTotal = parseInt(fee.total.replace(/,/g, ""), 10);
    return acc + numericTotal;
  }, 0);

  const grandRemaining = feeDetails.reduce((acc, fee) => {
    const numericTotal = parseInt(fee.remaining.replace(/,/g, ""), 10);
    return acc + numericTotal;
  }, 0);

  const handlePayment = async () => {

    const { data: order } = await axios.post("/payment/create-order", { amount: amountToBePaid });

    const options = {
      key: "rzp_test_RFOgAlivkXdCZ3",
      amount: order.amount,
      currency: order.currency,
      name: "SRMS College ERP",
      description: "College Fee",
      order_id: order.id,
      handler: async (response) => {
        const verifyRes = await axios.post("/payment/verify-payment", response);
        if (verifyRes.data.success) {
          toast.success("Payment successful!");
          navigate("/StudentDashboard");
        } else {
          toast.error("Payment verification failed.");
        }
      },
      prefill: {
        name: "Kavyansh",
        email: "kavyansh@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on("payment.failed", function (response) {
      console.error("Payment failed:", response.error);
      toast.error("Payment failed. Please try again.");
    });
    rzp.open();
};

  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">
        {/* first div  */}
        <div className="w-full h-full bg-black bg-opacity-40">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Pay fees"/>

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-40">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-50 backdrop-blur-sm border border-white rounded-xl">
                  <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                    Fees Details
                  </div>
                  <div className="w-full h-9/10 overflow-auto">

                    <div className="w-full h-1/10 border-b border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-semibold flex items-center justify-center">
                        S.No.
                      </div>
                      <div className="w-5/10 h-full border-r border-white pl-5 font-semibold flex items-center justify-center">
                        Fees description
                      </div>
                      <div className="w-1/7 h-full pl-4 border-r border-white font-semibold flex items-center justify-center">
                        Total
                      </div>
                      <div className="w-1/7 h-full border-r border-white font-semibold flex items-center justify-center">
                        Remaining
                      </div>
                      <div className="w-1/7 h-full border-r border-white font-semibold flex items-center justify-center">
                        Installments
                      </div>
                      <div className="w-1/10 h-full border-white font-semibold flex items-center justify-center">
                        Pay
                      </div>
                    </div>

                    <FeeDetailCard 
                        index="1" 
                        id="tution" 
                        label="Tution fees" 
                        total="84,391" 
                        remaining="24,821" 
                        feesAdded={feesAdded} 
                        setFeesAdded={setFeesAdded}
                      />

                      <FeeDetailCard 
                        index="2" 
                        id="other" 
                        label="Registration, ERP, Medical & Student Welfare Charges" 
                        total="41,220" 
                        remaining="41,220" 
                        feesAdded={feesAdded} 
                        setFeesAdded={setFeesAdded}
                      />

                      <FeeDetailCard 
                        index="3" 
                        id="bus" 
                        label="Bus fees" 
                        total="18,000" 
                        remaining="9,000" 
                        feesAdded={feesAdded} 
                        setFeesAdded={setFeesAdded}
                      />

                      <FeeDetailCard 
                        index="4" 
                        id="security" 
                        label="Security deposit (One Time)" 
                        total="10,000" 
                        remaining="10,000" 
                        feesAdded={feesAdded} 
                        setFeesAdded={setFeesAdded}
                      />

                    <div className="w-full h-1/10 border-b-2 border-t border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center"></div>
                      <div className="w-5/10 h-full pl-5 font-semibold flex items-center justify-start">
                        Grand total
                      </div>
                      <div className="w-1/7 h-full pl-4 font-semibold flex items-center justify-center">
                        ₹ {grandTotal.toLocaleString()}
                      </div>
                      <div className="w-1/7 h-full pl-4 font-semibold flex items-center justify-center">
                        ₹ {grandRemaining.toLocaleString()}
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center"></div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center"></div>
                    </div>


                    <div className="w-full h-1/10 border-b border-white flex items-center text-lg justify-center font-medium text-white">                      
                    </div>

                    <div className="w-full h-1/10 bg-white bg-opacity-10 flex items-center justify-center border-b border-white text-white text-xl">
                    Total payable fees
                    </div>

                    <div className="w-full h-1/10 border-b border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-semibold flex items-center justify-center">
                        S.No.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-semibold flex items-center justify-center">
                        Fees description
                      </div>
                      <div className="w-3/10 h-full border-r pl-4 font-semibold flex items-center justify-center">
                        
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        Amount
                      </div>                      
                    </div>

                    {feesAdded.map ((fee, index) => (
                      <FeePayCard key={index} index={index} label={fee.label} amount={fee.amount.toLocaleString()} />
                    ))}

                    <div className="w-full h-1/10 border-t-2 border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">

                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-center">
                          
                      </div>
                      <div className="w-3/10 h-full pr-5 font-semibold flex items-center justify-end">
                        Amount to be paid  
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        ₹ {amountToBePaid.toLocaleString()}
                      </div>
                    </div>

                    <div className="w-full h-1/7 flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">

                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-center">
                          
                      </div>
                      <div className="w-3/10 h-full pr-5 font-thin flex items-center justify-end">
                          
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        <button 
                          className="w-8/10 h-6/10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={amountToBePaid === 0}
                          onClick={handlePayment}
                        >
                          Proceed to pay
                        </button>
                      </div>                      
                    </div>                                     

                        
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFeesComponent;
