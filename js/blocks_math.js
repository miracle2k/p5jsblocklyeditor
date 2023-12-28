registerFunctionCall("math_min", "Math.min", {
  name: "min",
  color: "#5b67a5",
  tooltip: "Pick the smaller of two numbers",
  hasOutput: true,
  fields: {
    a: "Number",
    b: "Number",
  }
});

registerFunctionCall("math_max", "Math.max", {
  name: "max",
  color: "#5b67a5",
  tooltip: "Pick the bigger of two numbers",
  hasOutput: true,
  fields: {
    a: "Number",
    b: "Number",
  }
});

registerFunctionCall("math_sin", "Math.sin", {
  name: "sin",
  color: "#5b67a5",
  tooltip: "sin()",
  hasOutput: true,
  fields: {
    x: "Number",
  }
});

function cycle(t, start, end, d) {
  // Calculate the normalized time (0 to 1) in the cycle
  let normalizedTime = (t % d) / d;

  // Map the normalized time to a triangular wave (0 to 1 to 0)
  let triangularWave = 1 - Math.abs(2 * normalizedTime - 1);

  // Map the triangular wave to the specified range
  let value = start + (end - start) * triangularWave;

  return value;
}

registerFunctionCall("x_math_cycle", "cycle", {
  name: "cycle",
  color: "#5b67a5",
  tooltip: "cycle between two values",
  hasOutput: true,
  fields: {
    time: "Number",
    start: "Number",
    end: "Number",
    duration: "Number",
  }
});