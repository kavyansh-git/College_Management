const TextInput = ({label, placeholder, className, setValue, value, labelClassName}) => {
    return (

        <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
            <label for={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input 
                type="text" 
                placeholder={placeholder} 
                className="p-2 bg-transparent border-2 border-white rounded placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                id={label}
                value={value}
                onChange={(e)=>{setValue(e.target.value) }}                
            />
        </div>
    )
};

export default TextInput;