"use client"
import React, { useState } from 'react';
import { FiMenu, FiX, FiHome, FiFilePlus, FiUsers, FiList } from 'react-icons/fi';

const SideBar = ({ onPanelSelect }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={`fixed inset-y-0 z-10 flex w-80 transition-transform duration-300 bg-gray-800 shadow ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col flex-1 p-4 font-poppins">
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="p-1 mt-20 text-white"
          >
            <FiX className="w-6 h-6" />
          </button>
          <nav className="mt-8">
            <a
              className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white mb-6"
              href="#"
            >
              <FiHome className="w-6 h-6" />
              <span>Home</span>
            </a>
            <a
            className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white mb-6"
            onClick={() => onPanelSelect('addPost')}
          >
              <FiFilePlus className="w-6 h-6" />
              <span>Add Post</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white mb-6"
              onClick={() => onPanelSelect('addUser')}

            >
              <FiUsers className="w-6 h-6" />
              <span>Add Users</span>
            </a>
            <a
              className="flex items-center space-x-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
href='/getPosts'
            >
              <FiList className="w-6 h-6" />
              <span>Posts</span>
            </a>
          </nav>
        </div>
      </div>
      <main className="flex-1">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 mt-7 ml-4 text-white bg-black rounded-lg"
        >
          <FiMenu className="w-6 h-6" />
        </button>
      </main>
    </div>
  );
};

export default SideBar;
