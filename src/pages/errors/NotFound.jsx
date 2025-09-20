import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-32 h-32 bg-purple-600/20 rounded-full"></div>
            <div className="absolute bottom-0 right-1/2 transform translate-x-16 translate-y-16 w-24 h-24 bg-rose-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-900/30 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Error Code */}
              <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent mb-4">
                404
              </h1>

              {/* Message */}
              <h2 className="text-2xl font-bold text-gray-300 mb-4">
                Page Not Found
              </h2>
              
              <p className="text-gray-400 mb-8">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, deleted, or never existed.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/"
                  className="flex-1 sm:flex-none flex justify-center items-center py-3 px-6 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                  <span className="relative z-10">Go Home</span>
                </Link>
                
                <button 
                  onClick={() => window.history.back()}
                  className="flex-1 sm:flex-none flex justify-center items-center py-3 px-6 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                >
                  Go Back
                </button>
              </div>

             
            </div>
          </div>
        </div>
      </main>

   
    </div>
  );
}