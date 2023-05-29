import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400 to-indigo-500 text-white font-mont h-[50px]">
      <ul className="flex space-x-12 pl-3 pt-3">
        <li className="relative">
          <a href="#" onClick={toggleDropdown}>
            dropdown
          </a>
          {dropdownOpen && (
            <ul className="animate-dropdown-appear absolute left-2 mt-1 bg-gray-500 border border-teal-400 rounded-2xl shadow-xl">
              <li>
                <a href="#" className="block px-4 py-2">projects</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2">skills</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2">cv</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
