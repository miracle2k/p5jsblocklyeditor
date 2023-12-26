// Simplify the definition of blocks and fields.

// Converting JSON block definitions to the imperative calls:
// https://github.com/google/blockly/blob/a3053955d3e0889df159e139d82b6eea2b9c9c3a/core/block.ts#L1636

var Blocks = {};

function registerBlock(name, data) {
  Blockly.Blocks[name] = {
    init: function () {
      this.appendDummyInput().appendField(data.name);
      for (const [key, value] of Object.entries(data.fields ?? {})) {
        // Note: 
        //  appendDummyInput has no "connections", just a field.
        //  appendValueInput can connect to other blocks.

        // This is a select box. 
        if (typeof value === "object") {          
          this.appendDummyInput(key).appendField(key).appendField(
            new Blockly.FieldDropdown(Object.entries(value)), key);
        }

        // else if (value == "Var") {
        //   this.appendDummyInput(key).appendField(key).appendField(
        //     new Blockly.FieldVariable('isOn'), key);
        // }
        
        else {
          // value input means you can connect something. the field here is just the label
          this.appendValueInput(key).setCheck(value).appendField(key);
        }        
      }

      data.customRegister?.(this);

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

/**
 * Define the JS code to be generated for a block.
 */
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
    const args = Object.keys(data.fields ?? {}).map((key) => valueToCode(key));
    const code = `${funcname}(${args.join(", ")})`;
    if (data.hasOutput) {
      return [code, Blockly.JavaScript.ORDER_NONE];
    }
    else {
      return code + ';\n';
    }
  });
}

/**
 * Find a block with the given type within the given parent block.
 */
function findChildBlocksWithMatcher(parentBlock, matcher) {
  const blocksFound = [];

  // Helper function for recursion
  function searchBlock(currentBlock) {
      if (!currentBlock) {
          return;
      }

      // Check if the current block is of the desired type
      if (matcher(currentBlock)) {
          blocksFound.push(currentBlock);
      }

      // Iterate over all child blocks
      for (var i = 0; i < currentBlock.childBlocks_.length; i++) {
          searchBlock(currentBlock.childBlocks_[i]);
      }
  }

  // Start the recursion with the root block
  searchBlock(parentBlock);

  return blocksFound;
}

function findBlocksWithMatcher(workspace, matcher) {
  const blocksFound = [];

  // Iterate over all top-level blocks
  for (var i = 0; i < workspace.topBlocks_.length; i++) {
      blocksFound.push(...findChildBlocksWithMatcher(workspace.topBlocks_[i], matcher));
  }

  return blocksFound;
}