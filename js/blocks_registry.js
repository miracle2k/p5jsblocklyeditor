// Simplify the definition of blocks and fields.

var Blocks = {};

function registerBlock(name, data) {
  Blockly.Blocks[name] = {
    init: function () {
      this.appendDummyInput().appendField(data.name);
      for (const [key, value] of Object.entries(data.fields ?? {})) {
        if (typeof value === "object") {
          // this is a select box. dummy input has no "connections", just a field
          this.appendDummyInput(key).appendField(key).appendField(
            new Blockly.FieldDropdown(Object.entries(value)), key);
        }
        else {
          // value input means you can connect something. the field here is just the label
          this.appendValueInput(key).setCheck(value).appendField(key);
        }        
      }

      if (data.allowStatements) {
        this.appendStatementInput("do").setCheck(null);
      }

      this.setInputsInline(data.isInline ?? true);
      this.setOutput(data.hasOutput ?? false, null)
      this.setPreviousStatement(data.allowPrevious ?? !data.hasOutput, null);
      this.setNextStatement(data.allowNext ?? !data.hasOutput, null);      
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
      valueToCode: (name) => {
        const fieldValue = block.getFieldValue(name);

        // We overlay v input fields, so a single valueToCode call can return both types.
        // Their names should not overlap.
        if (fieldValue) {
            // For now, we assume that each field is a constant value.
            return `${fieldValue}`;
        }

        return Blockly.JavaScript.valueToCode(block, name, Blockly.JavaScript.ORDER_ATOMIC);
      },
    });
  }
}

function registerFunctionCall(name, funcname, data) {
  registerBlock(name, data);
  defineJS(name, function ({valueToCode}) {
    const args = Object.keys(data.fields).map((key) => valueToCode(key));
    const code = `${funcname}(${args.join(", ")})`;
    if (data.hasOutput) {
      return [code, Blockly.JavaScript.ORDER_NONE];
    }
    else {
      return code + ';\n';
    }
  });
}