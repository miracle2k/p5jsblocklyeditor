var color = "#0bd4c7";

registerBlock("qr_renderCode", {
  name: "Draw QR Code",
  color,
  tooltip: "Generate a QR code from the given text, draw each module",
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
    .appendField(new Blockly.FieldVariable('moduleType'), 'moduleType')
    .appendField(new Blockly.FieldVariable('x'), 'x')
    .appendField(new Blockly.FieldVariable('y'), 'y');
  },
  allowStatements: true
});

// Example of how to emit code that uses variables:
// https://github.com/google/blockly/blob/925a7b9723ac46217c64a1842668fd0a66549449/generators/javascript/loops.js#L65
defineJS("qr_renderCode", ({valueToCode, block}) => {
  const text = valueToCode("data");
  const statements_do = Blockly.JavaScript.prefixLines(Blockly.JavaScript.statementToCode(block, 'do'), Blockly.JavaScript.INDENT + Blockly.JavaScript.INDENT);

  // There is a new version of doing this in future versions: 
  // https://github.com/google/blockly/issues/6008
  const varIsOn = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('value'), "VARIABLE");
  const varType = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('moduleType'), "VARIABLE");
  const varX = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('x'), "VARIABLE");
  const varY = Blockly.JavaScript.nameDB_.getName(block.getFieldValue('y'), "VARIABLE");

  return `{
  const __qrCodeData = window.qr(${text}, {
    correction: "${valueToCode("correction")}",
    version: ${valueToCode("version")},
  });
  __qrCodeData.forEach((_row, _y) => {
    _row.forEach((_value, _x) => {
      /* internal */ [${varType}, ${varIsOn}] = _value; ${varX} = _x; ${varY} = _y;

${statements_do}
    });
  });
}`;
});


registerBlock("qr_createCode", {
  name: "Create QR Code",
  color,
  tooltip: "Generate a QR code from the given text, store in variable",
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
  hasOutput: true
});

defineJS("qr_createCode", ({valueToCode, block}) => {
  return [`window.qr(${valueToCode("data")}, {correction: "${valueToCode("correction")}", version: ${valueToCode("version")}})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerBlock("qr_getSize", {
  name: "QRCode: Get Size",
  color,
  tooltip: "Return the size of the qr code stored in the given variable",
  fields: {
    qrcode: "",    
  },
  hasOutput: true
});

defineJS("qr_getSize", ({valueToCode, block}) => {
  return [`${valueToCode("qrcode")}.length`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerBlock("qr_getModuleValue", {
  name: "QRCode: On?",
  color,
  tooltip: "Get the on/off state of the given qr code module",
  fields: {
    qrcode: "",
    x: "Number",
    y: "Number",

  },
  hasOutput: true
});

defineJS("qr_getModuleValue", ({valueToCode, block}) => {
  return [`${valueToCode("qrcode")}[${valueToCode("y")}-1]?.[${valueToCode("x")}-1]?.[1]`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

registerBlock("qr_getModuleType", {
  name: "QRCode: Module Type",
  color,
  tooltip: "Get the module type of the given qr code module",
  fields: {
    qrcode: "",
    x: "Number",
    y: "Number",

  },
  hasOutput: true
});

defineJS("qr_getModuleType", ({valueToCode, block}) => {
  return [`${valueToCode("qrcode")}[${valueToCode("y")}-1]?.[${valueToCode("x")}-1]?.[0]`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
});

////////// Below is the IDE UX integration


let qrScannerInterval;

function startStopQRCodeScanner() {
  let canvas = document.querySelector('#defaultCanvas0');  

  if (qrScannerInterval) {
    window.clearInterval(qrScannerInterval);
  }

  qrScannerInterval = window.setInterval(() => {
    testQRCode(canvas);
  }, 1700);
}

function testQRCode(canvas) {  
  const ctx = canvas.getContext("2d", {willReadFrequently: true});
  if (!ctx?.getImageData) {
    // Not a 2D canvas
    return;
  }
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const decoded = jsQR(imageData.data, imageData.width, imageData.height);
  const isValid = !!decoded;
  
  const resultEl = document.getElementById('evaluation-result');
  if (isValid) {
    resultEl.innerHTML = '✅ QR Code detected';
  }
  else {
    resultEl.innerHTML = '❌ No QR Code detected';
  }
}