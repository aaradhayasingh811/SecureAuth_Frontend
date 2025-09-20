// import React, { useState } from "react";
// import api from "../../services/api";
// import Button from "../../components/forms/Button";

// function base64urlToUint8Array(base64url) {
//   const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
//   const padLength = (4 - (base64.length % 4)) % 4;
//   const padded = base64 + "=".repeat(padLength);
//   const binary = atob(padded);
//   const bytes = new Uint8Array(binary.length);
//   for (let i = 0; i < binary.length; i++) {
//     bytes[i] = binary.charCodeAt(i);
//   }
//   return bytes;
// }

// function uint8ArrayToBase64url(buffer) {
//   const binary = String.fromCharCode(...new Uint8Array(buffer));
//   return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
// }

// export default function WebAuthnLogin() {
//   const [status, setStatus] = useState("");

//   const login = async () => {
//     try {
//       setStatus("Requesting login options...");
//       const res = await api.post("/auth/webauthn/login-options");
//       const options = res.data.data;

//       options.challenge = base64urlToUint8Array(options.challenge);
//       options.allowCredentials = options.allowCredentials.map(c => ({
//         ...c,
//         id: base64urlToUint8Array(c.id)
//       }));

//       const cred = await navigator.credentials.get({ publicKey: options });

//       const payload = {
//         id: cred.id,
//         rawId: uint8ArrayToBase64url(cred.rawId),
//         response: {
//           clientDataJSON: uint8ArrayToBase64url(cred.response.clientDataJSON),
//           authenticatorData: uint8ArrayToBase64url(cred.response.authenticatorData),
//           signature: uint8ArrayToBase64url(cred.response.signature),
//           userHandle: cred.response.userHandle
//             ? uint8ArrayToBase64url(cred.response.userHandle)
//             : null,
//         },
//         type: cred.type,
//       };

//       await api.post("/auth/webauthn/login", payload);
//       setStatus("Logged in successfully.");
//     } catch (err) {
//       console.error(err);
//       setStatus("Login failed.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white shadow p-6 rounded">
//       <h2 className="text-xl font-bold mb-4">Login with Passkey</h2>
//       <Button onClick={login}>Login</Button>
//       <div className="mt-3 text-sm">{status}</div>
//     </div>
//   );
// }

import React, { useState } from "react";
import api from "../../services/api";
import Button from "../../components/forms/Button";

function base64urlToUint8Array(base64url) {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padLength = (4 - (base64.length % 4)) % 4;
  const padded = base64 + "=".repeat(padLength);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function uint8ArrayToBase64url(buffer) {
  const binary = String.fromCharCode(...new Uint8Array(buffer));
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export default function WebAuthnLogin() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const login = async () => {
    setIsLoading(true);
    try {
      setStatus("Requesting login options...");
      const res = await api.post("/auth/webauthn/login-options");
      const options = res.data.data;

      options.challenge = base64urlToUint8Array(options.challenge);
      options.allowCredentials = options.allowCredentials.map(c => ({
        ...c,
        id: base64urlToUint8Array(c.id)
      }));

      setStatus("Waiting for passkey authentication...");
      const cred = await navigator.credentials.get({ publicKey: options });

      const payload = {
        id: cred.id,
        rawId: uint8ArrayToBase64url(cred.rawId),
        response: {
          clientDataJSON: uint8ArrayToBase64url(cred.response.clientDataJSON),
          authenticatorData: uint8ArrayToBase64url(cred.response.authenticatorData),
          signature: uint8ArrayToBase64url(cred.response.signature),
          userHandle: cred.response.userHandle
            ? uint8ArrayToBase64url(cred.response.userHandle)
            : null,
        },
        type: cred.type,
      };

      setStatus("Verifying your passkey...");
      await api.post("/auth/webauthn/login", payload);
      setStatus("Logged in successfully!");
      
      // Redirect after successful login
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1000);
      
    } catch (err) {
      console.error(err);
      if (err.name === "NotAllowedError") {
        setStatus("Login cancelled or timed out.");
      } else {
        setStatus("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const isWebAuthnSupported = () => {
    return window.PublicKeyCredential && 
           typeof window.PublicKeyCredential === "function" &&
           navigator.credentials && 
           typeof navigator.credentials.create === "function";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-purple-500/10">
        <div className="py-8 px-8 relative">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 -translate-x-16 -translate-y-16 bg-purple-600/20 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 translate-x-8 translate-y-8 bg-rose-500/20 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-900/30 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-2 8V7c0-1.103.897-2 2-2s2 .897 2 2v3h-4zm6 10H8v-2h8v2zm0-4H8v-2h8v2z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent">
                Passkey Login
              </h2>
              <p className="text-center text-gray-400 mt-2">
                Secure, passwordless authentication
              </p>
            </div>

            {!isWebAuthnSupported() ? (
              <div className="bg-rose-900/50 text-rose-200 p-4 rounded-lg mb-6 border border-rose-700/50">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-medium">Browser not supported</h3>
                    <p className="text-sm mt-1 text-rose-100">
                      Your browser doesn't support passkey authentication. Please use a modern browser like Chrome, Safari, Edge, or Firefox.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-gray-800/50 p-4 rounded-lg mb-6 border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    How it works
                  </h3>
                  <ul className="text-xs text-gray-400 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      Use your fingerprint, face recognition, or device PIN
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      No passwords to remember or type
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      More secure than traditional passwords
                    </li>
                  </ul>
                </div>

                <button
                  onClick={login}
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-2 8V7c0-1.103.897-2 2-2s2 .897 2 2v3h-4zm6 10H8v-2h8v2zm0-4H8v-2h8v2z"/>
                      </svg>
                      Sign in with Passkey
                    </>
                  )}
                </button>
              </>
            )}

            {status && (
              <div className={`mt-6 p-3 rounded-lg flex items-center border ${
                status.includes("failed") || status.includes("cancelled") || status.includes("not supported")
                  ? "bg-rose-900/50 text-rose-200 border-rose-700/50" 
                  : "bg-green-900/50 text-green-200 border-green-700/50"
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 mr-2 flex-shrink-0 ${
                    status.includes("failed") || status.includes("cancelled") || status.includes("not supported")
                      ? "text-rose-400" 
                      : "text-green-400"
                  }`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  {status.includes("failed") || status.includes("cancelled") || status.includes("not supported") ? (
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  )}
                </svg>
                <span className="text-sm">{status}</span>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-gray-700">
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  Prefer to use a password?{" "}
                  <a href="/login" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    Sign in with password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}