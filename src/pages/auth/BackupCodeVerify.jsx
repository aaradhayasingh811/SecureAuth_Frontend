import React, { useState } from "react";
import InputField from "../../components/forms/InputField";
import Button from "../../components/forms/Button";
import api from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";

export default function BackupCodesVerify() {
  const loc = useLocation();
  console.log(loc);
  const navigate = useNavigate();
  const userId = loc.state?.user || null;
  const [code, setCode] = useState(loc.state?.code || "");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setIsLoading(true);
    
    try {
      const res = await api.post("/auth/mfa/verify", { userId, backupCode: code });
      if (res.data?.ok) {
        navigate("/dashboard");
      } else {
        setErr(res.data?.error?.message || "Invalid backup code");
      }
    } catch (err) {
      setErr(err.response?.data?.error?.message || err.message || "Verification failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
        <div className="py-6 px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-purple-600/20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 bg-rose-500/20 rounded-full"></div>
          
          <div className="relative z-10">
            <h2 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Verify Backup Code
            </h2>
            <p className="text-center text-gray-400 mt-2">
              Enter your one-time backup code to access your account
            </p>
            
            {err && (
              <div className="mt-6 bg-rose-900/50 text-rose-200 p-3 rounded-lg flex items-center border border-rose-700/50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{err}</span>
              </div>
            )}
            
            <form onSubmit={submit} className="mt-6 space-y-5">
              <div>
                <label htmlFor="backupCode" className="block text-sm font-medium text-gray-300 mb-1">
                  Backup Code
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input
                    id="backupCode"
                    name="backupCode"
                    type="text"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="bg-gray-800/50 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent block w-full pl-10 p-3 placeholder-gray-500 transition-all duration-200 text-center font-mono tracking-wider"
                    placeholder="XXXX-XXXX-XXXX"
                    autoComplete="off"
                    autoFocus
                  />
                </div>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  Enter one of your backup codes (each can be used only once)
                </p>
              </div>

              <button
                type="submit"
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
                    Verifying...
                  </>
                ) : (
                  <span className="relative z-10">Verify & Continue</span>
                )}
              </button>
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-center">
                <button 
                  onClick={() => navigate(-1)}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 inline-flex items-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Go back to backup codes
                </button>
              </div>
              
              <div className="text-center mt-3">
                <button 
                  onClick={() => navigate("/login")}
                  className="text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm"
                >
                  Return to login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}