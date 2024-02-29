
var farbeAussehen = "#95a5a6";

//Category: Appearance
Blockly.Blocks['p5_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("p5-Color:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("red:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("green:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blue:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Transparency:");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Set a p5 color");
    this.setHelpUrl("https://p5js.org/reference/#/p5/color");
  }
};

Blockly.JavaScript['p5_color'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.color(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['background_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Background color:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Set background color.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  }
};

Blockly.JavaScript['background_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.background(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['background_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Background color =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Enter color name");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['background_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.background(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['stroke_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line color:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Set line color.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/stroke");
  }
};

Blockly.JavaScript['stroke_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.stroke(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['stroke_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Line color =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Enter color name");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['stroke_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.stroke(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['fill_pick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fill color:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "farbe");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Set fill color.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  }
};

Blockly.JavaScript['fill_pick'] = function(block) {
  var colour_farbe = block.getFieldValue('farbe');
  var code = 'p5sketch.fill(\"' + colour_farbe + '\");\n';
  return code;
};

Blockly.Blocks['fill_colorname'] = {
  init: function() {
    this.appendValueInput("farbname")
        .setCheck(null)
        .appendField("Fill color =");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Enter color name");
 this.setHelpUrl("https://htmlcolorcodes.com/color-names/");
  }
};

Blockly.JavaScript['fill_colorname'] = function(block) {
  var value_farbname = Blockly.JavaScript.valueToCode(block, 'farbname', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.fill(' + value_farbname + ');\n';
  return code;
};

Blockly.Blocks['nofill'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("noFill");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("The figures are not filled with color.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/noFill");
  }
};

Blockly.JavaScript['nofill'] = function(block) {
  var code = 'p5sketch.noFill();\n';
  return code;
};

Blockly.Blocks['strokeweight_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line thickness:")
        .appendField(new Blockly.FieldNumber(0, 0, maxKoord, 0.1), "weight");
   this.appendDummyInput()
        .appendField("px");
    this.setInputsInline(true);        
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
 this.setTooltip("Legt die Liniendicke fest.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/strokeWeight");
  }
};

Blockly.JavaScript['strokeweight_number'] = function(block) {
  var number_weight = block.getFieldValue('weight');
  var code = 'p5sketch.strokeWeight(' + number_weight + ');\n';
  return code;
};
Blockly.Blocks['background_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Background color");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("red:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("green:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blue:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Set background color.");
    this.setHelpUrl("https://p5js.org/reference/#/p5/background");
  }
};

Blockly.JavaScript['background_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.background(' + number_r + ', ' + number_g + ', ' + number_b + ');\n';
  return code;
};

Blockly.Blocks['fill_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Fill color:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("red:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("green:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blue:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Transparency:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Set the fill color");
    this.setHelpUrl("https://p5js.org/reference/#/p5/fill");
  }
};

Blockly.JavaScript['fill_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.fill(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ');\n';
  return code;
};

Blockly.Blocks['stroke_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line color:");
    this.appendValueInput("r")
        .setCheck("Number")
        .appendField("red:");
    this.appendValueInput("g")
        .setCheck("Number")
        .appendField("green:");
    this.appendValueInput("b")
        .setCheck("Number")
        .appendField("blue:");
    this.appendValueInput("t")
        .setCheck("Number")
        .appendField("Transparency:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeAussehen);
    this.setTooltip("Set the line color");
    this.setHelpUrl("https://p5js.org/reference/#/p5/stroke");
  }
};

Blockly.JavaScript['stroke_var'] = function(block) {
  var number_r = Blockly.JavaScript.valueToCode(block, 'r', Blockly.JavaScript.ORDER_ATOMIC);
  var number_g = Blockly.JavaScript.valueToCode(block, 'g', Blockly.JavaScript.ORDER_ATOMIC);
  var number_b = Blockly.JavaScript.valueToCode(block, 'b', Blockly.JavaScript.ORDER_ATOMIC);
  var number_t = Blockly.JavaScript.valueToCode(block, 't', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.stroke(' + number_r + ', ' + number_g + ', ' + number_b +  ', ' + number_t + ');\n';
  return code;
};

registerFunctionCall("strokeweight_var", "p5sketch.strokeWeight", {
  name: "strokeWeight()",
  color: farbeAussehen,
  tooltip: "Set the line thickness",
  helpUrl: "https://p5js.org/reference/#/p5/strokeWeight",
  fields: {
    dicke: "Number"
  }
});

registerBlock("dom_radialGradient", {
  name: "Radial Gradient Fill",
  color: farbeAussehen,
  tooltip: "Set fill style to a radial gradient",
  fields: {
    x0: "Number",
    y0: "Number",
    r0: "Number",
    x1: "Number",
    y1: "Number",
    r1: "Number",
  },
  allowStatements: true
});

defineJS("dom_radialGradient", function ({valueToCode, block}) {
  const x0 = valueToCode("x0");
  const y0 = valueToCode("y0");
  const r0 = valueToCode("r0");
  const x1 = valueToCode("x1");
  const y1 = valueToCode("y1");
  const r1 = valueToCode("r1");
  const initCode = `let g__ = p5sketch.drawingContext.createLinearGradient(${x0}, ${y0}, ${r0}, ${x1}, ${y1}, ${r1});\n`;
  const completeCode = `p5sketch.drawingContext.fillStyle = g__;\n`;
  const statementsDo = removeLeadingSpaces(Blockly.JavaScript.statementToCode(block, 'do'));
  const allCode = initCode + statementsDo + completeCode;
  // Wrap in block to protect against g__ being re-used
  return '{\n' + Blockly.JavaScript.prefixLines(allCode, Blockly.JavaScript.INDENT) + '}\n';
});


registerBlock("dom_linearGradient", {
  name: "Linear Gradient Fill",
  color: farbeAussehen,
  tooltip: "Set fill style to a linear gradient",
  fields: {
    x0: "Number",
    y0: "Number",
    x1: "Number",
    y1: "Number",
  },
  allowStatements: true
});


// Also works for other types of gradients
registerBlock("dom_linearGradient_colorStop", {
  name: "addColorStop()",
  color: farbeAussehen,
  tooltip: "Add a color stop to the gradient",
  fields: {
    offset: "Number",
    color: ""
  },
  allowStatements: false
});


defineJS("dom_linearGradient", function ({valueToCode, block}) {
  const x0 = valueToCode("x0");
  const y0 = valueToCode("y0");
  const x1 = valueToCode("x1");
  const y1 = valueToCode("y1");
  const initCode = `let g__ = p5sketch.drawingContext.createLinearGradient(${x0}, ${y0}, ${x1}, ${y1});\n`;
  const completeCode = `p5sketch.drawingContext.fillStyle = g__;\n`;
  const statementsDo = removeLeadingSpaces(Blockly.JavaScript.statementToCode(block, 'do'));
  const allCode = initCode + statementsDo + completeCode;
  // Wrap in block to protect against g__ being re-used
  return '{\n' + Blockly.JavaScript.prefixLines(allCode, Blockly.JavaScript.INDENT) + '}\n';
});

defineJS("dom_linearGradient_colorStop", function ({valueToCode}) {
  const offset = valueToCode("offset");
  const color = valueToCode("color");
  return `g__.addColorStop(${offset}, ${color});\n`;
});

function removeLeadingSpaces(str) {
  return str.replace(/^\s+/gm, '');
}