const PasswordInput = ({label, placeholder, value, setValue}) => {
    return (

        <div className="passwordInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input 
                type="password" 
                placeholder={placeholder} 
                className="p-2 border-2 bg-transparent border-white rounded placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
                id={label}
                onChange={(e)=>{setValue(e.target.value)}}
            />
        </div>
    )
};

export default PasswordInput;