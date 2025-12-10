function calculateInterest() {
  const ss = SpreadsheetApp.getActive();
  const sheet = ss.getActiveSheet();

  const startValue = sheet.getRange("B1").getValue();
  const interestRate = sheet.getRange("B2").getValue() / 100;
  const steps = sheet.getRange("B3").getValue();

  const startRow = 6;

  // Clear output
  sheet.getRange(startRow, 1, 500, 5).clearContent();

  // Headers
  sheet.getRange(startRow, 1, 1, 5).setValues([
    [
      "Step",
      "Compound Interest",
      "Simple Interest (Expected)",
      "Valley Red",
      "Valley Green"
    ]
  ]).setFontWeight("bold");

  const valleyEnd = Math.max(1, Math.floor(steps * 0.20));

  let compound = startValue;
  let simple = startValue;
  let rows = [];

  for (let i = 1; i <= steps; i++) {
    // Compound interest growth
    compound = compound * (1 + interestRate);

    // Simple linear interest
    simple = startValue + (startValue * interestRate * i);

    // RED shading for the valley
    let redShade = (i <= valleyEnd) ? compound : null;

    // GREEN shading after the valley
    let greenShade = (i > valleyEnd) ? compound : null;

    rows.push([i, compound, simple, redShade, greenShade]);
  }

  sheet.getRange(startRow + 1, 1, rows.length, 5).setValues(rows);

  // Remove old charts
  sheet.getCharts().forEach(c => sheet.removeChart(c));

  // Build new chart
  const chart = sheet.newChart()
    .setChartType(Charts.ChartType.LINE)

    // Main data
    .addRange(sheet.getRange(startRow, 1, steps + 1, 3))

    // Valley shading
    .addRange(sheet.getRange(startRow, 4, steps + 1, 1)) // red
    .addRange(sheet.getRange(startRow, 5, steps + 1, 1)) // green

    .setPosition(3, 6, 0, 0)
    .setOption("title", "Exponential Growth vs Expected Progress")
    .setOption("hAxis", { title: "Step" })
    .setOption("vAxis", { title: "Value" })

    // Apply colors to shading series
    .setOption("series", {
      0: { color: "#1b73e8", lineWidth: 3 },        // compound
      1: { color: "#888888", lineDashStyle: [5,5] }, // simple
      2: { color: "red", lineWidth: 0 },             // valley red
      3: { color: "green", lineWidth: 0 }            // valley green
    })

    .build();

  sheet.insertChart(chart);
}
