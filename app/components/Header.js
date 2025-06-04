"use client";
import React, { useState } from "react";
import Image from "next/image";
import profile from "./profile.jpg";
import { Menu, X } from "lucide-react"; // icons for hamburger menu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownload = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <header className="p-4 border-b border-gray-300 shadow-lg bg-white">
      <div className="flex justify-between items-center">
        {/* Left: Profile */}
        <div className="flex items-center">
          <Image
            className="h-10 w-10 rounded-full ring-2 ring-white"
            src={profile}
            alt="Vishwanath"
          />
          <span className="ml-2 text-lg font-semibold text-gray-600">
            Vishwanath&apos;s Portfolio
          </span>
        </div>

        {/* Right: Navigation */}
        <nav className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-800">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-800">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-800">
            Contact
          </a>
          <span
            onClick={handleDownload}
            className="hover:text-gray-800 cursor-pointer"
          >
            Download
          </span>
        </nav>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile: Dropdown Menu */}
      {isMenuOpen && (
        <div className="flex flex-col mt-2 space-y-2 md:hidden">
          <a href="#home" className="hover:text-gray-800">
            Home
          </a>
          <a href="#projects" className="hover:text-gray-800">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-800">
            Contact
          </a>
          <span
            onClick={handleDownload}
            className="hover:text-gray-800 cursor-pointer"
          >
            Download
          </span>
        </div>
      )}
    </header>
  );
}

export default Header;
