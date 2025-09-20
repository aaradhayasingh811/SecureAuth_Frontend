import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      nav("/login");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <nav className="bg-gradient-to-br from-gray-900 to-gray-800 border-b border-gray-700 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link 
            to={user ? "/dashboard" : "/"} 
            className="flex items-center space-x-2 group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-900/30 group-hover:bg-purple-900/50 transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              SecureAuth
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {!user ? (
              <>
                <Link 
                  to="/login" 
                  className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="bg-gradient-to-r from-purple-600 to-rose-600 text-white px-4 py-2 rounded-md hover:from-purple-700 hover:to-rose-700 transition-all duration-200 shadow-lg hover:shadow-purple-500/20"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <div className="hidden md:flex items-center space-x-6">
                  <Link 
                    to="/dashboard" 
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50 flex items-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                  <Link 
                    to="/dashboard/security" 
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50 flex items-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    <span>Security</span>
                  </Link>
                  <Link 
                    to="/dashboard/sessions" 
                    className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50 flex items-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Sessions</span>
                  </Link>
                </div>
                
                {/* Mobile menu button (simplified) */}
                <div className="md:hidden">
                  <button className="text-gray-300 hover:text-white p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                  <div className="text-sm text-gray-400 border-r border-gray-700 pr-4">
                    Welcome, <span className="text-purple-300">{user.email}</span>
                  </div>
                  <button 
                    onClick={handleLogout} 
                    className="bg-gradient-to-r from-rose-600 to-rose-700 text-white px-4 py-2 rounded-md hover:from-rose-700 hover:to-rose-800 transition-all duration-200 shadow-lg hover:shadow-rose-500/20 flex items-center space-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
                    </svg>
                    <span>Sign Out</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu (simplified version) */}
        {user && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-700">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/dashboard" 
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50"
              >
                Dashboard
              </Link>
              <Link 
                to="/dashboard/security" 
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50"
              >
                Security
              </Link>
              <Link 
                to="/dashboard/sessions" 
                className="text-gray-300 hover:text-purple-300 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50"
              >
                Sessions
              </Link>
              <div className="pt-2 border-t border-gray-700">
                <div className="text-sm text-gray-400 px-3 py-2">
                  Signed in as: <span className="text-purple-300">{user.email}</span>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="w-full text-left text-rose-300 hover:text-rose-200 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-gray-700/50"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}