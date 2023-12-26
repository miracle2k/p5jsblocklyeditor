
// Pt 2021 - MIT-License

//Category: p5-Functions

var color = "#ed225d";

registerBlock("p5_setup", {
  name: "setup()",
  color,
  tooltip: "The setup() function is executed once when the program starts.",
  helpUrl: "https://p5js.org/reference/#/p5/setup",
  fields: {
    width: "Number",
    height: "Number",
    mode: {
      '2D': "p5sketch.P2D",
      'WebGL': "p5sketch.WEBGL",
    }
  },
  allowStatements: true,
});

defineJS("p5_setup", ({valueToCode, block}) => {
  const width = valueToCode("width");
  const height = valueToCode("height");
  const mode = valueToCode("mode");

  const statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  const hasBrushLib = sketchHasP5BrushBlock(block);
  let brushLibInitCode;
  if (hasBrushLib) {
    brushLibInitCode = `
  // Required to use the p5js.brush library
  brush.load(p5sketch, true);
  p5sketch.translate(-p5sketch.width/2,-p5sketch.height/2);
`
  }

  const setupFuncCode = [
    `  p5sketch.createCanvas(${width}, ${height}, ${mode});`,
    brushLibInitCode,
    statements_do
  ].join('\n\n')

  return `p5sketch.setup = function() {
${setupFuncCode}
};`;
});

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
  const hasBrushLib = sketchHasP5BrushBlock(block);
  const statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  const funcCode = [
    hasBrushLib ? `
  // p5js.brush uses WebGL mode & origin by default is at the center of the canvas.
  // Change it to the top left corner.
  p5sketch.translate(-p5sketch.width/2,-p5sketch.height/2);` : null,
    statements_do
  ].filter(x => !!x).join('\n\n')

  
  const code = `p5sketch.draw = function() {
${funcCode}
};`;
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
