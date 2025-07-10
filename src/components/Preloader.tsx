import React from "react";

const Preloader = () => {
  return (
    <div id="preloader" className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 transition-opacity duration-500">
      <span className="relative flex h-16 w-16 mb-6">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent animate-spin"></span>
      </span>
      <span className="text-lg font-semibold text-white text-center px-4">Loading...<br />Please be patient.</span>
    </div>
  );
};

export default Preloader;
