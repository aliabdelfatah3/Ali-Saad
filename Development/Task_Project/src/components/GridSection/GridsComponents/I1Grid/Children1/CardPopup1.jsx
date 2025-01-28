import React from "react";

// CardPopup1 component: A modal-like popup with customizable content (children) and a close button
function CardPopup1({ children, onClose }) {
  return (
    // Modal background overlay (fixed positioning, centered content, and semi-transparent background)
    <div className="fixed inset-0 flex items-center justify-center z-20 bg-black bg-opacity-50">
      {/* Popup content box with padding, custom background color, and a fixed size */}
      <div className="bg-[#F8F8F8] w-[311px] h-[447px] p-4 text-right">
        {/* Close button */}
        <button onClick={onClose}>
          {/* SVG icon representing a close (X) icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 17"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            {/* Path for the 'X' shape indicating the close button */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 13L13 4M4 4l9 9" // Diagonal lines for 'X'
            />
          </svg>
        </button>
        {/* Render children passed to the component inside the popup */}
        {children}
      </div>
    </div>
  );
}

export default CardPopup1;
