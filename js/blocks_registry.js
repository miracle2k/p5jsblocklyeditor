// Simplify the definition of blocks and fields.

// Converting JSON block definitions to the imperative calls:
// https://github.com/google/blockly/blob/a3053955d3e0889df159e139d82b6eea2b9c9c3a/core/block.ts#L1636

var Blocks = {};

function registerBlock(name, data) {
  Blockly.Blocks[name] = {
    init: function () {
      const numFields = Object.keys(data.fields ?? {}).length;

      // This is the block name
      this.appendDummyInput().appendField(data.name);

      for (const [key, value] of Object.entries(data.fields ?? {})) {
        // Note: 
        //  appendDummyInput has no "connections", just a field.
        //  appendValueInput can connect to other blocks.

        // This is a select box. 
        if (typeof value === "object") {    
          // Old-style select definitions were not very flexible.
          const isNewStyle = isNewStyleSelect(value);
          
          let selectValues;

          if (!isNewStyle) {
            // keys are displayed, values become the the option id, (and
            // are eventually written to the generated code output as-is).
            selectValues = Object.entries(value);
          }

          else {
            // Here, the key is the option id, and the value is a dict with details
            selectValues = Object.entries(value).map(([key, value]) => {
              return [value.label, key];
            });
          }

          this.appendDummyInput(key).appendField(key).appendField(
            new Blockly.FieldDropdown(selectValues), key);
        }

        // else if (value == "Var") {
        //   this.appendDummyInput(key).appendField(key).appendField(
        //     new Blockly.FieldVariable('isOn'), key);
        // }
        
        else {
          // value input means you can connect something. the field here is just the label.          
          let input = this.appendValueInput(key);
          // if not value type is given, allow anything
          if (value) {
            input.setCheck(value);
          }
          // hide the label if there is only one field
          if (numFields > 1) {
            input.appendField(key);
          }          
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
function defineJS(blockId, callback) {
  Blockly.JavaScript[blockId] = function (block) {
    return callback({
      block,
      valueToCode: (name) => {
        let fieldValue = block.getFieldValue(name);

        // We overlay input fields, so a single valueToCode call can return both types.
        // Their names should not overlap.
        if (fieldValue) {
            // Check if this is a select
            const fieldDef = Blocks[blockId]?.fields?.[name];
            if (typeof fieldDef == 'object') {
              if (isNewStyleSelect(fieldDef)) {
                fieldValue = fieldDef[fieldValue].value ?? fieldValue;
                if (fieldDef[fieldValue].type == "string") {
                  fieldValue = `"${fieldValue}"`;
                }
                return fieldValue;
              }
            }

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
      return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
    }
    else {
      return code + ';\n';
    }
  });
}

function isNewStyleSelect(fieldDef) {
  return Object.values(fieldDef).filter(v => typeof v === "object").length > 0;
}

// Mark a select option as a string
function option(value, label) {
  return { type: 'string', label: label ?? value, value };
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

      // skip if block is disabled
      if (!currentBlock.isEnabled()) {
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