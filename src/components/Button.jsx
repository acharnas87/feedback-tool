import React from "react";

export function Button({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
      }`}
    >
      {children}
    </button>
  );
}