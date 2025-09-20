import React from "react";

export default function Button({ children, onClick, type = "button", variant = "primary", disabled = false, className = "" }) {
  const base = "px-4 py-2 rounded-md focus:outline-none focus:ring";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300"
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}
