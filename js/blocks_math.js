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