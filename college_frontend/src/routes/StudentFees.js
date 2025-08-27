import Dropdown from "../components/shared/Dropdown";
import AddButton from "../components/shared/AddButton";
import Header from "../components/shared/Header";
import StudentSidebar from "../components/shared/StudentSidebar";
import "../App.css";

const StudentFeesComponent = () => {
  return (
    // parent div of all divs
    <div className="h-screen w-screen" class="background">
      <div className="w-full h-full flex items-center justify-center">
        {/* first div  */}
        <div className="w-full h-full bg-black bg-opacity-60">
          <Header />
          
          <div className="w-full h-4/5 flex items-center justify-start">
            <StudentSidebar curActiveScreen="Pay fees"/>

            <div className="w-6/7 h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-70">
                <div className="w-9/10 h-9/10 bg-black bg-opacity-30 border border-white rounded-xl">
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
                        Total fees
                      </div>
                      <div className="w-1/7 h-full border-r border-white font-semibold flex items-center justify-center">
                        Remaining fees
                      </div>
                      <div className="w-1/7 h-full border-r border-white font-semibold flex items-center justify-center">
                        Installments
                      </div>
                      <div className="w-1/10 h-full border-white font-semibold flex items-center justify-center">
                        Pay
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        1.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Tution fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ 99,282
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ 49,282
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        <Dropdown header = "Select" label = "tution" />
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        2.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Medical fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        Total fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        3.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Student welfare fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        Total fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        4.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Bus fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ 17,000
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ 8,500
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        <Dropdown header = "Select" label = "bus"/>
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        5.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Security deposit
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        ₹ 10,000
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        6.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Other fees
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/7 h-full pl-4 font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/7 h-full font-thin flex items-center justify-center">
                        -
                      </div>
                      <div className="w-1/10 h-full font-thin flex items-center justify-center">
                        <AddButton />
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-b-2 border-t border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center"></div>
                      <div className="w-5/10 h-full pl-5 font-semibold flex items-center justify-start">
                        Grand total
                      </div>
                      <div className="w-1/7 h-full pl-4 font-semibold flex items-center justify-center">
                        ₹ 1,26,282
                      </div>
                      <div className="w-1/7 h-full pl-4 font-semibold flex items-center justify-center">
                        ₹ 57,782
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

                    <div className="w-full h-1/10 border-b border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        1.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Tution fees
                      </div>
                      <div className="w-3/10 h-full border-r pl-4 font-thin flex items-center justify-center">
                        
                      </div>                      
                      <div className="w-1/4 h-full font-thin flex items-center justify-center">
                        ₹ 49,282
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-dashed border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-thin flex items-center justify-center">
                        2.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-start">
                        Bus fees
                      </div>
                      <div className="w-3/10 h-full border-r pl-4 font-thin flex items-center justify-center">
                        
                      </div>                      
                      <div className="w-1/4 h-full font-thin flex items-center justify-center">
                        ₹ 8,500
                      </div>
                    </div>

                    <div className="w-full h-1/10 border-t-2 border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center"></div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-center">
                          
                      </div>
                      <div className="w-3/10 h-full pr-5 font-semibold flex items-center justify-end">
                        Amount to be paid  
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        ₹ 57,782
                      </div>
                    </div>

                    <div className="w-full h-1/7 flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full font-thin flex items-center justify-center"></div>
                      <div className="w-5/10 h-full pl-5 font-thin flex items-center justify-center">
                          
                      </div>
                      <div className="w-3/10 h-full pr-5 font-thin flex items-center justify-end">
                          
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        <div className="w-8/10 h-6/10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 cursor-pointer">
                          Proceed to pay
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
    </div>
  );
};

export default StudentFeesComponent;
