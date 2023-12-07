registerBlock("qr_makeCode", {
  name: "QR Code",
  color,
  tooltip: "Generate a QR code from the given text",
  fields: {
    data: "String",
    version: "Number",
    correction: {
      'L': 'L',
      'M': 'M',
      'Q': 'Q',
      'H': 'H',
    }
  },
  customRegister: (block) => {
    block.appendDummyInput('vars').appendField("with")
    .appendField(new Blockly.FieldVariable('isOn'), 'value')
    .appendField(new Blockly.FieldVariable('x'), 'x')
    .appendField(new Blockly.FieldVariable('y'), 'y');
  },
  allowStatements: true
});

// Example of how to emit code that uses variables:
// https://github.com/google/blockly/blob/925a7b9723ac46217c64a1842668fd0a66549449/generators/javascript/loops.js#L65
defineJS("qr_makeCode", ({valueToCode, block}) => {
  const text = valueToCode("data");
  const statements_do = Blockly.JavaScript.statementToCode(block, 'do');

  // There is a new version of doing this in future versions: 
  // https://github.com/google/blockly/issues/6008
  const varIsOn = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('value'), "VARIABLE");
  const varX = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('x'), "VARIABLE");
  const varY = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('y'), "VARIABLE");

  return `{
  const _l = window.qr("${text}", {
    correction: "${valueToCode("correction")}",
    version: ${valueToCode("version")},
  });
  _l.forEach((_row, _y) => {
    _row.forEach((_value, _x) => {
    ${varIsOn} = _value;
    ${varX} = _x;
    ${varY} = _y;
    ${statements_do}
    });
  });
}`;
});