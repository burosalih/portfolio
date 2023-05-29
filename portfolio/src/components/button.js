import React from "react";
import { MdFileDownload } from 'react-icons/md';

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className="font-mont flex flex-row bg-gradient-to-r from-teal-400 to-indigo-500 hover:from-yellow-500 hover:to-pink-500 hover:scale-[1.1] duration-300 text-white rounded-lg p-2 shadow-xl">
            <MdFileDownload className="mr-2 my-1" />
            {text}
        </button>
    );
};

export default Button;
