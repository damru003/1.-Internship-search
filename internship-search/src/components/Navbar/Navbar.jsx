import React, { useState, useEffect } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaStar, FaAngleRight, FaCaretDown } from "react-icons/fa";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="/">
              <img src="/src/assets/logo.jpg" className="w-36 mt-[-10px]" />
            </a>
          </div>

          <div className="hidden md:flex md:space-x-8 items-center">
            <div className="flex items-center gap-1">
              <a href="#internships" className="text-gray-700 hover:text-cyan-600 font-medium">
                Internships
              </a>
              <span>
                <FaCaretDown />
              </span>
            </div>

            <div className="flex items-center gap-1">
              <a href="#courses" className="text-gray-700 hover:text-cyan-600 font-medium">
                Courses{" "}
                <span className="text-xs bg-orange-500 p-1 rounded-md font-bold text-white">
                  OFFER
                </span>
              </a>
              <span>
                <FaCaretDown />
              </span>
            </div>

            <div className="flex items-center gap-1">
              <a href="#jobs" className="text-gray-700 hover:text-cyan-600 font-medium">
                Jobs
              </a>
              <span>
                <FaCaretDown />
              </span>
            </div>

            <div>
              <a href="#jobs" className="text-gray-700 hover:text-cyan-600 font-medium text-xl">
                <IoChatboxEllipses />
              </a>
            </div>

            <div className="flex items-center gap-1">
              <img src="/src/assets/profile.jpeg" className="w-6 rounded-full" />
              <span>
                <FaCaretDown />
              </span>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-cyan-600"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-200 bg-opacity-100 z-40" onClick={() => setIsOpen(false)} />
      )}

      {/* Sliding Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col">
            <div className="flex items-center p-4 gap-4 bg-blue-50 border-b border-blue-500">
              <div className="text-3xl">
                <img src="/src/assets/IS-logo.jpeg" className="rounded-md w-8" />
              </div>

              <div>
                <div className="flex items-center">
                  <h2 className="font-medium text-sm" style={{ color: "#00A5EC" }}>
                    Download our App
                  </h2>
                  <span style={{ color: "#00A5EC" }} className="mx-3">
                    <FaAngleRight />
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-xs">4.5</h2>
                  <span className="w-4 text-orange-400">
                    <FaStar />
                  </span>
                  <span>|</span>
                  <h2 className="text-xs">1M+ Downloads</h2>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 p-5 border-b border-gray-200">
              <div>
                <img src="/src/assets/profile.jpeg" className="rounded-full w-10" />
              </div>

              <div>
                <h2 className="font-medium">Deepanshu Sharma</h2>
                <h2 className="text-xs text-gray-700">deepanshu30102001@gmail.com</h2>
              </div>
            </div>

            <div className="flex gap-2 items-center border-b border-gray-200">
              <div className="flex gap-2 p-4 items-center">
                <span className="text-yellow-400">
                  <FaStar />
                </span>
                <h2>4.3</h2>
              </div>

              <div className="flex gap-2 items-center">
                <h2 className="text-sm font-medium">Know more</h2>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-5 p-5 font-medium border-b border-gray-200">
              <p>Internships</p>
              <p>Jobs</p>

              <div className="flex justify-between items-center">
                <p className="max-w-60">Placement Guarantee Courses</p>
                <p className="bg-orange-400 text-white px-2 py-1 rounded-md font-bold text-sm whitespace-nowrap">
                  Get Hired
                </p>
              </div>
              <p>Certification Courses</p>
            </div>

            <div className="flex flex-col gap-5 p-5 font-medium border-b border-gray-200">
              <p>My Applications</p>
              <p>My Bookmarks</p>
              <p>Edit Resume</p>
              <p>Edit Preferences</p>
              <div className="flex justify-between">
                <p>More</p>
                <FaCaretDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
