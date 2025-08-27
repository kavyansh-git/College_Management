import React, { useState } from 'react';

const Dropdown = ({header , label}) => {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-1 bg-white bg-opacity-20 text-sm font-medium text-white hover:text-green-400"
        >
          {header}
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {isOpen && ( 
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">          
            <div className="py-1" role="menu">                         
              <button className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 w-full text-left">1st Installment</button>
              <button className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 w-full text-left">2nd Installment</button>
              <button className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100 w-full text-left">3rd Installment</button>
              </div>                      
        </div>
      )}
    </div>
  );
};

export default Dropdown;
