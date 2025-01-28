import React from "react";

function CardPopup7({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      {/* This is the main popup background. It is fixed and covers the whole screen. */}
      <div className="bg-[#F8F8F8] w-[311px] h-[447px] p-4 text-right">
        {/* Popup box itself with a background color and padding */}
        <button onClick={onClose}>
          {/* Button to close the popup */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 17"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 13L13 4M4 4l9 9"
            />
            {/* X icon for closing the popup */}
          </svg>
        </button>
        {children}
        {/* Render children inside the popup */}
      </div>
    </div>
  );
}

export default CardPopup7;
