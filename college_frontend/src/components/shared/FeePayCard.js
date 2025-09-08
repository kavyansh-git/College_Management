const FeePayCard = ({index, label, amount}) => {
    return (
        <div className="w-full h-1/10 border-b border-white flex items-center text-lg justify-center font-medium text-white">
                      <div className="w-1/10 h-full border-r border-white font-semibold flex items-center justify-center">
                        {index + 1}.
                      </div>
                      <div className="w-5/10 h-full pl-5 font-semibold flex items-center justify-center">
                        {label}
                      </div>
                      <div className="w-3/10 h-full border-r pl-4 font-semibold flex items-center justify-center">
                        
                      </div>                      
                      <div className="w-1/4 h-full font-semibold flex items-center justify-center">
                        ₹ {amount}
                      </div>                      
                    </div>
    )
}

export default FeePayCard;