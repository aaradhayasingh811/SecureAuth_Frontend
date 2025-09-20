import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative elements */}
          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 w-32 h-32 bg-purple-600/20 rounded-full"></div>
            <div className="absolute bottom-0 right-1/2 transform translate-x-16 translate-y-16 w-24 h-24 bg-rose-500/20 rounded-full"></div>
            
            <div className="relative z-10">
              {/* Logo/Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-900/30 mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent mb-6">
                SecureAuth
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Modern authentication demo featuring passwords, TOTP, backup codes, and WebAuthn passkeys
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-purple-900/30 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-200 mb-1">Password Auth</h3>
                  <p className="text-sm text-gray-400">Secure password-based authentication</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-900/30 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-200 mb-1">TOTP MFA</h3>
                  <p className="text-sm text-gray-400">Time-based one-time passwords</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-900/30 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-200 mb-1">Backup Codes</h3>
                  <p className="text-sm text-gray-400">Emergency one-time access codes</p>
                </div>

                <div className="bg-gray-800/50 border border-gray-700 p-4 rounded-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-900/30 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-rose-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 6c-1.103 0-2 .897-2 2v3H9V8c0-1.103-.897-2-2-2s-2 .897-2 2v10c0 1.103.897 2 2 2s2-.897 2-2v-3h6v3c0 1.103.897 2 2 2s2-.897 2-2V8c0-1.103-.897-2-2-2zM9 15H7v-2h2v2zm8 0h-2v-2h2v2zm1-10.5c0 .276-.224.5-.5.5S17 4.776 17 4.5s.224-.5.5-.5.5.224.5.5z"/>
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-200 mb-1">WebAuthn</h3>
                  <p className="text-sm text-gray-400">Passwordless passkey authentication</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link 
                  to="/register" 
                  className="w-full sm:w-auto flex justify-center items-center py-3 px-6 border border-transparent rounded-md text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-rose-600 hover:from-purple-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 shadow-lg hover:shadow-purple-500/20 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-3 bg-white/30 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 -skew-x-12"></span>
                  <span className="relative z-10">Get Started Free</span>
                </Link>
                
                <Link 
                  to="/login" 
                  className="w-full sm:w-auto flex justify-center items-center py-3 px-6 border border-gray-600 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
                >
                  Sign In to Account
                </Link>
              </div>

              {/* Security Badge */}
              <div className="mt-12 flex items-center justify-center">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>End-to-end encrypted • Open source • Privacy focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
}