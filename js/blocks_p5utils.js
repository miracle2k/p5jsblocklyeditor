var color = "#da5a73";

registerFunctionCall("p5_randomSeed", "p5sketch.randomSeed", {
  name: "Random Seed",
  color,
  tooltip: "Set the seed that determines the sequence of random numbers",
  fields: {
    seed: "Number"
  }
});

registerFunctionCall("p5_noiseSeed", "p5sketch.noiseSeed", {
  name: "Noise Seed",
  color,
  tooltip: "Set the seed that determines the noise numbers",
  fields: {
    seed: "Number"
  }
});

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

registerFunctionCall("p5_rectMode", 'p5sketch.rectMode', {
  name: "Rect Mode",
  color,
  tooltip: "Switch between degrees and radians",
  helpUrl: "https://p5js.org/reference/#/p5/rectMode",
  fields: {
    mode: {
      'Corner': "p5sketch.CORNER",
      'Corners': "p5sketch.CORNERS",
      'Center': "p5sketch.CENTER",
      'Radius': "p5sketch.RADIUS",
    }
  }
});
