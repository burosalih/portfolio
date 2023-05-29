import React, { useState } from 'react';
import '../App.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-400/75 to-indigo-400/75 text-white font-mont h-[50px] fixed w-full top-0 z-50 backdrop-blur-sm">
      <ul className="flex space-x-12 pl-3 pt-3">
        <li className="relative">
          <a href="#" onClick={toggleDropdown}>
            about me
          </a>
          {dropdownOpen && (
            <ul className="animate-dropdown-appear absolute left-2 mt-1 bg-gray-900 border border-teal-400 rounded-2xl shadow-xl">
              <li>
                <a href="#" className="block px-4 py-2 hover:outline outline-teal-300 rounded-2xl">projects</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:outline outline-teal-300 rounded-2xl">skills</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
