"use client";

import { useState } from "react";

interface SelectProps {
  options: { value: string | number; label: string }[];
  value?: string | number;
  onChange?: (value: string | number) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
}

export default function Select({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  error,
  className = "",
  disabled = false,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (selectedValue: string | number) => {
    onChange?.(selectedValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          className={`w-full px-4 py-2 text-left bg-white dark:bg-gray-800 border ${
            error ? "border-red-500" : "border-gray-300 dark:border-gray-600"
          } rounded-md shadow-sm ${
            disabled
              ? "bg-gray-50 cursor-not-allowed"
              : "hover:border-gray-400 dark:hover:border-gray-500"
          } transition-colors duration-200 flex items-center justify-between`}
          disabled={disabled}
        >
          <span
            className={`${!value ? "text-gray-400" : "dark:text-gray-200"}`}
          >
            {options.find((opt) => opt.value === value)?.label || placeholder}
          </span>
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            } ${
              disabled ? "text-gray-400" : "text-gray-500 dark:text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
            <div className="py-1 max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-2 text-left ${
                    value === option.value
                      ? "bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-200"
                  } transition-colors duration-200`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">{error}</p>
      )}
    </div>
  );
}
