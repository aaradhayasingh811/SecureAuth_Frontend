import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}