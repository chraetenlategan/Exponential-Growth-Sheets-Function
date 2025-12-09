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
