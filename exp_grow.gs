function EXP_GROW(startValue, steps) {
  var initialGrowth = 0.01; // 1%

  if (!Array.isArray(steps)) {
    steps = [[steps]];
  }

  var output = [];

  for (var i = 0; i < steps.length; i++) {
    var row = [];
    for (var j = 0; j < steps[i].length; j++) {
      var step = steps[i][j];
      var growthRate = initialGrowth * Math.pow(1.01, step - 1);
      var value = startValue * (1 + growthRate);
      // Round to 2 decimals
      value = Math.round(value * 100) / 100;
      row.push(value);
    }
    output.push(row);
  }

  return output;
}
