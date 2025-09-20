import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/forms/Button";
import { useNavigate } from "react-router-dom";

export default function MFASetup() {
  const navigate = useNavigate();
  const [button, setButton] = useState(false);
  const [otpAuthUrl, setOtpAuthUrl] = useState(null);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const start = async () => {
    setIsLoading(true);
    try {
      const res = await api.post("/auth/mfa/setup");
      if (res.data?.ok) {
        console.log(res.data);
        setOtpAuthUrl(res.data.data.otpAuthUrl);
        setMsg("Scan the QR code with your authenticator app, then verify on the next screen.");
        setUser(res.data.data.userId);
        setButton(true);
      } else {
        setMsg("Failed to start MFA setup");
      }
    } catch (err) {
      setMsg(err.message || "Error setting up MFA");
    } finally {
      setIsLoading(false);
    }
  };

  const verify = async () => {
    setOtpAuthUrl(null);
    navigate("/mfa/verify", { state: { userId: user } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
        <div className="py-8 px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-purple-600/20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 bg-rose-500/20 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Setup Two-Factor Authentication
            </h2>
            <p className="text-center text-gray-400 mt-2">
              Add an extra layer of security to your account
            </p>
            
            {msg && (
              <div className={`mt-6 p-3 rounded-lg flex items-center border ${
                msg.includes("Failed") || msg.includes("Error")
                  ? "bg-rose-900/50 text-rose-200 border-rose-700/50" 
                  : "bg-green-900/50 text-green-200 border-green-700/50"
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 mr-2 flex-shrink-0 ${msg.includes("Failed") || msg.includes("Error") ? "text-rose-400" : "text-green-400"}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  {msg.includes("Failed") || msg.includes("Error") ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  )}
                </svg>
                <span className="text-sm">{msg}</span>
              </div>
            )}
            
            <div className="mt-8">
              {!otpAuthUrl ? (
                <div className="text-center">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-300">Enable 2FA</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Two-factor authentication adds an extra layer of security to your account by requiring more than just a password to sign in.
                    </p>
                  </div>
                  
                  <button
                    onClick={start}
                    disabled={isLoading}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Preparing Setup...
                      </>
                    ) : (
                      <span className="relative z-10">Start MFA Setup</span>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-300 mb-4">Scan QR Code</h3>
                    <div className="inline-block p-4 bg-white rounded-lg">
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(otpAuthUrl)}&size=200x200`} 
                        alt="QR code for MFA setup" 
                        className="w-48 h-48 mx-auto"
                      />
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      Scan this QR code with your authenticator app like Google Authenticator or Authy
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 p-4 rounded-lg mb-6">
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Can't scan the QR code?</h4>
                    <p className="text-xs text-gray-500">
                      You can also manually enter this code in your authenticator app:
                    </p>
                    <div className="mt-2 font-mono text-sm bg-gray-900/50 p-2 rounded text-gray-300 break-all">
                      {otpAuthUrl.split('secret=')[1]?.split('&')[0] || 'Loading...'}
                    </div>
                  </div>
                  
                  <button
                    onClick={verify}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                    <span className="relative z-10">Continue to Verification</span>
                  </button>
                </div>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="text-center">
                <button 
                  onClick={() => navigate(-1)}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 inline-flex items-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}