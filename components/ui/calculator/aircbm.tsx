"use client";

import { useState } from "react";

export function AirCalculator() {
  const [length, setLength] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [numBoxes, setNumBoxes] = useState<number>(0);
  const [airCbm, setAirCbm] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);

  const calculateAirCbm = () => {
    const cbm = (length * width * height) / 6000;
    const totalCbm = cbm * numBoxes;
    const chargeableCbm = totalCbm > 0.6 ? totalCbm : 0.6;
    const rate =
      chargeableCbm <= 10
        ? 12
        : chargeableCbm > 10 && chargeableCbm <= 20
        ? 10
        : 8;
    setAirCbm(totalCbm);
    setPrice(chargeableCbm * rate);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Air CBM and Price Calculator</h1>
      <div className="mb-4">
        <label htmlFor="length" className="block font-medium mb-1">
          Length (cm)
        </label>
        <input
          type="text"
          id="length"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 w-full dark:bg-slate-700 dark:text-slate-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="width" className="block font-medium mb-1">
          Width (cm)
        </label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(e) => setWidth(parseInt(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 w-full dark:bg-slate-700 dark:text-slate-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="height" className="block font-medium mb-1">
          Height (cm)
        </label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(parseInt(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 w-full dark:bg-slate-700 dark:text-slate-300"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="numBoxes" className="block font-medium mb-1">
          Number of Boxes
        </label>
        <input
          type="text"
          id="numBoxes"
          value={numBoxes}
          onChange={(e) => setNumBoxes(parseInt(e.target.value))}
          className="border border-gray-300 rounded px-2 py-1 w-full dark:bg-slate-700 dark:text-slate-300"
        />
      </div>
      <button
        onClick={calculateAirCbm}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Calculate
      </button>
      <div className="mt-4">
        <p className="font-medium">Air CBM: {airCbm.toFixed(3)}</p>
        <p className="font-medium">Price: ${price.toFixed(2)}</p>
      </div>
    </div>
  );
}
