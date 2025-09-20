import React from "react";

export default function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  name
}) {
  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
    </div>
  );
}
