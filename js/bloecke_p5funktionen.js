
// Pt 2021 - MIT-License

//Category: p5-Functions
Blockly.Blocks['setup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("setup()");
    this.appendDummyInput()
        .appendField("width")
        .appendField(new Blockly.FieldNumber(startWidth, 0, maxKoord, 1), "canvasWidth")
        .appendField("height")
        .appendField(new Blockly.FieldNumber(startWidth, 0, maxKoord, 1), "canvasHeight");
    this.setInputsInline(true);
// this.setPreviousStatement(false, null);
    // this.setNextStatement(true, null);   
    this.appendStatementInput("do")
        .setCheck(null);
    this.setColour(farbep5SetupDraw);
 this.setTooltip("The setup() function is executed once when the program starts.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/setup");
  }
};

Blockly.JavaScript['setup'] = function(block) {
  var number_breite = block.getFieldValue('canvasWidth');
  var number_hoehe = block.getFieldValue('canvasHeight');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
//var value_varName = Blockly.JavaScript.valueToCode(block, 'canvasVariable', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = 'p5sketch.setup = function() {\n  p5sketch.createCanvas(' + number_breite + ', ' + number_hoehe + ');\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['draw'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("draw()");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5SetupDraw);
    this.setTooltip('The draw() function is constantly repeated.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/draw');
  }
};

Blockly.JavaScript['draw'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.draw = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['preload'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("preload()");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5SetupDraw);
    this.setTooltip('The preload() function is executed to load images.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/preload');
  }
};

Blockly.JavaScript['preload'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.preload = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['mousepressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When mouse pressed");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5Funktionen);
    this.setTooltip('Execute the following instructions when the mouse was clicked.');
    this.setHelpUrl('https://p5js.org/reference/#/p5.Element/mousePressed');
  }
};

Blockly.JavaScript['mousepressed'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.mousePressed = function() {\n' + statements_do + '};\n';
  return code;
};

Blockly.Blocks['keypressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("When key pressed");
    this.appendStatementInput("do")
        .setCheck(null)
    this.setColour(farbep5Funktionen);
    this.setTooltip('Execute the following instructions when a key on the keyboard was pressed.');
    this.setHelpUrl('https://p5js.org/reference/#/p5/keyPressed');
  }
};

Blockly.JavaScript['keypressed'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var code = 'p5sketch.keyPressed = function() {\n' + statements_do + '};\n';
  return code;
}
