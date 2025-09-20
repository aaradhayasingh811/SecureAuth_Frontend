import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 border-t border-gray-700 py-6 text-center mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center justify-center md:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm text-gray-400">
              © {new Date().getFullYear()} SecureAuth. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center justify-center md:justify-end space-x-6">
            <a 
              href="/privacy" 
              className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a 
              href="/terms" 
              className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a 
              href="/support" 
              className="text-sm text-gray-400 hover:text-purple-300 transition-colors duration-200"
            >
              Support
            </a>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-500">
            Built with security and privacy in mind. Your data is always protected.
          </p>
        </div>
      </div>
    </footer>
  );
}