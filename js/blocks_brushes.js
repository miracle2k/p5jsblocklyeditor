// To finish support for this we need https://github.com/acamposuribe/p5.brush/issues/13
// config: https://github.com/acamposuribe/p5.brush#stroke-operations

var Blocks = {};

function registerBlock(name, data) {
  Blockly.Blocks[name] = {
    init: function () {
      this.appendDummyInput().appendField(data.name);
      for (const [key, value] of Object.entries(data.fields ?? {})) {
        this.appendValueInput(key).setCheck(value).appendField(key);
      }
      this.setInputsInline(data.isInline ?? true);
      this.setPreviousStatement(data.allowPrevious ?? true, null);
      this.setNextStatement(data.allowNext ?? true, null);
      if (data.color) { this.setColour(data.color); }
      if (data.tooltip) { this.setTooltip(data.tooltip); }
      if (data.helpUrl) { this.setHelpUrl(data.helpUrl); }
    },
  };

  Blocks[name] = data;
}

function defineJS(name, callback) {
  Blockly.JavaScript[name] = function (block) {
    return callback({
      block,
      valueToCode: (name) => Blockly.JavaScript.valueToCode(block, name, Blockly.JavaScript.ORDER_ATOMIC),
    });
  }
}

function registerFunctionCall(name, funcname, data) {
  registerBlock(name, data);
  defineJS(name, function ({valueToCode}) {
    const args = Object.keys(data.fields).map((key) => valueToCode(key));
    return `${funcname}(${args.join(", ")});\n`;
  });
}

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

/////////////////////// stroke


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
