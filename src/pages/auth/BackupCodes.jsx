import { useState } from "react";
import api from "../../services/api";
import Button from "../../components/forms/Button";
import { useNavigate } from "react-router-dom";

export default function BackupCodes() {
  const navigate = useNavigate();
  const [codes, setCodes] = useState([]);
  const [status, setStatus] = useState("");
  const [user, setUser] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateCodes = async () => {
    setIsGenerating(true);
    try {
      const res = await api.post("/auth/backup/generate");
      console.log(res.data);
      setCodes(res.data.data.codes);
      setUser(res.data.data.userId);
      setStatus("Backup codes generated successfully");
    } catch (err) {
      console.error(err);
      setStatus("Failed to generate backup codes");
    } finally {
      setIsGenerating(false);
    }
  };

  const verifyCode = async () => {
    const code = codes[0] || "";
    navigate("/backup-codes/verify", { state: { code, user } });
  };

  const downloadCodes = () => {
    const text = codes.join("\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "backup-codes.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyCodes = () => {
    const text = codes.join("\n");
    navigator.clipboard.writeText(text).then(() => {
      setStatus("Codes copied to clipboard!");
      setTimeout(() => setStatus(""), 3000);
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
        <div className="py-6 px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-purple-600/20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 bg-rose-500/20 rounded-full"></div>
          
          <div className="relative z-10">
            <h1 className="text-center text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
              Backup Codes
            </h1>
            <p className="text-center text-gray-400 mt-2">
              Secure access when you can't use your authenticator app
            </p>
            
            {status && (
              <div className={`mt-6 p-3 rounded-lg flex items-center border ${
                status.includes("Failed") 
                  ? "bg-rose-900/50 text-rose-200 border-rose-700/50" 
                  : "bg-green-900/50 text-green-200 border-green-700/50"
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 mr-2 flex-shrink-0 ${status.includes("Failed") ? "text-rose-400" : "text-green-400"}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  {status.includes("Failed") ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  )}
                </svg>
                <span>{status}</span>
              </div>
            )}
            
            <div className="mt-6">
              <p className="text-gray-300 mb-4">
                Use these one-time backup codes if you lose access to your authenticator app.
                Each code can be used only once.
              </p>
              
              <button
                onClick={generateCodes}
                disabled={isGenerating}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating Codes...
                  </>
                ) : (
                  <span className="relative z-10">Generate Backup Codes</span>
                )}
              </button>
            </div>
            
            {codes.length > 0 && (
              <div className="mt-6">
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-3">
                    <h2 className="text-lg font-medium text-gray-300">Your Backup Codes</h2>
                    <div className="flex space-x-2">
                      <button
                        onClick={copyCodes}
                        className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        title="Copy all codes"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                      </button>
                      <button
                        onClick={downloadCodes}
                        className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                        title="Download codes as text file"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {codes.map((c, i) => (
                      <div key={i} className="font-mono text-sm bg-gray-900/50 p-2 rounded text-center text-gray-200">
                        {c}
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-3 text-xs text-gray-500 text-center">
                    Store these codes securely. Each code can be used only once.
                  </p>
                </div>
                
                <div className="mt-6 flex space-x-3">
                  <button
                    onClick={verifyCode}
                    className="flex-1 py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
                  >
                    Use Backup Code
                  </button>
                </div>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-gray-700">
              <p className="text-center text-sm text-gray-500">
                <button 
                  onClick={() => navigate(-1)}
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Go back
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}