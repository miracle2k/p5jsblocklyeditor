var farbep5Helfer = "#da5a73";

//Kategorie: p5-Helfer
Blockly.Blocks['moduloframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Only every")
        .appendField(new Blockly.FieldNumber(0, 1, 10000, 1), "modulonumber")
        .appendField("Frames execute:");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Instructions are only executed after a certain number of frames.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['moduloframe'] = function(block) {
  var number_modulonumber = block.getFieldValue('modulonumber');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'if (p5sketch.frameCount%' + number_modulonumber + ' == 0) {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['framerate_number'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Frames per second:")
        .appendField(new Blockly.FieldNumber(0, 0, 100, 1), "framerate");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Sets the frame rate.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/frameRate");
  }
};

Blockly.JavaScript['framerate_number'] = function(block) {
  var number_framerate = block.getFieldValue('framerate');
  var code = 'p5sketch.frameRate(' + number_framerate + ');\n';
  return code;
};

Blockly.Blocks['p5_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Random number between:");
    this.appendValueInput("z1")
        .setCheck("Number");
    this.appendValueInput("z2")
        .setCheck("Number")
        .appendField("and");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Returns a random decimal number between the specified limits.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/random");
  }
};

Blockly.JavaScript['p5_random'] = function(block) {
  var value_z1 = Blockly.JavaScript.valueToCode(block, 'z1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z2 = Blockly.JavaScript.valueToCode(block, 'z2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.random(' + value_z1 + ', ' + value_z2 + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_noise'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Noise random number:");
    this.appendValueInput("input")
        .setCheck(null);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Returns a noise random number.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/random");
  }
};

Blockly.JavaScript['p5_noise'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.noise(' + value_input + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['push_pop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("push - new drawing status");
    this.appendStatementInput("do")
        .setCheck(null);
    this.appendDummyInput()
        .appendField("pop - end status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("All changes apply only in this block");
 this.setHelpUrl("https://p5js.org/reference/#/p5/push");
  }
};
Blockly.JavaScript['push_pop'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.push();\n' + statements_do + 'p5sketch.pop();\n';
  return code;
};

registerFunctionCall("translate_var", "p5sketch.translate", {
  name: "translate()",
  color: farbep5Helfer,
  tooltip: "Shifts all subsequent objects by the specified number of pixels.",
  helpUrl: "https://p5js.org/reference/#/p5/translate",
  fields: {
    deltaX: "Number",
    deltaY: "Number",
  }
});


Blockly.Blocks['rotate_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rotation");
    this.appendValueInput("winkel")
        .setCheck("Number")
        .appendField("by angle:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Rotates all subsequent objects by the specified angle counterclockwise (degree measure).");
 this.setHelpUrl("https://p5js.org/reference/#/p5/rotate");
  }
};

Blockly.JavaScript['rotate_var'] = function(block) {
  var value_winkel = Blockly.JavaScript.valueToCode(block, 'winkel', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.rotate(' + value_winkel + ');\n';
  return code;
};

Blockly.Blocks['scale_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Magnification");
    this.appendValueInput("faktor")
        .setCheck("Number")
        .appendField("by:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Enlarges all subsequent objects by the specified factor.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/scale");
  }
};

Blockly.JavaScript['scale_var'] = function(block) {
  var value_faktor = Blockly.JavaScript.valueToCode(block, 'faktor', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.scale(' + value_faktor + ');\n';
  return code;
};

Blockly.Blocks['p5_button'] = {
  init: function() {
    this.appendDummyInput()
    this.appendValueInput("buttonVariable")
        .appendField("Button: ");
    this.appendDummyInput()
        .appendField("| Label: ")
        .appendField(new Blockly.FieldTextInput("label1"), "beschriftung")
    this.appendValueInput("xKoord")
        .setCheck("Number")
        .appendField("| x =");
    this.appendValueInput("yKoord")
        .setCheck("Number")
        .appendField("y =");
    this.appendValueInput("breite")
        .setCheck("Number")
        .appendField("| Width:");
    this.appendDummyInput()
        .appendField("| Method: ")
        .appendField(new Blockly.FieldTextInput("method1"), "methodenaufruf")
    this.appendValueInput("zeichenflaecheVariable")
        .appendField("|");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbep5Helfer);
 this.setTooltip("Button to call a method.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['p5_button'] = function(block) {
  var value_buttonVariable = Blockly.JavaScript.valueToCode(block, 'buttonVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xkoord = Blockly.JavaScript.valueToCode(block, 'xKoord', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ykoord = Blockly.JavaScript.valueToCode(block, 'yKoord', Blockly.JavaScript.ORDER_ATOMIC);
  var value_breite = Blockly.JavaScript.valueToCode(block, 'breite', Blockly.JavaScript.ORDER_ATOMIC);
  var value_methodenaufruf = block.getFieldValue('methodenaufruf');
  var value_beschriftung = block.getFieldValue('beschriftung');
  var value_canvasvarName = Blockly.JavaScript.valueToCode(block, 'zeichenflaecheVariable', Blockly.JavaScript.ORDER_ATOMIC);
  var code = value_buttonVariable + ' = p5sketch.createButton("' + value_beschriftung + '");\n' + value_buttonVariable + '.position(' + value_canvasvarName + '.position().x+' + value_xkoord + ', ' + value_canvasvarName + '.position().y+' + value_ykoord + ');\n' + value_buttonVariable + '.size(' + value_breite + ');\n' + value_buttonVariable + '.class(\"btn btn-secondary btn-sm\");\n' + value_buttonVariable + '.mousePressed(' + value_methodenaufruf + ');\n';
  return code;
}
