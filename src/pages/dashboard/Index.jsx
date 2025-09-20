import React from "react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
          <div className="py-8 px-8 relative">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-purple-600/20 rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 bg-rose-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-2">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/30 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                  Dashboard
                </h2>
                <p className="text-center text-gray-400 mt-2">
                  Welcome to your secure control center
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Security Card */}
                <Link 
                  to="/dashboard/security" 
                  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-purple-500/50 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/30 group-hover:bg-purple-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-200 group-hover:text-purple-300 transition-colors duration-200">
                        Security Settings
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Manage MFA, passkeys, and security preferences
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>

                {/* Sessions Card */}
                <Link 
                  to="/dashboard/sessions" 
                  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-rose-500/50 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-900/30 group-hover:bg-rose-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-200 group-hover:text-rose-300 transition-colors duration-200">
                        Active Sessions
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        View and manage your logged-in devices
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-rose-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>

                {/* Profile Card (Placeholder) */}
               <Link 
  to="/profile" 
  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-rose-500/50 hover:transform hover:scale-105 group"
>
  <div className="flex items-start space-x-4">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-900/30 group-hover:bg-rose-900/50 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="flex-1">
      <h3 className="font-medium text-gray-200 group-hover:text-rose-300 transition-colors duration-200">
        Profile Settings
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        Manage your profile information
      </p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-rose-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  </div>
</Link>


                {/* Notifications Card (Placeholder) */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg opacity-70">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-400">Notifications</h3>
                      <p className="text-sm text-gray-500 mt-1">Coming soon</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                <h3 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Security Status
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Account protected by strong password
                  </div>
                  <div className="flex items-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Add two-factor authentication
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    Last login: Today at {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}