"use client";

import React, { useState } from "react";
import "../../componentsstsyles/calculator/Calculator.css";

function Calculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [system, setSystem] = useState("imperial"); // Default to imperial

  const calculateBMI = () => {
    const weightInKg = system === "imperial" ? weight * 0.453592 : +weight;
    const heightInM = system === "imperial" ? height * 0.0254 : +height;

    if (weightInKg > 0 && heightInM > 0) {
      const bmi = weightInKg / (heightInM * heightInM);
      return bmi.toFixed(2); // Round to 2 decimal places
    }
    return "";
  };

  const weightPlaceholder =
    system === "imperial"
      ? "Enter weight in pounds (lbs)"
      : "Enter weight in kilograms (kg)";
  const heightPlaceholder =
    system === "imperial" ? "Enter height in inches (in)" : "Enter height in meters (m)";

  return (
    <div className="bmi-calculator-component">
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={weightPlaceholder}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder={heightPlaceholder}
        />
      </label>
      <label>
        System:
        <select value={system} onChange={(e) => setSystem(e.target.value)}>
          <option value="imperial">Imperial (lbs, inches)</option>
          <option value="metric">Metric (kg, meters)</option>
        </select>
      </label>

      <div className="bmi-value">
        <p className="bmi-title">Your BMI:</p>
        <p className="bmi-calculated-value">{calculateBMI()}</p>
      </div>
    </div>
  );
}

export default Calculator;
