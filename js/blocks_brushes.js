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

/////////////////////// Stroke Operations

registerFunctionCall("brush_set", "brush.set", {
  name: "Pick Brush with Options",
  tooltip: "Pick Brush with Options",
  fields: {
    name: "String",
    color: "Colour",
    weight: "Number",
  }
});

registerFunctionCall("brush_pick", "brush.pick", {
  name: "Pick Brush",
  tooltip: "Pick Brush with default options",
  fields: {
    name: "String"
  }
});

registerFunctionCall("brush_stroke", "brush.stroke", {
  name: "Set Brush Stroke Color",
  tooltip: "Sets the color of the current brush.",
  fields: {
    color: "Colour"
  }
});

registerFunctionCall("brush_nostroke", "brush.noStroke", {
  name: "Disable Brush Stroke Color",
  tooltip: "Removes any brush stroke color" 
});

registerFunctionCall("brush_strokeweight", "brush.strokeWeight", {
  name: "Set Brush Stroke Weight",
  tooltip: "Sets the weight of the brush stroke",
  fields: {
    weight: "Number"
  }
});

/////////////////////// Fill

registerFunctionCall("brush_fill", "brush.fill", {
  name: "Set Brush Fill Color",
  tooltip: "Sets the fill color for subseuqent shapes.",
  fields: {
    color: "Colour",
    alpha: "Number"
  },
  defaults: {
    alpha: 100
  }
});

/////////////////////// Geometry

registerFunctionCall("brush_line", "brush.line", {
  name: "Line",
  tooltip: "Draw a line",
  fields: {
    x1: "Number",
    y1: "Number",
    x2: "Number",
    y2: "Number",
  }
});

registerFunctionCall("brush_flowline", "brush.flowLine", {
  name: "Flowline",
  tooltip: "Draw a line following the flow field",
  fields: {
    x: "Number",
    y: "Number",
    length: "Number",
    direction: "Number",
  }
});


registerFunctionCall("brush_rect", "brush.rect", {
  name: "Rect",
  tooltip: "Draw a rect",
  fields: {
    x: "Number",
    y: "Number",
    w: "Number",
    h: "Number",
  }
});