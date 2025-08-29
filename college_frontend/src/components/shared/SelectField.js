const SelectField = ({
  id,
  label,
  value,
  onChange,
  options = [],
  required = false,
  disabled = false,
  placeholder,
}) =>  {
  const displayLabel = label || id;
  const defaultPlaceholder = placeholder || `Select ${displayLabel}`;

  return (
    <div className="w-full flex flex-col text-white">
      {label && (
        <label htmlFor={id} className="font-semibold mb-2">
          {displayLabel}{required && <span className="ml-1">* </span>}

        </label>
      )}
      <select
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`p-2 px-4 bg-transparent text-gray-400 border-2 border-white rounded ${
                  disabled ? "opacity-50 cursor-not-allowed" : "hover:text-blue-400 hover:border-gray-400 cursor-pointer"
                  } ${value === "" ? "text-gray-400" : "text-white"}`}
      >
        <option value="" className="bg-black">{defaultPlaceholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-black">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
