export default {
  blocks: ['math_min', 'math_max'],
  code: {
    "blocks": {
        "languageVersion": 0,
        "blocks": [
            {
                "type": "p5_setup",
                "id": "Jl+idA`Ze%ay]8qar*Um",
                "x": 90,
                "y": 90,
                "fields": {
                    "mode": "p5sketch.P2D"
                },
                "inputs": {
                    "width": {
                        "shadow": {
                            "type": "math_number",
                            "id": "Ro?sSesD=c2Nrac+X~y0",
                            "fields": {
                                "NUM": 400
                            }
                        }
                    },
                    "height": {
                        "shadow": {
                            "type": "math_number",
                            "id": "9{GIO;:sYz8Zk]!02{?E",
                            "fields": {
                                "NUM": 400
                            }
                        }
                    },
                    "do": {
                        "block": {
                            "type": "strokeweight_var",
                            "id": "P!^/bBK=Bda0+3*wc%qt",
                            "inputs": {
                                "dicke": {
                                    "shadow": {
                                        "type": "math_number",
                                        "id": "{Ap}6Zc3b#,6Me1n)1sA",
                                        "fields": {
                                            "NUM": 0
                                        }
                                    }
                                }
                            },
                            "next": {
                                "block": {
                                    "type": "fill_pick",
                                    "id": "wK`K@W-4{]jzm1)$H7Cf",
                                    "fields": {
                                        "farbe": "#ff0000"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "type": "draw",
                "id": "hSv5GYB3Lc`L3VdCXsr4",
                "x": 90,
                "y": 290,
                "inputs": {
                    "do": {
                        "block": {
                            "type": "background_pick",
                            "id": "N(FnONl^I`we7B}+l{$|",
                            "fields": {
                                "farbe": "#ffcccc"
                            },
                            "next": {
                                "block": {
                                    "type": "rect_var",
                                    "id": "0zD(V=KMn~D7`eR.[Y4y",
                                    "inline": false,
                                    "inputs": {
                                        "x": {
                                            "shadow": {
                                                "type": "math_number",
                                                "id": "$u#XtwF;5q?Z.;7bwzH,",
                                                "fields": {
                                                    "NUM": 40
                                                }
                                            }
                                        },
                                        "y": {
                                            "shadow": {
                                                "type": "math_number",
                                                "id": ".1O@gt0[GdEE=hA]8W{@",
                                                "fields": {
                                                    "NUM": 40
                                                }
                                            }
                                        },
                                        "breite": {
                                            "shadow": {
                                                "type": "math_number",
                                                "id": "[|89y)[ZzNpsUMo3s8H|",
                                                "fields": {
                                                    "NUM": 100
                                                }
                                            },
                                            "block": {
                                                "type": "math_min",
                                                "id": "Pm|C9g~E;EMV6t,zWVeI",
                                                "inputs": {
                                                    "a": {
                                                        "shadow": {
                                                            "type": "math_number",
                                                            "id": "+tCM--K~GZ|Av@hh:(3K",
                                                            "fields": {
                                                                "NUM": 0
                                                            }
                                                        },
                                                        "block": {
                                                            "type": "math_arithmetic",
                                                            "id": "`_bhuyHyoFgxz.6/uxtT",
                                                            "fields": {
                                                                "OP": "DIVIDE"
                                                            },
                                                            "inputs": {
                                                                "A": {
                                                                    "shadow": {
                                                                        "type": "math_number",
                                                                        "id": "(ijN_B}UJ6Nx/O?Qcf%;",
                                                                        "fields": {
                                                                            "NUM": 1
                                                                        }
                                                                    },
                                                                    "block": {
                                                                        "type": "zeit_millis",
                                                                        "id": "F+l^!9m,B5Vp?6@^4.lB"
                                                                    }
                                                                },
                                                                "B": {
                                                                    "shadow": {
                                                                        "type": "math_number",
                                                                        "id": "Bup2^suFWghTUVT(qr==",
                                                                        "fields": {
                                                                            "NUM": 10
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "b": {
                                                        "shadow": {
                                                            "type": "math_number",
                                                            "id": "8t;tV{fJnn~lLkc;4J3(",
                                                            "fields": {
                                                                "NUM": 200
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        },
                                        "hoehe": {
                                            "shadow": {
                                                "type": "math_number",
                                                "id": "RXs3z}3hhMj5x;@=Ki};",
                                                "fields": {
                                                    "NUM": 100
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
    }
}
}