
// Pt 2021 - MIT-License

//Category: Basic shapes
Blockly.Blocks['ellipse_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ellipse");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x =");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y =");
    this.appendValueInput("breite")
        .setCheck("Number")
        .appendField("width =");
    this.appendValueInput("hoehe")
        .setCheck("Number")
        .appendField("height =");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Draw an ellipse");
 this.setHelpUrl("https://p5js.org/reference/#/p5/ellipse");
  }
};

Blockly.JavaScript['ellipse_var'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_breite = Blockly.JavaScript.valueToCode(block, 'breite', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hoehe = Blockly.JavaScript.valueToCode(block, 'hoehe', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.ellipse(' + value_x + ', ' + value_y + ', ' + value_breite + ', ' + value_hoehe + ');\n';
  return code;
};

Blockly.Blocks['point_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Point");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x =");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y =");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Draw a point");
 this.setHelpUrl("https://p5js.org/reference/#/p5/point");
  }
};

Blockly.JavaScript['point_var'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.point(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['line_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1 =");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1 =");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("| x2 =");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2 =");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
    this.setTooltip("Draw a line");
    this.setHelpUrl("https://p5js.org/reference/#/p5/line");
  }
};

Blockly.JavaScript['line_var'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.line(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ');\n';
  return code;
};

registerFunctionCall("p5_bezier", "p5sketch.bezier", {
  name: "bezier()",
  color: "#e67e22",
  tooltip: "Draw a bezier curve",
  hasOutput: false,
  fields: {
    x1: "Number",
    y1: "Number",
    cp1x: "Number",
    cp1y: "Number",
    cp2x: "Number",
    cp2y: "Number",
    x2: "Number",
    y2: "Number",
  }
});

Blockly.Blocks['triangle_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Triangle");
    this.appendValueInput("x1")
        .setCheck("Number")
        .appendField("x1 =");
    this.appendValueInput("y1")
        .setCheck("Number")
        .appendField("y1 =");
    this.appendValueInput("x2")
        .setCheck("Number")
        .appendField("| x2 =");
    this.appendValueInput("y2")
        .setCheck("Number")
        .appendField("y2 =");
    this.appendValueInput("x3")
        .setCheck("Number")
        .appendField("| x3 =");
    this.appendValueInput("y3")
        .setCheck("Number")
        .appendField("y3 =");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
    this.setTooltip("Draw a triangle");
    this.setHelpUrl("https://p5js.org/reference/#/p5/triangle");
  }
};

Blockly.JavaScript['triangle_var'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_x3 = Blockly.JavaScript.valueToCode(block, 'x3', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y3 = Blockly.JavaScript.valueToCode(block, 'y3', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.triangle(' + value_x1 + ', ' + value_y1 + ', ' + value_x2 + ', ' + value_y2 + ', ' + value_x3 + ', ' + value_y3 + ');\n';
  return code;
};

registerFunctionCall("p5_rect", "p5sketch.rect", {
  name: "rect()",
  color: "#e67e22",
  tooltip: "Draw a rectangle with round corners",
  isInline: false,
  fields: {
    x: "Number",
    y: "Number",
    w: "Number",
    h: "Number",
    tl: "Number",
    tr: "Number",
    br: "Number",
    bl: "Number",
  }
});


Blockly.Blocks['rect_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Rectangle");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x =");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y =");
    this.appendValueInput("breite")
        .setCheck("Number")
        .appendField("width =");
    this.appendValueInput("hoehe")
        .setCheck("Number")
        .appendField("height =");        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
    this.setTooltip("Ein Rechteck zeichnen");
    this.setHelpUrl("https://p5js.org/reference/#/p5/rect");
  }
};

Blockly.JavaScript['rect_var'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_breite = Blockly.JavaScript.valueToCode(block, 'breite', Blockly.JavaScript.ORDER_ATOMIC);
  var value_hoehe = Blockly.JavaScript.valueToCode(block, 'hoehe', Blockly.JavaScript.ORDER_ATOMIC); 
  var code = 'p5sketch.rect(' + value_x + ', ' + value_y + ', ' + value_breite + ', ' + value_hoehe + ');\n';
  return code;
};

Blockly.Blocks['polygon'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("custom shape")
    this.appendStatementInput("vertices")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);        
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Ein Vieleck zeichnen.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/endShape");
  }    
};

Blockly.JavaScript['polygon'] = function(block) {
    let statementTemp = [];
    var define_blocks =  block.getInputTargetBlock('vertices');
    if(define_blocks)
     do { 
        let tempString1 = Blockly.JavaScript.blockToCode(define_blocks, true);
        statementTemp.push(tempString1);
      } while (define_blocks = define_blocks.getNextBlock());
    let codeString = 'p5sketch.beginShape();\n';
    for (let i = 0; i < statementTemp.length; i++) {
        codeString += '  ' + statementTemp[i];
    }
    codeString += 'p5sketch.endShape(p5sketch.CLOSE);\n';
    return codeString;    
};

Blockly.Blocks['vertex_var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("vertex()");
    this.appendValueInput("x")
        .setCheck("Number")
        .appendField("x");
    this.appendValueInput("y")
        .setCheck("Number")
        .appendField("y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Eine Ecke des Polygons festlegen.");
 this.setHelpUrl("https://p5js.org/reference/#/p5/vertex");
  }
};

Blockly.JavaScript['vertex_var'] = function(block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'p5sketch.vertex(' + value_x + ', ' + value_y + ');\n';
  return code;
};

Blockly.Blocks['rgb_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0, 0, 255, 1), "rgbnum");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['rgb_num'] = function(block) {
  var number_rgbnum = block.getFieldValue('rgbnum');
  var code = number_rgbnum;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['winkel_num'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldAngle(90), "winkel");
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['winkel_num'] = function(block) {
  var angle_winkel = block.getFieldValue('winkel');
  var code = angle_winkel;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['p5_image_load'] = {
  init: function() {
    this.appendValueInput("imgVar")
        .appendField("load image:");
    this.appendDummyInput()
        .appendField(" | image in base64:");
    this.appendValueInput("imgString")
        .setCheck("String")        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Das Bild muss im Base64-Format codiert werden. Konvertier-Tools gibt es Online.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['p5_image_load'] = function(block) {
  var value_imgVar = Blockly.JavaScript.valueToCode(block, 'imgVar', Blockly.JavaScript.ORDER_ATOMIC);
  var value_imgString = Blockly.JavaScript.valueToCode(block, 'imgString', Blockly.JavaScript.ORDER_ATOMIC);  
  var code = '  ' + value_imgVar + ' = p5sketch.loadImage(' + value_imgString + ');\n';
  return code;
};

Blockly.Blocks['p5_image_pos'] = {
  init: function() {
    this.appendValueInput("imgVar")
        .appendField("image:");
    this.appendValueInput("xKoord")
        .setCheck("Number")
        .appendField(" | position: x =");
    this.appendValueInput("yKoord")
        .setCheck("Number")
        .appendField("y =");        
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(farbeVarGrundformen);
 this.setTooltip("Ein Bild wird positioniert.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['p5_image_pos'] = function(block) {
  var value_imgVar = Blockly.JavaScript.valueToCode(block, 'imgVar', Blockly.JavaScript.ORDER_ATOMIC);
  var value_xkoord = Blockly.JavaScript.valueToCode(block, 'xKoord', Blockly.JavaScript.ORDER_ATOMIC);
  var value_ykoord = Blockly.JavaScript.valueToCode(block, 'yKoord', Blockly.JavaScript.ORDER_ATOMIC);    
  var code = 'p5sketch.image(' + value_imgVar + ', ' + value_xkoord + ', ' + value_ykoord + ');\n';
  return code;
};