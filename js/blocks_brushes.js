// To finish support for this we need https://github.com/acamposuribe/p5.brush/issues/13
// config: https://github.com/acamposuribe/p5.brush#stroke-operations


function sketchHasP5BrushBlock(blockOrWorkspace) {
  const hasBrushBlocks = findBlocksWithMatcher(blockOrWorkspace.workspace || blockOrWorkspace, b => {
    if (b.type.startsWith('brush_')) {
      return true;
    }
  }).length > 0;
  return hasBrushBlocks;
}

/////////////////////// Vector Fields

registerFunctionCall("brush_field", "brush.field", {
  name: "field()",
  color: '#6c6a6a',
  tooltip: "Activates a named vector field. When a vector field is active, it influences the flow and direction of the brush strokes for shapes drawn thereafter. It is important to note that certain shapes may be exempt from this influence; such exceptions will be clearly documented in the API for each specific geometry.",
  fields: {
    name: {
      "curved": option("curved"),
      "truncated": option("truncated"),
      "zigzag": option("zigzag"),
      "seabed": option("seabed"),
      "waves": option("waves"),
    }
  }
});

registerFunctionCall("brush_nofield", "brush.noField", {
  name: "noField()",
  color: '#6c6a6a',
  tooltip: "Deactivates any active vector field."
});

/////////////////////// Stroke Operations

const brushes = {
  '2B': option('2B'),
  'HB': option('HB'),
  '2H': option('2H'),
  'cpencil': option('cpencil'),
  'pen': option('pen'),
  'rotring': option('rotring'),
  'spray': option('spray'),
  'marker': option('marker'),
  'marker2': option('marker2'),
  'charcoal': option('charcoal'),
  'charcoal': option('hatch_brush'),
}

registerFunctionCall("brush_set", "brush.set", {
  name: "pick()",
  color: '#544c4c',
  tooltip: "Pick Brush with Options",
  fields: {
    name: brushes,
    color: "",
    weight: "Number",
  }
});

registerFunctionCall("brush_pick", "brush.pick", {
  name: "pick()",
  color: '#544c4c',
  tooltip: "Pick Brush with default options",
  fields: {
    name: brushes
  }
});

registerFunctionCall("brush_stroke", "brush.stroke", {
  name: "stroke()",
  color: '#544c4c',
  tooltip: "Sets the color of the current brush.",
  fields: {
    color: ""
  }
});

registerFunctionCall("brush_nostroke", "brush.noStroke", {
  name: "noStroke()",
  color: '#544c4c',
  tooltip: "Removes any brush stroke color" 
});

registerFunctionCall("brush_strokeweight", "brush.strokeWeight", {
  name: "strokeWeight()",
  color: '#544c4c',
  tooltip: "Sets the weight of the brush stroke",
  fields: {
    weight: "Number"
  }
});

/////////////////////// Fill

registerFunctionCall("brush_fill", "brush.fill", {
  name: "fill()",
  tooltip: "Sets the fill color for subseuqent shapes.",
  color: '#424040',
  fields: {
    color: "",
    alpha: "Number"
  },
  defaults: {
    alpha: 100
  }
});

registerFunctionCall("brush_nofill", "brush.noFill", {
  name: "noFill()",
  color: '#424040',
  tooltip: "Removes any brush fill color" 
});

registerFunctionCall("brush_bleed", "brush.bleed", {
  name: "bleed()",
  color: '#424040',
  tooltip: "Sets the amount of bleed for the brush; capped at 0.5",
  fields: {
    strength: "Number",
    direction: {
      "out": option("out"),
      "in": option("in"),
    },
    borderIntensity: "Number",
  }
});


/////////////////////// Geometry

registerFunctionCall("brush_line", "brush.line", {
  name: "line()",
  color: '#000000',
  tooltip: "Draw a line",
  fields: {
    x1: "Number",
    y1: "Number",
    x2: "Number",
    y2: "Number",
  }
});

registerFunctionCall("brush_flowline", "brush.flowLine", {
  name: "flowline()",
  color: '#000000',
  tooltip: "Draw a line following the flow field",
  fields: {
    x: "Number",
    y: "Number",
    length: "Number",
    direction: "Number",
  }
});


registerFunctionCall("brush_rect", "brush.rect", {
  name: "rect()",
  color: '#000000',
  tooltip: "Draw a rect",
  fields: {
    x: "Number",
    y: "Number",
    w: "Number",
    h: "Number",
  }
});

registerFunctionCall("brush_circle", "brush.circle", {
  name: "circle()",
  color: '#000000',
  tooltip: "Draw a circle",
  fields: {
    x: "Number",
    y: "Number",
    r: "Number",
    // xxx add handdrawn
  }
});


/////////////////////// Hatch operations

registerBlock("brush_hatch", {
  name: "hatch()",
  color: '#7b7b7b',
  tooltip: "Sets a hash pattern for subsequent shapes",
  fields: {
    dist: "Number",
    angle: "Number",
    rand: "Number",
    gradient: "Number",
    // xxx add continuous
  }
});

defineJS("brush_hatch", ({valueToCode, block}) => {
  const dist = valueToCode("dist");
  const angle = valueToCode("angle");
  const rand = valueToCode("rand");
  const gradient = valueToCode("gradient");

  return `brush.hatch(${dist}, ${angle}, {rand: ${rand}, gradient: ${gradient}});\n`;
});

registerFunctionCall("brush_nohatch", "brush.noHatch", {
  name: "noHatch()",
  color: '#7b7b7b',
  tooltip: "Removes any hatch pattern" 
});

registerFunctionCall("brush_sethatch", "brush.setHatch", {
  name: "setHatch()",
  color: '#7b7b7b',
  tooltip: "Sets a hash pattern for subsequent shapes",
  fields: {
    name: brushes,
    color: "",
    weight: "Number",
  }
});