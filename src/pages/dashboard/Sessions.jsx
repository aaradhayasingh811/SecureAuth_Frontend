import React, { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../../components/forms/Button";

export default function Sessions() {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [revokingId, setRevokingId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    setIsLoading(true);
    try {
      const res = await api.get("/auth/sessions");
      if (res.data?.ok) {
        const activeSessions = res.data.data.sessions.filter(
          (session) => session.revoked_at === null
        );
        setSessions(activeSessions);
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to load sessions");
    } finally {
      setIsLoading(false);
    }
  };

  const revoke = async (id) => {
    setRevokingId(id);
    try {
      await api.post("/auth/sessions/revoke", { tokenId: id });
      setStatus("Session revoked successfully");
      setTimeout(() => setStatus(""), 3000);
      fetchSessions();
    } catch (err) {
      console.error(err);
      setStatus("Failed to revoke session");
    } finally {
      setRevokingId(null);
    }
  };

  const revokeAllSessions = async () => {
    if (!window.confirm("Are you sure you want to revoke all sessions? This will log you out from all devices except this one.")) {
      return;
    }
    
    try {
      await api.post("/auth/sessions/revoke-all");
      setStatus("All sessions revoked successfully");
      setTimeout(() => setStatus(""), 3000);
      fetchSessions();
    } catch (err) {
      console.error(err);
      setStatus("Failed to revoke sessions");
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getDeviceIcon = (userAgent) => {
    if (!userAgent) return '🌐';
    if (userAgent.includes('Mobile')) return '📱';
    if (userAgent.includes('Tablet')) return '📱';
    if (userAgent.includes('Windows') || userAgent.includes('Macintosh') || userAgent.includes('Linux')) return '💻';
    return '🌐';
  };

  const getBrowserInfo = (userAgent) => {
    if (!userAgent) return 'Unknown Browser';
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Browser';
  };

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
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                  Active Sessions
                </h2>
                <p className="text-center text-gray-400 mt-2">
                  Manage your logged-in devices and sessions
                </p>
              </div>

              {status && (
                <div className={`mb-6 p-3 rounded-lg flex items-center border ${
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

              {/* {sessions.length > 0 && (
                <div className="mb-6 flex justify-end">
                  <button
                    onClick={revokeAllSessions}
                    className="text-sm text-rose-400 hover:text-rose-300 transition-colors duration-200 inline-flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Revoke All Sessions
                  </button>
                </div>
              )} */}

              {isLoading ? (
                <div className="flex justify-center items-center py-24">
                  <svg className="animate-spin h-8 w-8 text-purple-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : sessions.length === 0 ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-900/30 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-300">No active sessions</h3>
                  <p className="mt-2 text-sm text-gray-500">You don't have any active sessions at the moment.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {sessions.map((s) => (
                    <div
                      key={s.id}
                      className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg transition-all duration-200 hover:border-purple-500/30"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <div className="text-2xl mt-1">
                            {getDeviceIcon(s.ua)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-medium text-gray-200">
                                {getBrowserInfo(s.ua)} • {s.device_id || "Unknown Device"}
                              </h3>
                              {s.current && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900/50 text-green-300 border border-green-700/50">
                                  Current Session
                                </span>
                              )}
                            </div>
                            {s.ua && (
                              <p className="text-sm text-gray-400 mt-1 truncate max-w-md">{s.ua}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-4 mt-2">
                              {s.ip && (
                                <span className="text-xs text-gray-500">IP: {s.ip}</span>
                              )}
                              {s.last_active && (
                                <span className="text-xs text-gray-500">Last active: {formatDate(s.last_active)}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        {!s.current && (
                          <button
                            onClick={() => revoke(s.id)}
                            disabled={revokingId === s.id}
                            className="text-rose-400 hover:text-rose-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            title="Revoke session"
                          >
                            {revokingId === s.id ? (
                              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-700">
                <div className="text-center">
                  <p className="text-sm text-gray-500">
                    For security, review your active sessions regularly and revoke any you don't recognize.
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a 
                  href="/dashboard" 
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-200 inline-flex items-center text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}