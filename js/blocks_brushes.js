function registerBlock(name, data) {
  Blockly.Blocks[name] = {
    init: function () {
      this.appendDummyInput().appendField(data.name);
      for (const [key, value] of Object.entries(data.fields)) {
        this.appendValueInput(key).setCheck(value).appendField(key);
      }
      this.setInputsInline(data.isInline ?? true);
      this.setPreviousStatement(data.allowPrevious ?? false, null);
      this.setNextStatement(data.allowNext ?? false, null);
      if (data.color) { this.setColour(data.color); }
      if (data.tooltip) { this.setTooltip(data.tooltip); }
      if (data.helpUrl) { this.setHelpUrl(data.helpUrl); }
    },
  };
}

function defineJS(name, callback) {
  Blockly.JavaScript[name] = function (block) {
    return callback({
      block,
      valueToCode: (name) => Blockly.JavaScript.valueToCode(block, name, Blockly.JavaScript.ORDER_ATOMIC),
    });
  }
}

registerBlock("brush_set", {
  name: "Pick Brush with Options",
  tooltip: "Pick Brush with Options",
  allowPrevious: true,
  allowNext: true,
  fields: {
    name: "String",
    color: "Colour",
    weight: "Number",
  }
});

defineJS("brush_set", function ({valueToCode}) {
  return `brush.set(${valueToCode("name")}, ${valueToCode("color")}, ${valueToCode("weight")});\n`;    
});


registerBlock("brush_flowline", {
  name: "Flowline",
  tooltip: "Draw a line following the flow field",
  allowPrevious: true,
  allowNext: true,
  fields: {
    x: "Number",
    y: "Number",
    length: "Number",
    direction: "Number",
  }
});

defineJS("brush_flowline", function ({valueToCode}) {
  return `brush.flowLine(${valueToCode("x")}, ${valueToCode("y")}, ${valueToCode("length")}, ${valueToCode("direction")});\n`;    
});
