import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setResourcesOpen(false);
  };

  const toggleResources = () => {
    setResourcesOpen(!resourcesOpen);
  };

  return (
    <nav className="bg-transparent bg-opacity-70 py-4 px-6 md:px-12 flex items-center justify-between w-full fixed top-0 z-50 backdrop-blur-lg ">
      <div className="flex items-center gap-1 text-white text-lg font-bold">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M19.3333 0.666748V6.88897L13.1111 13.1112V6.88897H6.88885V10.9969C6.88885 12.1649 7.83514 13.1112 9.00311 13.1112H13.1111L6.88885 19.3334C3.45237 19.3334 0.666626 16.5477 0.666626 13.1112V0.666748H19.3333Z"
            fill="white"
          ></path>
          <path
            d="M19.3333 13.1112L13.1111 13.1112L13.1111 19.3334H19.3333V13.1112Z"
            fill="white"
          ></path>
        </svg>
        <p className="text-xl font-semibold">Quest</p>
      </div>
      <div className="flex items-center space-x-6 md:space-x-8 ml-24">
        <ul className="hidden md:flex space-x-6 text-white">
          <li className="cursor-pointer">Playbook</li>
          <li className="relative cursor-pointer group">
            <div
              className="cursor-pointer"
              onClick={toggleResources}
              onBlur={() => setResourcesOpen(false)}
            >
              Resources
              {resourcesOpen && (
                <ul className="absolute left-0 top-full bg-gray-800 text-white w-48 mt-2 shadow-lg rounded-md space-y-0">
                  <li className="hover:bg-gray-700 px-3 py-2">Docs</li>
                  <li className="hover:bg-gray-700 px-3 py-2">Newsletter</li>
                  <li className="hover:bg-gray-700 px-3 py-2">
                    Join Quest Club
                  </li>
                  <li className="hover:bg-gray-700 px-3 py-2">
                    UI Component Figma
                  </li>
                </ul>
              )}
            </div>
          </li>
          <li className="cursor-pointer">Blogs</li>
        </ul>
        <div className="md:hidden ml-auto">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <FiMenu className="w-8 h-8 absolute right-5 top-3" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="hidden md:block py-2 px-4 rounded transition duration-300 text-white font-semibold text-sm border border-[#8C43EC] cursor-pointer">
          Get Started
        </button>
        <button className="hidden md:block bg-gradient-to-left from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300">
          Book Demo
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 text-white py-3 shadow-lg border-t-2 border-gray-700 ">
          <ul className="flex flex-col items-center justify-center space-y-3">
            <li className="cursor-pointer">Playbook</li>
            <li className="relative cursor-pointer group">
              <div
                className="cursor-pointer"
                onClick={toggleResources}
                onBlur={() => setResourcesOpen(false)}
              >
                Resources
                {resourcesOpen && (
                  <ul className="absolute left-0 top-full bg-gray-700 text-white w-48 mt-2 shadow-lg rounded-md text-md">
                    <li className="hover:bg-gray-600 px-3 py-1">Docs</li>
                    <li className="hover:bg-gray-600 px-3 py-1">Newsletter</li>
                    <li className="hover:bg-gray-600 px-3 py-1">
                      Join Quest Club
                    </li>
                    <li className="hover:bg-gray-600 px-3 py-2">
                      UI Component Figma
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li className="cursor-pointer">Blogs</li>
            <button className="py-2 px-4 rounded transition duration-300 text-white font-semibold text-sm border border-[#8C43EC] cursor-pointer">
              Get Started
            </button>
            <button className="bg-gradient-to-left from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300">
              Book Demo
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
