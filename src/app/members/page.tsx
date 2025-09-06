'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const Members = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex" 
      style={{ backgroundColor: "#f6f6fe" }}
      >
      {/* SIDEBAR */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-64 shadow-lg transition-transform duration-300 z-40
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        style={{ backgroundColor: "#f6f6fe" }}
        >
        {/* CSS logo inside sidebar */}
        <div className="pt-12 pb-8 px-6 border-b">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/logos/Logo_CSSApply.svg"
              alt="CSS Apply Logo"
              width={120}
              height={40}
              />
          </div>
        </div>

        {/* sidebar links */}
        <nav className="mt-6">
          <div className="space-y-2 px-4">
            {/* schedule */}
            <Link 
              href="/"
              className="group flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
              <div className="w-5 h-5 mr-3 text-gray-500 group-hover:text-[#164e96] transition-all duration-300">
                {/* schedule icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  className="w-5 h-5 transition-all duration-300"
                  >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors duration-300">Interview Schedule</span>
            </Link>

            {/* applications */}
            <Link 
              href="/applications"
              className="group flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
              <div className="w-5 h-5 mr-3 text-gray-500 group-hover:text-[#164e96] transition-all duration-300">
                {/* applications icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  className="w-5 h-5 transition-all duration-300"
                  >
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors duration-300">Committee Applications</span>
            </Link>

            {/* members (active item) */}
            <div className="flex items-center px-4 py-3 text-gray-600 border border-gray-300 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md" style={{ backgroundColor: "#fefefe" }}>
              <div className="w-5 h-5 mr-3 text-[#164e96] transition-colors duration-300">
                {/* members icon */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5 transition-all duration-300"
                  >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors duration-300">Members</span>
            </div>

            {/* staffs */}
            <Link 
              href="/staffs"
              className="group flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
              <div className="w-5 h-5 mr-3 text-gray-500 group-hover:text-[#164e96] transition-all duration-300">
                {/* staffs icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  className="w-5 h-5 transition-all duration-300"
                  >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10,9 9,9 8,9"></polyline>
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors duration-300">Committee Staff</span>
            </Link>

            {/* executive assistants */}
            <Link 
              href="/eas"
              className="group flex items-center px-4 py-3 text-gray-600 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
              >
              <div className="w-5 h-5 mr-3 text-gray-500 group-hover:text-[#164e96] transition-all duration-300">
                {/* executive assistants icon */}
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2" 
                  className="w-5 h-5 transition-all duration-300">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <span className="text-sm text-gray-700 transition-colors duration-300">Executive Assistants</span>
            </Link>
          </div>
        </nav>

        {/* logout button */}
        <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
          <div className="group flex items-center px-4 py-3 text-gray-600 hover:bg-red-50 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md">
            <div className="w-5 h-5 mr-3 text-gray-500 group-hover:text-red-600 transition-all duration-300">
              {/* logout icon */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
                strokeWidth="2" 
                className="w-5 h-5 transition-all duration-300"
                >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16,17 21,12 16,7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </div>
            <span className="text-sm text-gray-700 transition-colors duration-300">Log Out</span>
          </div>
        </div>
      </div>

      {/* to have a dark bg when hamburger menu is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 p-6 md:p-8 pt-16 md:pt-12">
        {/* top bar for mobile */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-sm flex items-center justify-between px-4 py-6 z-20">
          {/* CSS logo */}
          <Image
            src="/assets/logos/Logo_CSSApply.svg"
            alt="CSS Apply Logo"
            width={100}
            height={30}
            />

          {/* hamburger menu button */}
          <button 
            onClick={() => setSidebarOpen(true)} 
            className="text-gray-700 transition-transform duration-300 hover:scale-110"
            >
            {/* hamburger menu icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              strokeWidth={2} 
              stroke="currentColor" 
              className="w-7 h-7 transition-transform duration-300"
              >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
            </svg>
          </button>
        </div>

        {/* PAGE HEADER */}
        <div className="mb-8 mt-12 md:mt-8 text-center md:text-left">
          <h1 
            className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-2 flex items-center justify-center md:justify-start"
            style={{ fontFamily: "var(--font-raleway)" }}
            >
            Members
          </h1>
          <p className="text-sm md:text-base text-gray-600 italic mb-6 md:mb-6">
            View and manage all members of your organization in one place.
          </p>
          <hr className="border-gray-300" />
        </div>

        {/* MAIN SHAPE */}
        <div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 min-h-[calc(100vh-180px)] md:min-h-[calc(100vh-280px)]"
        >
          
          {/* MAIN LOGIC HERE */}

        </div>
      </div>
    </div>
  );
};

export default Members;