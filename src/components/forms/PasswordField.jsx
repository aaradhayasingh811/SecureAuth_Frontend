import React, { useState } from "react";

export default function PasswordField({ label, value, onChange, name }) {
  const [show, setShow] = useState(false);
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative">
        <input
          name={name}
          type={show ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
}
