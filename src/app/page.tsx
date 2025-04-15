/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Button from "@/components/Button";
import IconLabel from "@/components/IconLabel";
import JsonViewer from "@/components/JsonViewer";
import Select from "@/components/Select";
import React, { useMemo, useState } from "react";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string[] | number[];
  }>({
    std1: [1, 1, 1, 1],
    std2: [1, 1, 1, 1],
    std3: [1, 1, 1, 1],
    std4: [1, 1, 1, 1],
    std5: [1, 1, 1, 1],
    std6: [1, 1, 1, 1],
    std7: [1, 1, 1, 1],
    std8: [1, 1, 1, 1],
    std9: [1, 1, 1, 1],
    std10: [1, 1, 1, 1],
  });
  const [result, setResult] = useState<any | null>(null);

  const setOptions = (
    student: number,
    aspect: number,
    value: string | number
  ) => {
    const currentVals = selectedOptions[`std${student + 1}`];
    currentVals[aspect] = value;

    setSelectedOptions({
      ...selectedOptions,
      [`std${student + 1}`]: currentVals,
    });
  };

  const names = useMemo(() => {
    const students = [];

    for (let at = 1; at <= 10; at++) {
      students.push(`Mahasiswa ${at}`);
    }

    return students;
  }, []);

  const options = useMemo(() => {
    const aspects: { value: string | number; label: string }[] = [];

    for (let at = 1; at <= 10; at++) {
      aspects.push({ value: at, label: String(at) });
    }

    return aspects;
  }, []);

  return (
    <div className="grid grid-flow-row-dense grid-cols-5 grid-rows-3 gap-4 p-10 min-h-screen">
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
      {names.map((name, at) => (
        <React.Fragment key={name}>
          <IconLabel name={name} />
          <div className="max-w-md p-6 space-y-4">
            <Select
              options={options}
              value={selectedOptions[`std${at + 1}`][0]}
              onChange={(value) => setOptions(at, 0, value)}
            />
          </div>
          <div className="max-w-md p-6 space-y-4">
            <Select
              options={options}
              value={selectedOptions[`std${at + 1}`][1]}
              onChange={(value) => setOptions(at, 1, value)}
            />
          </div>
          <div className="max-w-md p-6 space-y-4">
            <Select
              options={options}
              value={selectedOptions[`std${at + 1}`][2]}
              onChange={(value) => setOptions(at, 2, value)}
            />
          </div>
          <div className="max-w-md p-6 space-y-4">
            <Select
              options={options}
              value={selectedOptions[`std${at + 1}`][3]}
              onChange={(value) => setOptions(at, 3, value)}
            />
          </div>
        </React.Fragment>
      ))}
      <div className="col-span-5 p-6">
        <JsonViewer data={result} />
      </div>
      <div className="col-span-5 text-2xl text-right p-6">
        <Button
          onClick={() => {
            // define data result
            const data: { [key: string]: { [key: string]: string | number } } =
              {
                aspek_penilaian_1: {},
                aspek_penilaian_2: {},
                aspek_penilaian_3: {},
                aspek_penilaian_4: {},
              };

            // assign default value (1)
            for (let at = 0; at < names.length; at++) {
              data.aspek_penilaian_1[`mahasiswa_${at + 1}`] = 1;
              data.aspek_penilaian_2[`mahasiswa_${at + 1}`] = 1;
              data.aspek_penilaian_3[`mahasiswa_${at + 1}`] = 1;
              data.aspek_penilaian_4[`mahasiswa_${at + 1}`] = 1;
            }

            // set value from selected aspects
            for (const key in selectedOptions) {
              data.aspek_penilaian_1[key.replace("std", "mahasiswa_")] =
                selectedOptions[key][0];
              data.aspek_penilaian_2[key.replace("std", "mahasiswa_")] =
                selectedOptions[key][1];
              data.aspek_penilaian_3[key.replace("std", "mahasiswa_")] =
                selectedOptions[key][2];
              data.aspek_penilaian_4[key.replace("std", "mahasiswa_")] =
                selectedOptions[key][3];
            }

            setResult(data);
          }}
          variant="reverse"
        >
          Simpan
        </Button>
      </div>
    </div>
  );
}
