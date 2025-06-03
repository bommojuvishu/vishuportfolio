"use client";
import React from "react";
import Image from "next/image";
import profile from "./profile.jpg";

function Header() {
  const handleDownload = () => {
    // This will trigger the download of the file located in the public directory
    window.open("/resume.pdf", "_blank"); // Opens in a new tab, then user can download
  };
  return (
    <div className="p-5 border-b border-gray-300 shadow-lg">
      <div className="flex justify-between items-center ">
        <div>
          <div className="text-xl  text-gray-600 ">
            <Image
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white "
              src={profile}
              alt="vishwanath"
            />
            <span className="px-2"> Vishwanath&apos;s Portfolio</span>
          </div>
        </div>
        <div></div>
        <div>
          <span>
            <a href="#home" className="mx-2 hover:text-gray-800">
              Home
            </a>

            <a href="#projects" className="mx-2 hover:text-gray-800">
              Projects
            </a>
            <a href="#contact" className="mx-2 hover:text-gray-800">
              Contact
            </a>
            <a
              className="mx-2 hover:text-gray-800 cursor-pointer"
              onClick={handleDownload}
            >
              Download
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
