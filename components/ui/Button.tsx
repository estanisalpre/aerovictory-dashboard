import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ loading, children, ...props }) => (
  <button
    {...props}
    disabled={loading}
    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
  >
    {loading ? "Cargando..." : children}
  </button>
);
