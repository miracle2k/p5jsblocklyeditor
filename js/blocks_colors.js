function hsbToRgb(h, s, b, alpha) {
  s /= 100;
  b /= 100;
  let k = (n) => (n + h / 60) % 6;
  let f = (n) => b - b * s * Math.max(Math.min(k(n), 4 - k(n), 1), 0);
  let rgb = [f(5) * 255, f(3) * 255, f(1) * 255];
  
  // Check if alpha is provided
  if (alpha !== undefined) {
    // Assuming alpha is a number between 0 and 1, convert to 0-255 range then to hex
    let alphaHex = Math.round(alpha * 255).toString(16);
    if (alphaHex.length < 2) alphaHex = "0" + alphaHex; // Ensure 2 digits
    return rgbToHex(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2])) + alphaHex;
  } else {
    return rgbToHex(Math.round(rgb[0]), Math.round(rgb[1]), Math.round(rgb[2]));
  }
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

registerFunctionCall("hsbToRgb", "hsbToRgb", {
  name: "HSB Color",
  color: "#a5745b",
  tooltip: "Generate a HSB color (360, 100, 100)",
  hasOutput: true,
  fields: {
    h: "Number",
    s: "Number",
    b: "Number",
  }
});

registerFunctionCall("hsbToRgb_alpha", "hsbToRgb", {
  name: "HSB Color",
  color: "#a5745b",
  tooltip: "Generate a HSB color (360, 100, 100)",
  hasOutput: true,
  fields: {
    h: "Number",
    s: "Number",
    b: "Number",
    a: "Number",
  }
});