import React from "react";

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="font-mont bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-pink-500 hover:to-yellow-500 hover:scale-[1.1] duration-300 text-white rounded-lg p-2 shadow-xl">
            {text}
        </button>
    );
};

export default Button;