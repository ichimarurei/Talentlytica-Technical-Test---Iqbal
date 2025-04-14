"use client";

import { useEffect, useState } from "react";

const NameWithIcon = ({ name }: { name: string }) => (
  <div className="flex items-center p-4 rounded-lg shadow-md">
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

export default function Home() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    const students = [];

    for (let at = 1; at <= 10; at++) {
      students.push(`Mahasiswa ${at}`);
    }

    setNames(students);
  }, []);

  return (
    <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 gap-4 p-10">
      <div className="col-span-5 text-2xl text-center">
        Aplikasi Penilaian Mahasiswa
      </div>
      <span />
      <div className="text-center">
        Aspek <br /> Penilaian 1
      </div>
      <div className="text-center">
        Aspek <br /> Penilaian 2
      </div>
      <div className="text-center">
        Aspek <br /> Penilaian 3
      </div>
      <div className="text-center">
        Aspek <br /> Penilaian 4
      </div>
      {names.map((name) => (
        <>
          <NameWithIcon name={name} />
          <div className="bg-purple-500">01</div>
          <div className="bg-purple-500">02</div>
          <div className="bg-purple-500">03</div>
          <div className="bg-purple-500">04</div>
        </>
      ))}
    </div>
  );
}
