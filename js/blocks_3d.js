// This is good: https://p5js.org/learn/getting-started-in-webgl-appearance.html

registerFunctionCall("p5_normalMaterial", "p5sketch.normalMaterial", {
  name: "normalMaterial()",
  color: "#5ba57f",
  tooltip: "Standard RGB material",  
});

registerFunctionCall("p5_ambientMaterial", "p5sketch.ambientMaterial", {
  name: "ambientMaterial()",
  color: "#5ba57f",
  tooltip: "Ambient Material",
  fields: {
    r: "Number",
    g: "Number",
    b: "Number",
  }
});

registerFunctionCall("p5_specularMaterial", "p5sketch.specularMaterial", {
  name: "specularMaterial()",
  color: "#5ba57f",
  tooltip: "Specular Material",
  fields: {
    r: "Number",
    g: "Number",
    b: "Number",
  }
});

registerFunctionCall("p5_ambientLight", "p5sketch.ambientLight", {
  name: "ambientLight()",
  color: "#5ba57f",
  tooltip: "Ambient light makes everything display a little brighter, with no consideration for light position or direction.",
  fields: {
    r: "Number",
    g: "Number",
    b: "Number"
  }
});

registerFunctionCall("p5_pointLight", "p5sketch.pointLight", {
  name: "pointLight()",
  color: "#5ba57f",
  tooltip: "Point Light in a certain color, from a certain point, in all directions",
  fields: {
    r: "Number",
    g: "Number",
    b: "Number",
    x: "Number",
    y: "Number",
    z: "Number",
  }
});

registerFunctionCall("p5_orbitControl", "p5sketch.orbitControl", {
  name: "orbitControl()",
  color: "#5ba57f",
  tooltip: "Allow mouse to control the scene"  
});

registerFunctionCall("p5_box", "p5sketch.box", {
  name: "box()",
  color: "#418261",
  tooltip: "Draw a 3d box",
  fields: {
    width: "Number",
    height: "Number",
    depth: "Number",
  }
});

registerFunctionCall("p5_sphere", "p5sketch.sphere", {
  name: "sphere()",
  color: "#418261",
  tooltip: "Draw a 3d sphere",
  fields: {
    radius: "Number"
  }
});

registerFunctionCall("p5_translate_z", "p5sketch.translate", {
  name: "translate()",
  color: "#3f5e4f",
  tooltip: "Translate with a Z coordinate",
  fields: {
    x: "Number",
    y: "Number",
    z: "Number",
  }
});

registerFunctionCall("p5_rotateX", "p5sketch.rotateX", {
  name: "rotateX()",
  color: "#3f5e4f",
  tooltip: "Rotate around the X coordinate",
  fields: {
    angle: "Number"
  }
});

registerFunctionCall("p5_rotateY", "p5sketch.rotateY", {
  name: "rotateY()",
  color: "#3f5e4f",
  tooltip: "Rotate around the Y coordinate",
  fields: {
    angle: "Number"
  }
});

registerFunctionCall("p5_rotateZ", "p5sketch.rotateZ", {
  name: "rotateZ()",
  color: "#3f5e4f",
  tooltip: "Rotate around the Z coordinate",
  fields: {
    angle: "Number"
  }
});