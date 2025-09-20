import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user } = useAuth();

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
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-900/30 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                  Profile
                </h2>
                <p className="text-center text-gray-400 mt-2">
                  Manage your account information and security settings
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Account Information Card */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    Account Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-gray-400">Email Address</label>
                      <div className="mt-1 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-gray-200">{user?.email || "-"}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-400">User ID</label>
                      <div className="mt-1 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-gray-200 font-mono text-sm">{user?.id || "-"}</p>
                      </div>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium text-gray-400">Account Created</label>
                      <div className="mt-1 p-3 bg-gray-900/50 rounded-lg border border-gray-700">
                        <p className="text-gray-200">
                          {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Security Status Card */}
                <div className="bg-gray-800/50 border border-gray-700 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-300 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-rose-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Security Status
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">MFA Status</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        user?.mfa_enabled 
                          ? "bg-green-900/50 text-green-300 border border-green-700/50" 
                          : "bg-rose-900/50 text-rose-300 border border-rose-700/50"
                      }`}>
                        {user?.mfa_enabled ? (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Enabled
                          </>
                        ) : "Disabled"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Password Strength</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        Strong
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Active Sessions</span>
                      <span className="text-gray-400 text-sm">View all sessions</span>
                    </div>

                    <div className="pt-4 border-t border-gray-700">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Security Recommendations</h4>
                      <ul className="text-xs text-gray-400 space-y-1">
                        {!user?.mfa_enabled && (
                          <li className="flex items-start">
                            <span className="text-rose-400 mr-2">•</span>
                            Enable two-factor authentication for added security
                          </li>
                        )}
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          Review your active sessions regularly
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          Use a unique, strong password
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium text-gray-300 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
                  </svg>
                  Quick Actions
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link 
                    to="/dashboard/security" 
                    className="bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600 p-4 rounded-lg transition-all duration-200 hover:border-purple-500/50 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-900/30 group-hover:bg-purple-900/50 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-purple-300 transition-colors duration-200">Security Settings</span>
                    </div>
                  </Link>

                  <Link 
                    to="/dashboard/sessions" 
                    className="bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600 p-4 rounded-lg transition-all duration-200 hover:border-blue-500/50 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/30 group-hover:bg-blue-900/50 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-300 group-hover:text-blue-300 transition-colors duration-200">Active Sessions</span>
                    </div>
                  </Link>

                  {!user?.mfa_enabled && (
                    <Link 
                      to="/mfa/setup" 
                      className="bg-gray-700/50 hover:bg-gray-700/70 border border-gray-600 p-4 rounded-lg transition-all duration-200 hover:border-green-500/50 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-900/30 group-hover:bg-green-900/50 transition-colors duration-200">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-300 group-hover:text-green-300 transition-colors duration-200">Enable MFA</span>
                      </div>
                    </Link>
                  )}
                </div>
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