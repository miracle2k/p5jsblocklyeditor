// Pt 2021 - MIT-License

var p5jsBlocklyEditorToolbox = `
<xml id="toolbox" style="display: none">    
    <category name="Grundformen" colour="#e67e22">
      <block type="ellipse_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="point_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
      </block>
      <block type="line_var">
        <value name="x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="triangle_var">
        <value name="x1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y1">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="x2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y2">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="x3">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y3">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="rect_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>      
      </block>   
      <block type="polygon"></block> 
      <block type="vertex_var">
        <value name="x">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="y">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
      </block> 
      <block type="p5_image_load">
        <value name="imgVar">
          <block type="variables_get">
            <field name="VAR">imgVar</field>
          </block>
        </value>
        <value name="imgString">
          <shadow type="text">
            <field name="TEXT">base64</field>
          </shadow>
        </value>
      </block> 
      <block type="p5_image_pos">
        <value name="imgVar">
          <block type="variables_get">
            <field name="VAR">imgVar</field>
          </block>
        </value>
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>      
      </category>    
      <category name="Aussehen" colour="#95a5a6">
      <block type="p5_color">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>        
      <block type="background_pick"></block>
      <block type="background_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>
      <block type="background_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
      </block>       
      <block type="stroke_pick"></block> 
      <block type="stroke_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>      
      <block type="stroke_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>      
      <block type="fill_pick"></block>
      <block type="fill_colorname">
        <value name="farbname">
          <shadow type="text">
            <field name="TEXT">SteelBlue</field>
          </shadow>
        </value>        
      </block>        
      <block type="fill_var">
        <value name="r">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="g">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>       
        <value name="b">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>
        <value name="t">
          <shadow type="rgb_num">
            <field name="rgbnum">0</field>
          </shadow>
        </value>        
      </block>
      <block type="nofill"></block>        
      <block type="strokeweight_var">
        <value name="dicke">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value> 
      </block>
      </category>     
      <category name="Text" colour="#5ba58c">
      <block type="p5textalign"></block>
      <block type="text"></block>
      <block type="text_unicodezeichen"></block>
      <block type="p5text_var">
        <value name="text_eingabe">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="p5textbox_var">
        <value name="text_eingabe">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="hoehe">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="p5textsize_var">
        <value name="text_groesse">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="anzeige_stellen">
        <value name="zahl">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="anzahlstellen">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>      
      <block type="text_join"></block>
      <block type="text_length">
        <value name="VALUE">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="zeichen_an_stelle_aus_string">
        <value name="zeichenfolge">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
        <value name="stelle">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>         
      </block>
      <block type="string_in_ganzzahl">
        <value name="zeichenfolge">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>       
      <block type="text_changeCase">
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">abc</field>
          </shadow>
        </value>
      </block>
      <block type="text_input">
        <value name="textFeldVariable">
          <block type="variables_get">
            <field name="VAR">eingabefeld</field>
          </block>
        </value>        
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>      
        <value name="speicherVariable">
          <block type="variables_get">
            <field name="VAR">textVar</field>
          </block>
        </value>
          <value name="zeichenflaecheVariable">
            <block type="variables_get">
              <field name="VAR">zeichenflaeche</field>
            </block>
          </value>         
      </block>
    </category> 
    <category name="Werte" colour="#2f7db7">
        <block type="p5key"></block>
        <block type="p5keyCode"></block>
        <block type="mousex"></block>
        <block type="mousey"></block>
        <block type="pmousex"></block>
        <block type="pmousey"></block>        
        <block type="mouse_pressed"></block>
        <block type="canvaswidth"></block>
        <block type="canvasheight"></block>
        <block type="uhrzeit_digital"></block>
        <block type="uhrzeit_stunde"></block>        
        <block type="uhrzeit_minute"></block>
        <block type="uhrzeit_sekunde"></block>
        <block type="zeit_millis"></block>
        <block type="entfernung_var">
          <value name="x1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value> 
          <value name="x2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="y2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>        
        </block>
        <block type="map_value">
          <value name="w1min">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="w1max">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value> 
          <value name="w2min">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="w2max">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>         
        </block>        
    </category>
    <category name="p5-Helfer" colour="#da5a73">
        <block type="moduloframe"></block>
        <block type="framerate_number"></block>        
        <block type="p5_random">
          <value name="z1">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="z2">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>          
        </block>
        <block type="p5_noise"></block>          
        <block type="push_pop"></block>
        <block type="translate_var">
          <value name="deltaX">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
          <value name="deltaY">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>
        </block>
        <block type="rotate_var">
          <value name="winkel">
            <shadow type="winkel_num">
              <field name="winkel">0</field>
            </shadow>
          </value>         
        </block>
        <block type="scale_var">
          <value name="faktor">
            <shadow type="math_number">
              <field name="NUM">0</field>
            </shadow>
          </value>          
        </block>
      <block type="p5_button">
        <value name="buttonVariable">
          <block type="variables_get">
            <field name="VAR">button1</field>
          </block>
        </value>        
        <value name="xKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yKoord">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="breite">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
          <value name="zeichenflaecheVariable">
            <block type="variables_get">
              <field name="VAR">zeichenflaeche</field>
            </block>
          </value>         
      </block>
    </category>     
    <category name="p5-Funktionen" colour="#ed225d">
        <block type="setup">
          <value name="zeichenflaecheVariable">
              <block type="variables_get">
                <field name="VAR">zeichenflaeche</field>
              </block>
            </value>          
        </block>
        <block type="draw"></block>
        <block type="preload"></block>
        <block type="mousepressed"></block>
        <block type="keypressed"></block>
    </category>
    <sep></sep>
    <category name="Variablen" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>    
    <category name="Schleifen" colour="%{BKY_LOOPS_HUE}">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
    </category>    
    <category name="Logik" colour="%{BKY_LOGIC_HUE}">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
    </category>
    <category name="Mathematik" colour="%{BKY_MATH_HUE}">
        <block type="math_number"></block>
        <block type="math_arithmetic">
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="decToBin">
          <value name="ganzZahl">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="binToDec">
          <value name="binZahl">
            <shadow type="math_number">
              <field name="NUM">1010</field>
            </shadow>
          </value>
        </block> 
        <block type="decToHex">
          <value name="ganzZahl">
            <shadow type="math_number">
              <field name="NUM">10</field>
            </shadow>
          </value>
        </block>
        <block type="hexToDec">
          <value name="hexZahl">
            <shadow type="text">
              <field name="TEXT">1f</field>
            </shadow>
          </value>
        </block>         
        <block type="math_single">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_trig">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant"></block>
        <block type="math_number_property">
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
    </category>
    <sep></sep>
    <category name="js-Funktionen" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>  
    <category name="js-Liste" colour="%{BKY_LISTS_HUE}">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
      <block type="lists_repeat">
        <value name="NUM">
          <shadow type="math_number">
            <field name="NUM">5</field>
          </shadow>
        </value>
      </block>
      <block type="lists_length"></block>
      <block type="lists_isEmpty"></block>
      <block type="lists_indexOf">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_getIndex">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_setIndex">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_getSublist">
        <value name="LIST">
          <block type="variables_get">
            <field name="VAR">liste</field>
          </block>
        </value>
      </block>
      <block type="lists_split">
        <value name="DELIM">
          <shadow type="text">
            <field name="TEXT">,</field>
          </shadow>
        </value>
      </block>
      <block type="lists_sort"></block>
      <block type="lists_reverse"></block>
    </category> 
    <sep></sep> 
    <category name="ADT Stapel" colour="#92967D">
      <block type="adt_stack_neu">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_stack_isEmpty">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_stack_top">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_stack_push">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_stack_pop">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_stack_getStack">
        <value name="stackVariable">
          <block type="variables_get">
            <field name="VAR">stapelVar</field>
          </block>
        </value>           
      </block>       
    </category>
    <category name="ADT Schlange" colour="#6E7C7C">
      <block type="adt_queue_neu">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_queue_isEmpty">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_queue_head">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_queue_enqueue">
        <value name="VALUE">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_queue_dequeue">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>  
      <block type="adt_queue_getQueue">
        <value name="queueVariable">
          <block type="variables_get">
            <field name="VAR">schlangeVar</field>
          </block>
        </value>           
      </block>       
    </category>    
    <category name="ADT Dyn. Reihung" colour="#435560">
      <block type="adt_dynArray_neu">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_dynArray_isEmpty">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>       
      <block type="adt_dynArray_getItem">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>  
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>        
      </block>
      <block type="adt_dynArray_append">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_dynArray_insertAt">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block> 
      <block type="adt_dynArray_setItem">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="AT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>         
      </block>  
      <block type="adt_dynArray_delete">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>
        <value name="idx">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_dynArray_getLength">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>  
      <block type="adt_dynArray_getDynArray">
        <value name="dynArrayVariable">
          <block type="variables_get">
            <field name="VAR">dynArrayVar</field>
          </block>
        </value>           
      </block>        
    </category> 
    <category name="ADT BinTree" colour="#55414b">
      <block type="adt_binaerBaum_neu">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_binaerBaum_inhalteinfuegen">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>
        <value name="neuesElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_binaerBaum_inhaltentfernen">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>
        <value name="entfElement">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>          
      </block>  
      <block type="adt_binaerBaum_maxTiefe">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block>
      <block type="adt_binaerBaum_gewichten">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>           
      </block> 
      <block type="adt_binaerBaum_bDrucker">
        <value name="binBaumVariable">
          <block type="variables_get">
            <field name="VAR">binaerBaumVar</field>
          </block>
        </value>       
        <value name="xT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
        <value name="yT">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>       
        <value name="dX">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>          
      </block>              
    </category> 
    <sep></sep>             
    <category name="OOP" colour="#d2b48c">
        <block type="klasse_anlegen"></block>
        <block type="klasse_attribut"></block> 
        <block type="klasse_getattribut"></block> 
        <block type="klasse_methode"></block> 
        <block type="methode_parameter"></block>
        <block type="methode_getparameter"></block> 
        <block type="objekt_anlegen">
          <value name="objektVariable">
            <block type="variables_get">
              <field name="VAR">objektVar</field>
            </block>
          </value>           
        </block>
        <block type="objekt_methode_aufrufen">
          <value name="objektVariable">
            <block type="variables_get">
              <field name="VAR">objektVar</field>
            </block>
          </value>           
        </block>         
        <block type="objekt_wert"></block>
        <block type="attribut_aendern"></block>
    </category>      
    </xml>
`

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

/**
 * Return a toolbox entry for the given block id with default defaults for 
 * each field.
 */
function block(id, opts) {
  const blockDef = Blocks[id];
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
        {"kind": "block", "type": "polygon"},
        {
          "kind": "block",
          "type": "vertex_var",
          "inputs": {
            "x": number(0),
            "y": number(0),
          }
        },
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
        }
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
        }
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
        }
      ],
      "categorystyle": "colour_category"
    },
    {
      "kind": "category",
      "name": "Functions",
      "colour": "%{BKY_PROCEDURES_HUE}",
      "custom": "PROCEDURE"
    },
    {
      "kind": "sep"
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
    }
  ],
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