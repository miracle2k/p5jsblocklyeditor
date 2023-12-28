export default {
  blocks: [
    "controls_if", "math_number", "controls_flow_statements", "logic_compare", "logic_operation"],
  categories: [
    'variable_category',
  ],
  code: {
    "blocks": {
        "languageVersion": 0,
        "blocks": [
            {
                "type": "p5_setup",
                "id": "s5$.$Wx6$GxcPN]VZDPH",
                "x": 30,
                "y": 150,
                "fields": {
                    "mode": "p5sketch.P2D"
                },
                "inputs": {
                    "width": {
                        "shadow": {
                            "type": "math_number",
                            "id": ";RBCTwMUKR=}g=Ib|5|N",
                            "fields": {
                                "NUM": 500
                            }
                        }
                    },
                    "height": {
                        "shadow": {
                            "type": "math_number",
                            "id": "@:mW;LDRY}qql/4Li1YG",
                            "fields": {
                                "NUM": 500
                            }
                        }
                    },
                    "do": {
                        "block": {
                            "type": "controls_for",
                            "id": "WIPaQoNvj/w,2hx7AwYu",
                            "fields": {
                                "VAR": {
                                    "id": "#`x%JJo?IYgBwVzYtTq["
                                }
                            },
                            "inputs": {
                                "FROM": {
                                    "shadow": {
                                        "type": "math_number",
                                        "id": "kzV1f#Kmb;6z_}oc1Fez",
                                        "fields": {
                                            "NUM": 0
                                        }
                                    }
                                },
                                "TO": {
                                    "shadow": {
                                        "type": "math_number",
                                        "id": "$Xr-e2Kn4}9J2XxzZk;o",
                                        "fields": {
                                            "NUM": 11
                                        }
                                    }
                                },
                                "BY": {
                                    "shadow": {
                                        "type": "math_number",
                                        "id": "%5zP_!9~XM,NwzM3jmV(",
                                        "fields": {
                                            "NUM": 1
                                        }
                                    }
                                },
                                "DO": {
                                    "block": {
                                        "type": "controls_for",
                                        "id": "#Dj/nE#uglpJz~7)M/~c",
                                        "fields": {
                                            "VAR": {
                                                "id": "9Nl`}l!HFYWY6A-^q,F$"
                                            }
                                        },
                                        "inputs": {
                                            "FROM": {
                                                "shadow": {
                                                    "type": "math_number",
                                                    "id": ")yF^Q:E~Y%yVpZmda~]/",
                                                    "fields": {
                                                        "NUM": 0
                                                    }
                                                }
                                            },
                                            "TO": {
                                                "shadow": {
                                                    "type": "math_number",
                                                    "id": "go-T#)}WFXuZ:BTX/00|",
                                                    "fields": {
                                                        "NUM": 11
                                                    }
                                                }
                                            },
                                            "BY": {
                                                "shadow": {
                                                    "type": "math_number",
                                                    "id": "DRwwdJqTZi}~P}v$aK%d",
                                                    "fields": {
                                                        "NUM": 1
                                                    }
                                                }
                                            },
                                            "DO": {
                                                "block": {
                                                    "type": "push_pop",
                                                    "id": "RaYe/+!^lbSA^lH}~deW",
                                                    "inputs": {
                                                        "do": {
                                                            "block": {
                                                                "type": "translate_var",
                                                                "id": "(bvLbQf/lG5DJdfZ0tL]",
                                                                "inline": false,
                                                                "inputs": {
                                                                    "deltaX": {
                                                                        "block": {
                                                                            "type": "math_arithmetic",
                                                                            "id": "A5`O9`-4$2vU%F3*[CPw",
                                                                            "fields": {
                                                                                "OP": "MULTIPLY"
                                                                            },
                                                                            "inputs": {
                                                                                "A": {
                                                                                    "shadow": {
                                                                                        "type": "math_number",
                                                                                        "id": "b60w7sbD;pWIs8w;UHlX",
                                                                                        "fields": {
                                                                                            "NUM": 1
                                                                                        }
                                                                                    },
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "id": "|uR(x:W3!Q3u1xF(0~4l",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "id": "#`x%JJo?IYgBwVzYtTq["
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "B": {
                                                                                    "shadow": {
                                                                                        "type": "math_number",
                                                                                        "id": "on8JDw(n]YVk]6ceFz0%",
                                                                                        "fields": {
                                                                                            "NUM": 1
                                                                                        }
                                                                                    },
                                                                                    "block": {
                                                                                        "type": "math_number",
                                                                                        "id": "wUp%7!H!!Fkv4i},h9d%",
                                                                                        "fields": {
                                                                                            "NUM": 40
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    "deltaY": {
                                                                        "block": {
                                                                            "type": "math_arithmetic",
                                                                            "id": "7|J}0T~VV@GwRn87_?yi",
                                                                            "fields": {
                                                                                "OP": "MULTIPLY"
                                                                            },
                                                                            "inputs": {
                                                                                "A": {
                                                                                    "shadow": {
                                                                                        "type": "math_number",
                                                                                        "id": "b60w7sbD;pWIs8w;UHlX",
                                                                                        "fields": {
                                                                                            "NUM": 1
                                                                                        }
                                                                                    },
                                                                                    "block": {
                                                                                        "type": "variables_get",
                                                                                        "id": "76+M.n=wHtLnYCfQy[{3",
                                                                                        "fields": {
                                                                                            "VAR": {
                                                                                                "id": "9Nl`}l!HFYWY6A-^q,F$"
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "B": {
                                                                                    "shadow": {
                                                                                        "type": "math_number",
                                                                                        "id": "on8JDw(n]YVk]6ceFz0%",
                                                                                        "fields": {
                                                                                            "NUM": 1
                                                                                        }
                                                                                    },
                                                                                    "block": {
                                                                                        "type": "math_number",
                                                                                        "id": "lzihsKQI]=kY()~f~-i?",
                                                                                        "fields": {
                                                                                            "NUM": 40
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                "next": {
                                                                    "block": {
                                                                        "type": "fill_colorname",
                                                                        "id": "KyoJdGPIX=|aerkWVL6k",
                                                                        "inputs": {
                                                                            "farbname": {
                                                                                "block": {
                                                                                    "type": "colour_random",
                                                                                    "id": "8by%(90A%gA]+0pJm/EI"
                                                                                }
                                                                            }
                                                                        },
                                                                        "next": {
                                                                            "block": {
                                                                                "type": "polygon",
                                                                                "id": "}p)2F5s)82plDv|gmH9@",
                                                                                "inputs": {
                                                                                    "vertices": {
                                                                                        "block": {
                                                                                            "type": "p5_curveVertex",
                                                                                            "id": "piBb^[Ja1eQi|rE__cdb",
                                                                                            "inputs": {
                                                                                                "x": {
                                                                                                    "shadow": {
                                                                                                        "type": "math_number",
                                                                                                        "id": "bZP4~8(w/T5YWzEIn{q1",
                                                                                                        "fields": {
                                                                                                            "NUM": 10
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "y": {
                                                                                                    "shadow": {
                                                                                                        "type": "math_number",
                                                                                                        "id": "IjY.@%#X`O:j0dMDs[C_",
                                                                                                        "fields": {
                                                                                                            "NUM": 10
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "next": {
                                                                                                "block": {
                                                                                                    "type": "p5_curveVertex",
                                                                                                    "id": "ftec$)6^KnMqfnA69hQA",
                                                                                                    "inputs": {
                                                                                                        "x": {
                                                                                                            "shadow": {
                                                                                                                "type": "math_number",
                                                                                                                "id": "O.MLGARMFxt$VoqIer2h",
                                                                                                                "fields": {
                                                                                                                    "NUM": 20
                                                                                                                }
                                                                                                            }
                                                                                                        },
                                                                                                        "y": {
                                                                                                            "shadow": {
                                                                                                                "type": "math_number",
                                                                                                                "id": "}DaA$6r(!S9dNs1R~P9I",
                                                                                                                "fields": {
                                                                                                                    "NUM": 30
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    },
                                                                                                    "next": {
                                                                                                        "block": {
                                                                                                            "type": "p5_curveVertex",
                                                                                                            "id": "u|ggYjI2Bx[J|UEuCBsY",
                                                                                                            "inputs": {
                                                                                                                "x": {
                                                                                                                    "shadow": {
                                                                                                                        "type": "math_number",
                                                                                                                        "id": "rHgcY9-:~/m=d86aG(*z",
                                                                                                                        "fields": {
                                                                                                                            "NUM": 30
                                                                                                                        }
                                                                                                                    }
                                                                                                                },
                                                                                                                "y": {
                                                                                                                    "shadow": {
                                                                                                                        "type": "math_number",
                                                                                                                        "id": "FM!}Yf@xo#A(a!Lyk-#)",
                                                                                                                        "fields": {
                                                                                                                            "NUM": 10
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            },
                                                                                                            "next": {
                                                                                                                "block": {
                                                                                                                    "type": "p5_curveVertex",
                                                                                                                    "id": "xt3(6V`xLHmb,wu_C/N9",
                                                                                                                    "inputs": {
                                                                                                                        "x": {
                                                                                                                            "shadow": {
                                                                                                                                "type": "math_number",
                                                                                                                                "id": "K%)(4o1PVQBx37LE3F{|",
                                                                                                                                "fields": {
                                                                                                                                    "NUM": 15
                                                                                                                                }
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "y": {
                                                                                                                            "shadow": {
                                                                                                                                "type": "math_number",
                                                                                                                                "id": "3W07Ue1gnva3.pz56wB@",
                                                                                                                                "fields": {
                                                                                                                                    "NUM": 15
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    },
                                                                                                                    "next": {
                                                                                                                        "block": {
                                                                                                                            "type": "p5_curveVertex",
                                                                                                                            "id": "cR]jHKw)I[eBM1qXh(/L",
                                                                                                                            "inputs": {
                                                                                                                                "x": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "d9to^$y0!U-#?U*w$+5L",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 10
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "y": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "EJG54zM~uKd}@Q-D|*3J",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 30
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    "variables": [
        {
            "name": "i",
            "id": "#`x%JJo?IYgBwVzYtTq["
        },
        {
            "name": "j",
            "id": "9Nl`}l!HFYWY6A-^q,F$"
        }
    ]
}
}