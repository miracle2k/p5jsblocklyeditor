var color = "#da5a73";

registerFunctionCall("p5_randomSeed", "p5sketch.randomSeed", {
  name: "randomSeed()",
  color,
  tooltip: "Set the seed that determines the sequence of random numbers",
  fields: {
    seed: "Number"
  }
});

registerFunctionCall("p5_noiseSeed", "p5sketch.noiseSeed", {
  name: "noiseSeed()",
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

registerFunctionCall("p5_noise2d", "p5sketch.noise", {
  name: "Noise 2D",
  color,
  tooltip: "Get a 2D noise value",
  hasOutput: true,
  fields: {
    x: "Number",
    y: "Number",
  }
});

registerFunctionCall("p5_noise3d", "p5sketch.noise", {
  name: "Noise 3D",
  color,
  tooltip: "Get a 3D noise value",
  hasOutput: true,
  fields: {
    x: "Number",
    y: "Number",
    z: "Number",
  }
});

registerFunctionCall("p5_curveVertex", "p5sketch.curveVertex", {
  name: "curveVertex()",
  color: "#e67e22",
  tooltip: "Specify a polygon point, drawing a curved line",
  hasOutput: false,
  fields: {
    x: "Number",
    y: "Number",
  }
});

registerFunctionCall("p5_bezierVertex", "p5sketch.bezierVertex", {
  name: "bezierVertex()",
  color: "#e67e22",
  tooltip: "Specify a polygon point, drawing a bezier line",
  hasOutput: false,
  fields: {
    cp1x: "Number",
    cp1y: "Number",
    cp2x: "Number",
    cp2y: "Number",
    x: "Number",
    y: "Number",
  }
});