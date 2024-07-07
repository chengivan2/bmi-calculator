"use client"

import React, { useState } from 'react';

function Calculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [system, setSystem] = useState('imperial'); // Default to imperial

  const calculateBMI = () => {
    const weightInKg = system === 'imperial' ? weight * 0.453592 : +weight;
    const heightInM = system === 'imperial' ? height * 0.0254 : +height;

    if (weightInKg > 0 && heightInM > 0) {
      const bmi = weightInKg / (heightInM * heightInM);
      return bmi.toFixed(2); // Round to 2 decimal places
    }
    return '';
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label>
        Weight:
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        System:
        <select value={system} onChange={(e) => setSystem(e.target.value)}>
          <option value="imperial">Imperial (lbs, inches)</option>
          <option value="metric">Metric (kg, meters)</option>
        </select>
      </label>
      <p>Your BMI: {calculateBMI()}</p>
    </div>
  );
}

export default Calculator;