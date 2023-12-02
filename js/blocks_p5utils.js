var color = "#da5a73";

registerFunctionCall("p5_degrees", "p5sketch.degrees", {
  name: "To Degrees",
  color,
  tooltip: "Convert an angle in radians to degrees",
  hasOutput: true,
  fields: {
    radians: "Number"
  }
});

registerFunctionCall("p5_radians", "p5sketch.radians", {
  name: "To Radians",
  color,
  tooltip: "Convert an angle in degrees to radians",
  hasOutput: true,
  fields: {
    degrees: "Number"
  }
});

registerFunctionCall("p5_angleMode", 'p5sketch.angleMode', {
  name: "Angle Mode",
  color,
  tooltip: "Switch between degrees and radians",
  fields: {
    mode: {
      'Degrees': "p5sketch.DEGREES",
      'Radians': "p5sketch.RADIANS",
    }
  }
});
