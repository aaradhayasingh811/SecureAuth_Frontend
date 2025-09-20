import React from "react";
import { Link } from "react-router-dom";

export default function Security() {
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
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                  Security Settings
                </h2>
                <p className="text-center text-gray-400 mt-2">
                  Enhance your account security with these options
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* MFA Setup Card */}
                <Link 
                  to="/mfa/setup" 
                  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-purple-500/50 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-900/30 group-hover:bg-purple-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-200 group-hover:text-purple-300 transition-colors duration-200">
                        Two-Factor Authentication
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Set up TOTP-based 2FA using an authenticator app
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-purple-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>

                {/* Passkey Setup Card */}
                <Link 
                  to="/webauthn/setup" 
                  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-rose-500/50 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-900/30 group-hover:bg-rose-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17 6c-1.103 0-2 .897-2 2v3H9V8c0-1.103-.897-2-2-2s-2 .897-2 2v10c0 1.103.897 2 2 2s2-.897 2-2v-3h6v3c0 1.103.897 2 2 2s2-.897 2-2V8c0-1.103-.897-2-2-2zM9 15H7v-2h2v2zm8 0h-2v-2h2v2zm1-10.5c0 .276-.224.5-.5.5S17 4.776 17 4.5s.224-.5.5-.5.5.224.5.5z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-200 group-hover:text-rose-300 transition-colors duration-200">
                        Passkey Registration
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Register your device for passwordless authentication
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-rose-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>

                {/* Backup Codes Card */}
                <Link 
                  to="/backup-codes" 
                  className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg transition-all duration-200 hover:border-green-500/50 hover:transform hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-900/30 group-hover:bg-green-900/50 transition-colors duration-200">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-200 group-hover:text-green-300 transition-colors duration-200">
                        Backup Codes
                      </h3>
                      <p className="text-sm text-gray-400 mt-1">
                        Generate one-time backup codes for emergency access
                      </p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-green-400 transition-colors duration-200" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </Link>

                {/* Password Management Card (Placeholder) */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg opacity-70">
                  <div className="flex items-start space-x-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-700/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-400">Password Management</h3>
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
                  Security Recommendations
                </h3>
                <ul className="text-xs text-gray-400 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Enable at least one two-factor authentication method
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Generate and securely store backup codes
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Use passkeys for the most secure and convenient login experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Regularly review your active sessions
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <Link 
                    to="/dashboard" 
                    className="text-purple-400 hover:text-purple-300 transition-colors duration-200 inline-flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}