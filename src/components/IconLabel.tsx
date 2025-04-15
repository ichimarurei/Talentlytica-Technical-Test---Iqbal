"use client";

const IconLabel = ({ name }: { name: string }) => (
  <div className="flex items-center p-4">
    <div className="flex items-center justify-center w-9 h-9 bg-gray-300 dark:bg-gray-400 rounded-full">
      <svg
        className="w-6 h-6 text-black dark:text-gray-700"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-5 0-8 2.5-8 5v1h16v-1c0-2.5-3-5-8-5z" />
      </svg>
    </div>
    <span className="ml-4 text-black dark:text-gray-100">{name}</span>
  </div>
);

export default IconLabel;
