import React from "react";

function CardPopup3({ children, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      {/* Popup background with overlay */}
      <div className="bg-[#F8F8F8] w-[311px] h-[447px] p-4 text-right">
        {/* Close button */}
        <button onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 17"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            {/* Close icon (X) */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 13L13 4M4 4l9 9"
            />
          </svg>
        </button>
        {/* This renders any children passed to the component */}
        {children}
      </div>
    </div>
  );
}

export default CardPopup3;
