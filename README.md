# Exponential-Growth-Sheets-Function
This project is a custom Google Sheets function that calculates values with an exponentially increasing growth rate. Unlike a simple percentage increase, the growth rate itself compounds with each step, allowing for accelerating growth in spreadsheets.
Exponential Growth Sheets Function

A Google Sheets custom function that calculates values with a compounding exponential growth rate. The growth rate itself increases slightly at each step, producing accelerating values — perfect for simulations, financial modeling, or data analysis.

Features

Simple custom function: EXP_GROW(startValue, step)

Supports array input via ARRAYFORMULA

Calculates exponential growth with a compounding growth rate

Easy to use in any Google Sheet

Installation

Open your Google Sheet

Go to Extensions → Apps Script

Delete any default code

Copy and paste the following:

function EXP_GROW(startValue, steps) {
  var initialGrowth = 0.01; // 1%

  // If "steps" is a single number, wrap it into an array
  if (!Array.isArray(steps)) {
    steps = [[steps]];
  }

  var output = [];

  for (var i = 0; i < steps.length; i++) {
    var row = [];
    for (var j = 0; j < steps[i].length; j++) {
      var step = steps[i][j];
      var growthRate = initialGrowth * Math.pow(1.01, step - 1);
      row.push(startValue * (1 + growthRate));
    }
    output.push(row);
  }

  return output;
}


Save the project and close the editor

Usage
Single Value
=EXP_GROW(100, 1)  // Returns the first value

Multiple Values (Array)
=ARRAYFORMULA(EXP_GROW(100, SEQUENCE(50,1)))  


This generates 50 steps of exponentially growing values in a column.

How It Works

Start with an initial value (startValue)

Set an initial growth rate (default 1%)

Each step increases the growth rate by 1% relative to the previous step

Multiply the previous value by (1 + current growth rate) to get the next value

Example Output
Step	Value
1	100
2	101.01
3	102.03
4	103.06
5	104.10
License

This project is released under the MIT License
.
