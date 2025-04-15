"user client";

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "reverse" | "outline";
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  loading = false,
  children,
  className,
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
    reverse: "bg-gray-800 text-gray-200 hover:bg-gray-500 focus:ring-gray-300",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className} ${
        loading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
