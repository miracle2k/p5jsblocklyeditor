export default {
  blocks: [
    "translate_var", "p5_random"],
  code: {
    "blocks": {
        "languageVersion": 0,
        "blocks": [
            {
                "type": "math_arithmetic",
                "id": "+_Ql.Cxvnmm7WS+ryg}m",
                "x": -30,
                "y": 30,
                "fields": {
                    "OP": "ADD"
                },
                "inputs": {
                    "A": {
                        "shadow": {
                            "type": "math_number",
                            "id": "@b+L.rSS9Ek`];r};6Zj",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    },
                    "B": {
                        "shadow": {
                            "type": "math_number",
                            "id": "j)v-xN`ie33^[XD-aDdv",
                            "fields": {
                                "NUM": 1
                            }
                        }
                    }
                }
            },
            {
                "type": "draw",
                "id": "$n~I6kefqsgy,E4y54HF",
                "x": -50,
                "y": 250,
                "inputs": {
                    "do": {
                        "block": {
                            "type": "moduloframe",
                            "id": "qlzpY*hRz!.{Ym@4`Ku`",
                            "fields": {
                                "modulonumber": 1
                            },
                            "inputs": {
                                "do": {
                                    "block": {
                                        "type": "background_pick",
                                        "id": "He=6^CS?/6|K+hJQGB8p",
                                        "fields": {
                                            "farbe": "#ffffff"
                                        }
                                    }
                                }
                            },
                            "next": {
                                "block": {
                                    "type": "p5_randomSeed",
                                    "id": "wGJ7EQ+!*E$LIpR@}ar@",
                                    "inputs": {
                                        "seed": {
                                            "shadow": {
                                                "type": "math_number",
                                                "id": ":~pXpwIl3iA~i]ucf;#s",
                                                "fields": {
                                                    "NUM": 999999
                                                }
                                            },
                                            "block": {
                                                "type": "variables_get",
                                                "id": "Nuy5GZ0_a|A:VvxZ_.)/",
                                                "fields": {
                                                    "VAR": {
                                                        "id": "pL3yVUU_vhd8/5o_-9)_"
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    "next": {
                                        "block": {
                                            "type": "translate_var",
                                            "id": "%CWmbFR.NMMv#.aF;1D5",
                                            "inputs": {
                                                "deltaX": {
                                                    "block": {
                                                        "type": "math_number",
                                                        "id": "eufPSfZfO)/*3rr)IeqX",
                                                        "fields": {
                                                            "NUM": 100
                                                        }
                                                    }
                                                },
                                                "deltaY": {
                                                    "block": {
                                                        "type": "math_number",
                                                        "id": ".lE-Ww.1ST_9s^A1A%~h",
                                                        "fields": {
                                                            "NUM": 100
                                                        }
                                                    }
                                                }
                                            },
                                            "next": {
                                                "block": {
                                                    "type": "qr_makeCode",
                                                    "id": "e@,0Dp_Js5OP$+(FQGb%",
                                                    "fields": {
                                                        "correction": "L",
                                                        "value": {
                                                            "id": "*hId@FN.OK0;enO_`UT!"
                                                        },
                                                        "moduleType": {
                                                            "id": "B6a]jgum!0KRVPW8/J?{"
                                                        },
                                                        "x": {
                                                            "id": "WqK~%(q3ovgFs;]m{pUr"
                                                        },
                                                        "y": {
                                                            "id": "~EPT-QivXJwr@-sQVT_a"
                                                        }
                                                    },
                                                    "inputs": {
                                                        "data": {
                                                            "shadow": {
                                                                "type": "text",
                                                                "id": "To;1pzVh-U~jzQsX$z8m",
                                                                "fields": {
                                                                    "TEXT": "hello"
                                                                }
                                                            }
                                                        },
                                                        "version": {
                                                            "shadow": {
                                                                "type": "math_number",
                                                                "id": "L*7~FcqF=paNM2dKKx/t",
                                                                "fields": {
                                                                    "NUM": 1
                                                                }
                                                            }
                                                        },
                                                        "do": {
                                                            "block": {
                                                                "type": "push_pop",
                                                                "id": "!/TFnUS!yeU|3AstARvd",
                                                                "inputs": {
                                                                    "do": {
                                                                        "block": {
                                                                            "type": "translate_var",
                                                                            "id": "CK1vNZfsu_,*~P;LW5JP",
                                                                            "inputs": {
                                                                                "deltaX": {
                                                                                    "block": {
                                                                                        "type": "math_arithmetic",
                                                                                        "id": "GuFqmIG~Cbql(ysra(g,",
                                                                                        "fields": {
                                                                                            "OP": "MULTIPLY"
                                                                                        },
                                                                                        "inputs": {
                                                                                            "A": {
                                                                                                "shadow": {
                                                                                                    "type": "math_number",
                                                                                                    "id": "ncWC.-BPNGh-Sw1/PZ0/",
                                                                                                    "fields": {
                                                                                                        "NUM": 1
                                                                                                    }
                                                                                                },
                                                                                                "block": {
                                                                                                    "type": "variables_get",
                                                                                                    "id": "d@c}wbKx.G_oK`6m@|K[",
                                                                                                    "fields": {
                                                                                                        "VAR": {
                                                                                                            "id": "WqK~%(q3ovgFs;]m{pUr"
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "B": {
                                                                                                "shadow": {
                                                                                                    "type": "math_number",
                                                                                                    "id": "zluPCEJJ~3:F6L?HDwmO",
                                                                                                    "fields": {
                                                                                                        "NUM": 20
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                },
                                                                                "deltaY": {
                                                                                    "block": {
                                                                                        "type": "math_arithmetic",
                                                                                        "id": ".s_Z2H8*r|?ZcckGIVsc",
                                                                                        "fields": {
                                                                                            "OP": "MULTIPLY"
                                                                                        },
                                                                                        "inputs": {
                                                                                            "A": {
                                                                                                "shadow": {
                                                                                                    "type": "math_number",
                                                                                                    "id": "m^=vdEOGw!TcZ%$MpxD/",
                                                                                                    "fields": {
                                                                                                        "NUM": 1
                                                                                                    }
                                                                                                },
                                                                                                "block": {
                                                                                                    "type": "variables_get",
                                                                                                    "id": "=iwZN;m8w97h4jfQ~,SZ",
                                                                                                    "fields": {
                                                                                                        "VAR": {
                                                                                                            "id": "~EPT-QivXJwr@-sQVT_a"
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            },
                                                                                            "B": {
                                                                                                "shadow": {
                                                                                                    "type": "math_number",
                                                                                                    "id": ":+Dc|9rKI+YIjhGgMeVV",
                                                                                                    "fields": {
                                                                                                        "NUM": 20
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            },
                                                                            "next": {
                                                                                "block": {
                                                                                    "type": "strokeweight_var",
                                                                                    "id": "dYq/CI;fZ|HeAr7NAV$)",
                                                                                    "inputs": {
                                                                                        "dicke": {
                                                                                            "shadow": {
                                                                                                "type": "math_number",
                                                                                                "id": "Y:x)n+q{Z?xZNU#^-u,e",
                                                                                                "fields": {
                                                                                                    "NUM": 0
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    },
                                                                                    "next": {
                                                                                        "block": {
                                                                                            "type": "controls_if",
                                                                                            "id": "XosBId9zq.oA49([-m}k",
                                                                                            "inputs": {
                                                                                                "IF0": {
                                                                                                    "block": {
                                                                                                        "type": "variables_get",
                                                                                                        "id": "5y5)oea,$q5Nk3DpR|2h",
                                                                                                        "fields": {
                                                                                                            "VAR": {
                                                                                                                "id": "*hId@FN.OK0;enO_`UT!"
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                },
                                                                                                "DO0": {
                                                                                                    "block": {
                                                                                                        "type": "controls_if",
                                                                                                        "id": "JAICW/C*$JuH4v.@1T2f",
                                                                                                        "extraState": {
                                                                                                            "hasElse": true
                                                                                                        },
                                                                                                        "inputs": {
                                                                                                            "IF0": {
                                                                                                                "block": {
                                                                                                                    "type": "logic_compare",
                                                                                                                    "id": "8@E,RL]H?4jcHc0qywVp",
                                                                                                                    "fields": {
                                                                                                                        "OP": "EQ"
                                                                                                                    },
                                                                                                                    "inputs": {
                                                                                                                        "A": {
                                                                                                                            "block": {
                                                                                                                                "type": "variables_get",
                                                                                                                                "id": "1A7yka)yhrCQ%v9.f@q=",
                                                                                                                                "fields": {
                                                                                                                                    "VAR": {
                                                                                                                                        "id": "B6a]jgum!0KRVPW8/J?{"
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        },
                                                                                                                        "B": {
                                                                                                                            "block": {
                                                                                                                                "type": "text",
                                                                                                                                "id": "bk}y~K~d=04zs{*E[JiI",
                                                                                                                                "fields": {
                                                                                                                                    "TEXT": "probe"
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            },
                                                                                                            "DO0": {
                                                                                                                "block": {
                                                                                                                    "type": "fill_pick",
                                                                                                                    "id": "`t)Ptp*.k]3ABkwR2KI/",
                                                                                                                    "fields": {
                                                                                                                        "farbe": "#000000"
                                                                                                                    },
                                                                                                                    "next": {
                                                                                                                        "block": {
                                                                                                                            "type": "rect_var",
                                                                                                                            "id": "crZ^9.Q-?*Y![di-%.)M",
                                                                                                                            "inputs": {
                                                                                                                                "x": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "IYv40[(yQWq-?(7O+Pj8",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 0
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "y": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "Q|Oi8{Z$*IR.|`IK:W?f",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 0
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "breite": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "N*{qozvWWbfSfk#spJS[",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 20
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "hoehe": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "k):oYM4()}-bVe`4pykk",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 20
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            },
                                                                                                            "ELSE": {
                                                                                                                "block": {
                                                                                                                    "type": "fill_pick",
                                                                                                                    "id": "xi1MCk0r@4^V9zu)fXW}",
                                                                                                                    "fields": {
                                                                                                                        "farbe": "#000000"
                                                                                                                    },
                                                                                                                    "next": {
                                                                                                                        "block": {
                                                                                                                            "type": "ellipse_var",
                                                                                                                            "id": "A}A]kCLv`,-80PdS[JeJ",
                                                                                                                            "inputs": {
                                                                                                                                "x": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "+7YHH.`Co|2,n-`Y%$_g",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 5
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "y": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "Jv0W6yPxO6!=`ATz`rWr",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 5
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "breite": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "AifcYZ$%.}@m0y:K$dnP",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 10
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                },
                                                                                                                                "hoehe": {
                                                                                                                                    "shadow": {
                                                                                                                                        "type": "math_number",
                                                                                                                                        "id": "+4Hwh=i]0?{~t~,f;`,$",
                                                                                                                                        "fields": {
                                                                                                                                            "NUM": 10
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
            },
            {
                "type": "p5_setup",
                "id": "oPGQ3PhELK.=xrCC8Qzj",
                "x": -50,
                "y": 150,
                "fields": {
                    "mode": "p5sketch.P2D"
                },
                "inputs": {
                    "width": {
                        "shadow": {
                            "type": "math_number",
                            "id": "62w-|vuB3acc-2s8V.]%",
                            "fields": {
                                "NUM": 700
                            }
                        }
                    },
                    "height": {
                        "shadow": {
                            "type": "math_number",
                            "id": "T%93lZ7S9#(Fc7UoH[66",
                            "fields": {
                                "NUM": 700
                            }
                        }
                    },
                    "do": {
                        "block": {
                            "type": "variables_set",
                            "id": "Lj%HdzUS^-1Ki#(YjRhm",
                            "fields": {
                                "VAR": {
                                    "id": "pL3yVUU_vhd8/5o_-9)_"
                                }
                            },
                            "inputs": {
                                "VALUE": {
                                    "block": {
                                        "type": "p5_random",
                                        "id": "%wA3[}[Uto~/r+CxI/nx",
                                        "inputs": {
                                            "z1": {
                                                "shadow": {
                                                    "type": "math_number",
                                                    "id": "P7)-x%T]~)G,n{z+Y2rW",
                                                    "fields": {
                                                        "NUM": 0
                                                    }
                                                }
                                            },
                                            "z2": {
                                                "shadow": {
                                                    "type": "math_number",
                                                    "id": "d{(Zxo$N_1Qs3ZcN7kKA",
                                                    "fields": {
                                                        "NUM": 99999999
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
            "name": "isOn",
            "id": "*hId@FN.OK0;enO_`UT!"
        },
        {
            "name": "x",
            "id": "WqK~%(q3ovgFs;]m{pUr"
        },
        {
            "name": "y",
            "id": "~EPT-QivXJwr@-sQVT_a"
        },
        {
            "name": "isOn2",
            "id": "(0)K`;1{B5!8|l4uR9Z_"
        },
        {
            "name": "x2",
            "id": "@G%0Yc{oqx;G3}/|#Nb{"
        },
        {
            "name": "y2",
            "id": "vh_[@DV?6-hNgKp)m_@g"
        },
        {
            "name": "moduleType",
            "id": "B6a]jgum!0KRVPW8/J?{"
        },
        {
            "name": "animX",
            "id": ",ViP#R;s4rSm|eu:tIVy"
        },
        {
            "name": "animY",
            "id": "w17j/mGaG-w~QW87~RW*"
        },
        {
            "name": "i",
            "id": "4)wCOGl~jC1?_=UR-b6)"
        },
        {
            "name": "j",
            "id": "~@B7Edd).eI*:~7;X=aq"
        },
        {
            "name": "seed",
            "id": "pL3yVUU_vhd8/5o_-9)_"
        }
    ]
}
}