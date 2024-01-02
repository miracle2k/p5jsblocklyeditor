
function number(x) {
  return {
    "shadow": {
      "type": "math_number",
      "fields": {
        "NUM": x ?? 0
      }
    }
  }
}

function string(x) {
  return {
    "shadow": {
      "type": "text",
      "fields": {
        "TEXT": x
      }
    }
  }
}

function color(x) {
  return {
    "shadow": {
      "type": "colour_picker",
      "fields": {
        "COLOUR": x ?? "#000000"
      }
    }
  }
}

function blockref(type) {
  return {
    "shadow": {
      "type": type
    }
  }
}

/**
 * Return a toolbox entry for the given block id with default defaults for 
 * each field.
 */
function block(id, opts) {
  const blockDef = Blocks[id];
  if (!blockDef) {
    throw new Error(`Unknown block ${id}`);
  }
  const inputs = {};
  for (const [name, dataType] of Object.entries(blockDef.fields ?? {})) {
    let def;
    switch (dataType) {
      case "Number":
        def = number(blockDef.defaults?.[name]);
        break;
      case "String":
        def = string();
        break;
      case "Colour":
        def = color();
        break;
      default:
        continue;
    }

    inputs[name] = def;
  }

  if (opts?.inputs) {
    for (const [name, def] of Object.entries(opts.inputs)) {
      inputs[name] = def;
    }
  }

  return {
    "kind": "block", 
    "type": id, 
    "inputs": inputs
  }
}



// https://github.com/google/blockly/issues/4464#issuecomment-1261879532
var NewToolbox = {
  "kind": "categoryToolbox",
  "contents": [
    {
      "kind": "category",
      "name": "p5 Structure",
      "colour": "#929292",
      "contents": [
        block('p5_setup'),
        {
          "kind": "block",
          "type": "p5_setup",          
        },
        {
          "kind": "block",
          "type": "draw"
        },
        {
          "kind": "block",
          "type": "preload"
        },
        {
          "kind": "block",
          "type": "mousepressed"
        },
        {
          "kind": "block",
          "type": "keypressed"
        },
        block('qr_makeCode')
      ]
    },

    {
      "kind": "category",
      "name": "p5 Values",
      "colour": "#2f7db7",
      "contents": [
        {"kind": "block", "type": "canvaswidth"},
        {"kind": "block", "type": "canvasheight"},
        {"kind": "block", "type": "mousex"},
        {"kind": "block", "type": "mousey"},
        {"kind": "block", "type": "pmousex"},
        {"kind": "block", "type": "pmousey"},
        {"kind": "block", "type": "p5key"},
        {"kind": "block", "type": "p5keyCode"},        
        {"kind": "block", "type": "mouse_pressed"},        
        // {"kind": "block", "type": "uhrzeit_digital"},
        // {"kind": "block", "type": "uhrzeit_stunde"},
        // {"kind": "block", "type": "uhrzeit_minute"},
        // {"kind": "block", "type": "uhrzeit_sekunde"},
        {"kind": "block", "type": "zeit_millis"},
        {"kind": "block", "type": "map_value"},
        // {
        //   "kind": "block",
        //   "type": "entfernung_var",        
        // },
        // ... Other blocks continue in a similar pattern
      ]
    },

    {
      "kind": "category",
      "name": "p5 Helpers",
      "colour": "#da5a73",
      "contents": [
        {"kind": "block", "type": "moduloframe"},
        {"kind": "block", "type": "framerate_number"},
        block("p5_randomSeed"),
        {"kind": "block", "type": "p5_random", 
          "inputs": {
            "z1": number(0),
            "z2": number(0),
          }
        },
        block("p5_noiseSeed"),
        {"kind": "block", "type": "p5_noise", 
          "inputs": {
            "input": number(0),
          }},
        block('p5_noise2d'),
        {"kind": "block", "type": "push_pop"},
        {"kind": "block", "type": "translate_var"},
        {"kind": "block", "type": "rotate_var"},
        {"kind": "block", "type": "scale_var"},
        {"kind": "block", "type": "p5_button"},
        block("p5_degrees"),
        block("p5_radians"),
        block("p5_angleMode"),
        block("p5_rectMode"),
      ]
    },

    {
      "kind": "category",
      "name": "p5: Basic Shapes",
      "colour": "#e67e22",
      "contents": [
        {
          "kind": "block",
          "type": "ellipse_var",
          "inputs": {
            "x": number(0),
            "y": number(0),
            "breite": number(0),
            "hoehe": number(0),
          }
        },
        {
          "kind": "block",
          "type": "point_var",
          "inputs": {
            "x": number(0),
            "y": number(0),
          }
        },
        {
          "kind": "block",
          "type": "line_var",
          "inputs": {
            "x1": number(0),
            "y1": number(0),
            "x2": number(0),
            "y2": number(0),
          }
        },
        {
          "kind": "block",
          "type": "triangle_var",
          "inputs": {
            "x1": number(0),
            "y1": number(0),
            "x2": number(0),
            "y2": number(0),
            "x3": number(0),
            "y3": number(0),
          }
        },
        {
          "kind": "block",
          "type": "rect_var",
          "inputs": {
            "x": number(0),
            "y": number(0),
            "breite": number(0),
            "hoehe": number(0),
          }
        },
        block('p5_rect'),
        {"kind": "block", "type": "polygon"},
        {
          "kind": "block",
          "type": "vertex_var",
          "inputs": {
            "x": number(0),
            "y": number(0),
          }
        },
        block('p5_curveVertex'),
        block('p5_bezierVertex'),
        {
          "kind": "block",
          "type": "p5_image_load"
        },
        {
          "kind": "block",
          "type": "p5_image_pos"
        }
      ]
    },
    {
      "kind": "category",
      "name": "p5: Colors & Visuals",
      "colour": "#95a5a6",
      "contents": [
        {
          "kind": "block",
          "type": "p5_color",
          "inputs": {
            "r": number(0),
            "g": number(0),
            "b": number(0),
            "t": number(0),
          }
        },
        {"kind": "block", "type": "background_pick"},
        {
          "kind": "block",
          "type": "background_colorname"
        },
        {
          "kind": "block",
          "type": "background_var",
          "inputs": {
            "r": number(0),
            "g": number(0),
            "b": number(0)
          }
        },
        {"kind": "block", "type": "stroke_pick"},
        {
          "kind": "block",
          "type": "stroke_colorname"
        },
        {
          "kind": "block",
          "type": "stroke_var",
          "inputs": {
            "r": number(0),
            "g": number(0),
            "b": number(0),
            "t": number(0),
          }
        },
        {"kind": "block", "type": "fill_pick"},
        {
          "kind": "block",
          "type": "fill_colorname"
        },
        {
          "kind": "block",
          "type": "fill_var",
          "inputs": {
            "r": number(0),
            "g": number(0),
            "b": number(0),
            "t": number(0),
          }
        },
        {"kind": "block", "type": "nofill"},
        {
          "kind": "block",
          "type": "strokeweight_var",
          "inputs": {
            "dicke": number(0)
          }
        },
        block('dom_linearGradient'),
        block('dom_linearGradient_colorStop'),
      ]
    },
    {
      "kind": "category",
      "name": "p5: Text",
      "colour": "#5ba58c",
      "contents": [
        {"kind": "block", "type": "p5textalign"},
        {"kind": "block", "type": "text"},
        {"kind": "block", "type": "text_unicodezeichen"},
        {
          "kind": "block",
          "type": "p5text_var"
        },
        {
          "kind": "block",
          "type": "p5textbox_var"
        },
        {
          "kind": "block",
          "type": "p5textsize_var"
        },
        {
          "kind": "block",
          "type": "anzeige_stellen"
        },
        {"kind": "block", "type": "text_join"},
        {
          "kind": "block",
          "type": "text_length"
        },
        {
          "kind": "block",
          "type": "zeichen_an_stelle_aus_string"
        },
        {
          "kind": "block",
          "type": "string_in_ganzzahl"
        },
        {
          "kind": "block",
          "type": "text_changeCase"
        },
        {
          "kind": "block",
          "type": "text_input"
        }
      ]
    },

    {
      "kind": "category",
      "name": "Logic",
      "contents": [
        {
          "kind": "block",
          "type": "controls_if"
        },
        {
          "kind": "block",
          "type": "logic_compare"
        },
        {
          "kind": "block",
          "type": "logic_operation"
        },
        {
          "kind": "block",
          "type": "logic_negate"
        },
        {
          "kind": "block",
          "type": "logic_boolean"
        },
        {
          "kind": "block",
          "type": "logic_null"
        },
        {
          "kind": "block",
          "type": "logic_ternary"
        }
      ],
      "categorystyle": "logic_category"
    },
    

    {
      "kind": "category",
      "name": "Loops",
      "contents": [
        {
          "kind": "block",
          "type": "controls_repeat_ext",
          "inputs": {
            "TIMES": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "10"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "controls_whileUntil"
        },
        {
          "kind": "block",
          "type": "controls_for",
          "inputs": {
            "FROM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            },
            "TO": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "10"
                }
              }
            },
            "BY": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "controls_forEach"
        },
        {
          "kind": "block",
          "type": "controls_flow_statements"
        }
      ],
      "categorystyle": "loop_category"
    },
    {
      "kind": "category",
      "name": "Math",
      "contents": [
        {
          "kind": "block",
          "type": "math_number",
          "fields": {
            "NUM": "123"
          }
        },
        {
          "kind": "block",
          "type": "math_arithmetic",
          "inputs": {
            "A": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            },
            "B": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_single",
          "inputs": {
            "NUM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "9"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_trig",
          "inputs": {
            "NUM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "45"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_constant"
        },
        {
          "kind": "block",
          "type": "math_number_property",
          "inputs": {
            "NUMBER_TO_CHECK": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "0"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_round",
          "inputs": {
            "NUM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "3.1"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_on_list"
        },
        {
          "kind": "block",
          "type": "math_modulo",
          "inputs": {
            "DIVIDEND": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "64"
                }
              }
            },
            "DIVISOR": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "10"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_constrain",
          "inputs": {
            "VALUE": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "50"
                }
              }
            },
            "LOW": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            },
            "HIGH": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "100"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_random_int",
          "inputs": {
            "FROM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            },
            "TO": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "100"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "math_random_float"
        },
        {
          "kind": "block",
          "type": "math_atan2",
          "inputs": {
            "X": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            },
            "Y": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "1"
                }
              }
            }
          }
        },
        block("math_min"),
        block("math_max"),
        block("math_sin"),
        block('x_math_cycle', {
          inputs: {
            time: blockref("zeit_millis"),
            start: number(0),
            end: number(1),
            duration: number(1000),
          }
        })
      ],
      "categorystyle": "math_category"
    },
    {
      "kind": "category",
      "name": "Text",
      "contents": [
        {
          "kind": "block",
          "type": "text"
        },
        {
          "kind": "block",
          "type": "text_join"
        },
        {
          "kind": "block",
          "type": "text_append",
          "inputs": {
            "TEXT": {
              "shadow": {
                "type": "text"
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_length",
          "inputs": {
            "VALUE": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_isEmpty",
          "inputs": {
            "VALUE": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": null
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_indexOf",
          "inputs": {
            "VALUE": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{textVariable}"
                }
              }
            },
            "FIND": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_charAt",
          "inputs": {
            "VALUE": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{textVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_getSubstring",
          "inputs": {
            "STRING": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{textVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_changeCase",
          "inputs": {
            "TEXT": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_trim",
          "inputs": {
            "TEXT": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_print",
          "inputs": {
            "TEXT": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "text_prompt_ext",
          "inputs": {
            "TEXT": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": "abc"
                }
              }
            }
          }
        }
      ],
      "categorystyle": "text_category"
    },
    {
      "kind": "category",
      "name": "Lists",
      "contents": [
        {
          "kind": "block",
          "type": "lists_create_with",
          "extraState": {
            "itemCount": "0"
          }
        },
        {
          "kind": "block",
          "type": "lists_create_with"
        },
        {
          "kind": "block",
          "type": "lists_repeat",
          "inputs": {
            "NUM": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "5"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_length"
        },
        {
          "kind": "block",
          "type": "lists_isEmpty"
        },
        {
          "kind": "block",
          "type": "lists_indexOf",
          "inputs": {
            "VALUE": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{listVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_getIndex",
          "inputs": {
            "VALUE": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{listVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_setIndex",
          "inputs": {
            "LIST": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{listVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_getSublist",
          "inputs": {
            "LIST": {
              "block": {
                "type": "variables_get",
                "fields": {
                  "VAR": "{listVariable}"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_split",
          "inputs": {
            "DELIM": {
              "shadow": {
                "type": "text",
                "fields": {
                  "TEXT": ","
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "lists_sort"
        }
      ],
      "categorystyle": "list_category"
    },
    {
      "kind": "category",
      "name": "Colour",
      "contents": [
        {
          "kind": "block",
          "type": "colour_picker"
        },
        {
          "kind": "block",
          "type": "colour_random"
        },
        {
          "kind": "block",
          "type": "colour_rgb",
          "inputs": {
            "RED": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "100"
                }
              }
            },
            "GREEN": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "50"
                }
              }
            },
            "BLUE": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "0"
                }
              }
            }
          }
        },
        {
          "kind": "block",
          "type": "colour_blend",
          "inputs": {
            "COLOUR1": {
              "shadow": {
                "type": "colour_picker",
                "fields": {
                  "COLOUR": "#ff0000"
                }
              }
            },
            "COLOUR2": {
              "shadow": {
                "type": "colour_picker",
                "fields": {
                  "COLOUR": "#3333ff"
                }
              }
            },
            "RATIO": {
              "shadow": {
                "type": "math_number",
                "fields": {
                  "NUM": "0.5"
                }
              }
            }
          }
        },
        block('hsbToRgb')
      ],
      "categorystyle": "colour_category"
    },    
    {
      "kind": "sep"
    },
    {
      "kind": "category",
      "name": "3D",
      "colour": "#5ba57f",
      "contents": [
        block("p5_ortho"),
        block("p5_normalMaterial"),
        block("p5_ambientMaterial"),
        block("p5_specularMaterial"),
        block("p5_ambientLight"),
        block("p5_pointLight"),
        block("p5_orbitControl"),
        block("p5_box"),
        block("p5_sphere"),
        block("p5_translate_z"),
        block("p5_rotateX"),
        block("p5_rotateY"),
        block("p5_rotateZ"),
      ]
    },
    {
      "kind": "category",
      "name": "Brushes",
      "colour": "#92967D",
      "contents": [
        block("brush_set"),
        block("brush_pick"),      
        block("brush_stroke"),
        block("brush_nostroke"),
        block("brush_strokeweight"),

        block("brush_fill"),

        block("brush_line"),
        block("brush_flowline"),
        block("brush_rect"),
      ]
    },
    {
      "kind": "sep"
    },
    {
      "kind": "category",
      "name": "Functions",
      "colour": "%{BKY_PROCEDURES_HUE}",
      "custom": "PROCEDURE"
    },
    {
      "kind": "category",
      "name": "Variables",
      "contents": [],
      "custom": "VARIABLE",
      "categorystyle": "variable_category"
    },
    {
      "kind": "category",
      "name": "Functions",
      "contents": [],
      "custom": "PROCEDURE",
      "categorystyle": "procedure_category"
    }
  ],
}

function filterToolbox(toolbox, blockTypes, categoryTypes) {
  // Create a new toolbox object
  let filteredToolbox = {
    kind: toolbox.kind,
    contents: []
  };

  // Iterate over each category in the toolbox
  toolbox.contents.forEach(category => {
    if (category.kind === "category") {
      console.log(category?.categorystyle, categoryTypes)
      if (categoryTypes?.indexOf(category.categorystyle) > -1) {
        filteredToolbox.contents.push({
          ...category,
        });
      }
      else {
        // Filter the blocks in the category based on the blockTypes argument
        let filteredContents = category.contents?.filter(block => {
          return blockTypes.includes(block.type);
        });

        // Add the category to the filtered toolbox if it has any blocks left
        if (filteredContents?.length > 0) {
          filteredToolbox.contents.push({
            ...category,
            contents: filteredContents
          });
        }
      }
    }
  });

  return filteredToolbox;
}


// {
//   "kind": "category",
//   "name": "js-Liste",
//   "colour": "%{BKY_LISTS_HUE}",
//   "contents": [
//     {"kind": "block", "type": "lists_create_with"},
//     {"kind": "block", "type": "lists_repeat"},
//     {"kind": "block", "type": "lists_length"},
//     {"kind": "block", "type": "lists_isEmpty"},
//     {"kind": "block", "type": "lists_indexOf"},
//     {"kind": "block", "type": "lists_getIndex"},
//     {"kind": "block", "type": "lists_setIndex"},
//     {"kind": "block", "type": "lists_getSublist"},
//     {"kind": "block", "type": "lists_split"},
//     {"kind": "block", "type": "lists_sort"},
//     {"kind": "block", "type": "lists_reverse"}
//   ]
// },

// {
//   "kind": "category",
//   "name": "ADT Stapel",
//   "colour": "#92967D",
//   "contents": [
//     {"kind": "block", "type": "adt_stack_neu"},
//     {"kind": "block", "type": "adt_stack_isEmpty"},
//     {"kind": "block", "type": "adt_stack_top"},
//     {"kind": "block", "type": "adt_stack_push"},
//     {"kind": "block", "type": "adt_stack_pop"},
//     {"kind": "block", "type": "adt_stack_getStack"}
//   ]
// },
// {
//   "kind": "category",
//   "name": "ADT Schlange",
//   "colour": "#6E7C7C",
//   "contents": [
//     {"kind": "block", "type": "adt_queue_neu"},
//     {"kind": "block", "type": "adt_queue_isEmpty"},
//     {"kind": "block", "type": "adt_queue_head"},
//     {"kind": "block", "type": "adt_queue_enqueue"},
//     {"kind": "block", "type": "adt_queue_dequeue"},
//     {"kind": "block", "type": "adt_queue_getQueue"}
//   ]
// },
// {
//   "kind": "category",
//   "name": "ADT Dyn. Reihung",
//   "colour": "#435560",
//   "contents": [
//     {"kind": "block", "type": "adt_dynArray_neu"},
//     {"kind": "block", "type": "adt_dynArray_isEmpty"},
//     {"kind": "block", "type": "adt_dynArray_getItem"},
//     {"kind": "block", "type": "adt_dynArray_append"},
//     {"kind": "block", "type": "adt_dynArray_insertAt"},
//     {"kind": "block", "type": "adt_dynArray_setItem"},
//     {"kind": "block", "type": "adt_dynArray_delete"},
//     {"kind": "block", "type": "adt_dynArray_getLength"},
//     {"kind": "block", "type": "adt_dynArray_getDynArray"}
//   ]
// },
// {
//   "kind": "category",
//   "name": "ADT BinTree",
//   "colour": "#55414b",
//   "contents": [
//     {"kind": "block", "type": "adt_binaerBaum_neu"},
//     {"kind": "block", "type": "adt_binaerBaum_inhalteinfuegen"},
//     {"kind": "block", "type": "adt_binaerBaum_inhaltentfernen"},
//     {"kind": "block", "type": "adt_binaerBaum_maxTiefe"},
//     {"kind": "block", "type": "adt_binaerBaum_gewichten"},
//     {"kind": "block", "type": "adt_binaerBaum_bDrucker"}
//   ]
// }

// {
//   "kind": "category",
//   "name": "OOP",
//   "colour": "#d2b48c",
//   "contents": [
//     {"kind": "block", "type": "klasse_anlegen"},
//     {"kind": "block", "type": "klasse_attribut"},
//     {"kind": "block", "type": "klasse_getattribut"},
//     {"kind": "block", "type": "klasse_methode"},
//     {"kind": "block", "type": "methode_parameter"},
//     {"kind": "block", "type": "methode_getparameter"},
//     {"kind": "block", "type": "objekt_anlegen"},
//     {"kind": "block", "type": "objekt_methode_aufrufen"},
//     {"kind": "block", "type": "objekt_wert"},
//     {"kind": "block", "type": "attribut_aendern"}
//   ]
// }