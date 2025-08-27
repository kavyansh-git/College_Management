import React, { useState } from 'react';

const AddButton = () => {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    setAdded(prev => !prev); // toggles between true/false
    // Optional: trigger add/remove logic based on `added`
  };

  return (
    <button
      onClick={handleClick}
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
  );
};

export default AddButton;
