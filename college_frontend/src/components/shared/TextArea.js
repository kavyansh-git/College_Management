
const Textarea = ({
  label = "Address",
  placeholder = "Enter address here...",
  name = "address",
  value,
  onChange,
  required = false,
  rows = 4,
  labelClassName,
  className
}) => {
  return (
    <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
      <label htmlFor={name} className={`font-semibold ${labelClassName}`}>
        {label}{required && <span className="text-red-500"> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="p-2 bg-transparent border-2 border-white rounded placeholder-gray-400 hover:border-gray-400 focus:border-gray-400 focus:outline-none"
      ></textarea>
    </div>
  );
};

export default Textarea;
