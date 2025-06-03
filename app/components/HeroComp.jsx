"use client";
import React, { use } from 'react';
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub, FaBook } from 'react-icons/fa';



const SocialSidebar = () => (
    <div className="fixed top-1/3 left-4 flex flex-col gap-4">
        <a href="https://www.linkedin.com/in/vishwanathb/" className="text-gray-700 hover:text-black"><FaLinkedin size={24} /></a>
        {/* <a href="#" className="text-gray-700 hover:text-black"><FaTwitter size={24} /></a> */}
        {/* <a href="#" className="text-gray-700 hover:text-black"><FaYoutube size={24} /></a> */}
        <a href="https://github.com/bommojuvishu" className="text-gray-700 hover:text-black"><FaGithub size={24} /></a>
        {/* <a href="#" className="text-gray-700 hover:text-black"><FaBook size={24} /></a> */}
    </div>
);

const Hero = () => (
    <section className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-r from-gray-100 to-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">HEY, I'M VISHWANATH </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-700 mb-8">
            A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.
        </p>
        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow">
            PROJECTS
        </a>
    </section>
);

const ChatWidget = () => (
    <div className="fixed bottom-6 right-6 flex items-center gap-3">
        <button className="bg-white shadow px-4 py-2 rounded-full flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
            Chat with me
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg">
            💬
        </button>
    </div>
);

const HeroComp = () => (
    <div className="font-sans">
        <SocialSidebar />
        <Hero />
        {/* <ChatWidget /> */}
    </div>
);

export default HeroComp;
