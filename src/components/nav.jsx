import React, { useState } from "react";
import "../styles/home.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav bg-gray-900">
      <div className="nav-bar flex justify-between text-xl p-4 mt-2">
        <p>
          <a href="/">DRAKE</a>
        </p>

        {/* Desktop Navigation */}
        <ul className="nav-links hidden md:flex gap-10">
          <li className="transition hover:text-gray-700">
            <a href="/pricing">pricing</a>
          </li>
          <li className="transition hover:text-gray-700">contact</li>
          <li className="transition hover:text-gray-700">FAQ</li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="nav-links flex flex-col bg-gray-800 text-lg">
          <li className="transition hover:text-gray-700 hover:bg-gray-700 px-4 py-3 border-b border-gray-600">
            <a href="/pricing">pricing</a>
          </li>
          <li className="transition hover:text-gray-700 hover:bg-gray-700 px-4 py-3 border-b border-gray-600">
            contact
          </li>
          <li className="transition hover:text-gray-700 hover:bg-gray-700 px-4 py-3">
            FAQ
          </li>
        </ul>
      </div>
    </div>
  );
}
