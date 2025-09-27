import React from "react";




const Button = ({ label="", className = "", onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
