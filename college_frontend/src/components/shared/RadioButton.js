import React from 'react';

const RadioButtonGroup = ({ label, options, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col space-y-5">
      {label && <label className="font-semibold text-white">{label}</label>}
      <div className="flex flex-wrap gap-4">
        {options.map((option) => (
          <label key={option} className="inline-flex items-center cursor-pointer">
            <input
              type="radio"
              name={label}
              value={option}
              checked={selectedValue === option}
              onChange={(e) => onChange(e.target.value)}
              className="form-radio text-blue-500 focus:ring-blue-500 h-4 w-4"
            />
            <span className="ml-2 text-white">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonGroup;
