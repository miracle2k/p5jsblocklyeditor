// Pt 2021 - MIT-License

var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');

var canvasWidth = 0;
var canvasHeight = 0;
    
var startWidth = 0.3*$(window).width();
var maxKoord = $(window).width();     

var farbep5SetupDraw = "#ed225d";
var farbep5Funktionen = "#ed225d";
var farbep5Helfer = "#da5a73";
var farbeGrundformen = "#e67e22";
var farbeVarGrundformen = "#e67e22";
var farbeAussehen = "#95a5a6";
var farbep5Werte = "#2f7db7";
var farbep5Text = "#5ba58c";
var farbeObjekte = "#d2b48c";
var farbeKommentar = "#073763";
var farbeTurtle = "#006400";
var farbeMathe = "#5b67a5";

var workspace = Blockly.inject(blocklyDiv, {
            collapse: true,
            comments: true,
            css: true,
            disable: true,
            grid: {
                spacing: 20,
                length: 1,
                colour: '#888',
                snap: true
            },   
            horizontalLayout: false,            
            maxBlocks: Infinity,
            media: 'media/',
            move: {
                scrollbars: {
                    horizontal: true,
                    vertical: true
                },
                drag: true,
                wheel: true
            },
            oneBasedIndex: true,
            readOnly: false,
            rtl: false,
            scrollbars: true,
            toolbox: NewToolbox,
            toolboxPosition: 'start',            
            trashcan: true,
            sounds: true,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1,
                maxScale: 3,
                minScale: 0.3,
                scaleSpeed: 1.02
            } 
        });

//Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);

var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    let p5Hoehe = canvasHeight+100;
    if (blocklyArea.offsetHeight > p5Hoehe) {
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    } else {
      blocklyDiv.style.height = p5Hoehe + 'px';
    } 
    Blockly.svgResize(workspace);
};

let splitInstance = Split(['#split-0', '#split-1'], {
        minSize: [300, 10],
        snapOffset: 80,
        gutterSize: 20,
    })

let observer = new ResizeObserver(function(mutations) {
    onresize();
    Blockly.svgResize(workspace);
});

let child = document.getElementById('split-0');
observer.observe(child, { attributes: true });

window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

var myp5;

/**
 * Re-run the sketch based on the current code.
 */
function updateP5() {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    
    if (sketchHasP5BrushBlock(workspace)) {
      window.loadBrushLibrary(window.brush = {});
      brush.installLibrary();
    }
    else {
      if (typeof brush !== 'undefined') {
        brush?.uninstallLibrary();
      }
    }
  
    // remove old
    document.getElementById('p5jsContainer').innerHTML = "";
    if (myp5) {
      myp5.remove();
    }

    // add new
    try {
        var sketch = new Function("p5sketch", code);
        myp5 = new p5(sketch, 'p5jsContainer'); 
    } catch (e) { 
        $('#loggerDiv').removeClass('alert alert-light').addClass('alert alert-danger');
        $("#loggerDiv").css("max-width", "400px");
        let text01 = '<strong>There is an error in the code:<\/strong><br><br>' + e.toString() + '<hr>With "right click -> undo" you can undo your latest changes.'
        document.getElementById('loggerDiv').innerHTML = text01;
        console.error(e);
    }

    // autosize
    const canvas = document.querySelector('#defaultCanvas0');
    const canvasWidth = canvas.width / 2;
    const canvasHeight = canvas.height / 2;
    document.getElementById('p5jsContainer').style.width = canvasWidth;
    document.getElementById('p5jsContainer').style.height = canvasHeight;    
    document.getElementById('p5jsContainer').setAttribute("style", "width: " + canvasWidth + "px; height: " + canvasHeight + "px;");

    let linksProzent = (canvasWidth+25)/$(window).width() * 100;
    let rechtsProzent = 100-linksProzent;
    splitInstance.setSizes([linksProzent, rechtsProzent]);
    onresize();
    Blockly.svgResize(workspace);

    // start qr code scanning (if qr code block is used)
    startStopQRCodeScanner();
}

function viewFlems() {
    let codeInstance = Blockly.JavaScript.workspaceToCode(workspace);
    let code = codeInstance.replaceAll("p5sketch.", "");
    let codeToSave = code.replaceAll("p5sketch, ", "");
    //dreifache neue Zeile ersetzen
    codeToSave = codeToSave.replace(/\n\s*\n\s*\n/g, '\n\n');
    if(!codeToSave.includes('new p5();')) {
      codeToSave = codeToSave + '\nnew p5();';
    }    
    window.localStorage.setItem("codeLocalStorage", codeToSave);  
    window.open("p5jsflems/index.html",'_blank');
}

function viewCode() {
    let codeInstance = Blockly.JavaScript.workspaceToCode(workspace);
    // Make it nicer
    let code = codeInstance.replaceAll("p5sketch.", "")
      .replaceAll("p5sketch, ", "")
      .replaceAll("setup = function()", "function setup()")
      .replaceAll("draw = function()", "function draw()");

    //dreifache neue Zeile ersetzen
    code = code.replace(/\n\s*\n\s*\n/g, '\n\n');   
    let codeDiv = document.getElementById('codeDiv');
    let htmlImport = Prism.highlight(code, Prism.languages.javascript, 'javascript');
    codeDiv.innerHTML = htmlImport;
}

/**
 * Needs to run once at document init time.
 */
async function p5Init(disableLoad) {
    Blockly.mainWorkspace.clear();
    const allVariables = Blockly.mainWorkspace.getAllVariables();
    allVariables.forEach(function(variable) {
      Blockly.mainWorkspace.deleteVariableById(variable.getId());
    });
    //Blockly.mainWorkspace.updateToolbox(Blockly.mainWorkspace.toolbox);
    
    Blockly.mainWorkspace.addChangeListener(() => {
      if (Blockly.mainWorkspace.isDragging()) return; // Don't update while changes are happening.

      // save to local storage
      console.log('save to local storage')
      let json = Blockly.serialization.workspaces.save(Blockly.mainWorkspace);
      window.localStorage.setItem("jsonLocalStorage", JSON.stringify(json));
    });

    if (!disableLoad) {
      let urlString = window.location.hash.slice(1);
      if (urlString.length > 0) {
          try {
            const {default: m} = await import(`./puzzles/${urlString}.js`);
            Blockly.mainWorkspace.toolbox = filterToolbox(NewToolbox, m.blocks, m.categories);
            Blockly.mainWorkspace.updateToolbox(Blockly.mainWorkspace.toolbox);

            Blockly.serialization.workspaces.load(m.code, Blockly.mainWorkspace);

            // Remove has from navigation
            history.replaceState(null, null, ' ');

              // let triggerCode = urlString.substring(0, 4);
              // if (triggerCode == "#LZ=") {
              //   let comressedCode = urlString.substring(4);
              //   let string = LZString.decompressFromEncodedURIComponent(comressedCode);
              //   let xml = Blockly.Xml.textToDom(string);
              //   Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);              
              // }
              // if (triggerCode == "#PN=") {
              //   let programmName = urlString.substring(4);
              //   loadBeispielProgramm('programme/' + programmName + '.p5xml');
              // }
          }
          catch {
            //Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
          }
      } else {
          // load blockly workspace from local storage
          let xml = window.localStorage.getItem("xmlLocalStorage");
          let json =  window.localStorage.getItem("jsonLocalStorage");
          if (json) {
              Blockly.serialization.workspaces.load(JSON.parse(json), Blockly.mainWorkspace);
          }
          else if (xml) {
              let xmlDom = Blockly.Xml.textToDom(xml);
              Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xmlDom);
          } else {          
              //Blockly.Xml.domToWorkspace(document.getElementById('startBlocks'), workspace);
          }
      }
    }
    
    let p5jsBreite = 0.3*$(window).width();
    let breite1 = "width: " + p5jsBreite + "px";
    let breite2 = p5jsBreite + "px";
    document.getElementById('p5jsContainer').setAttribute("style", breite1);
    document.getElementById('p5jsContainer').style.width = breite2;
    onresize();
    viewCode();
    
    // do NOT auto load to allow recovering from crashes
    //updateP5();
    //loadTutorial('tutorials/inhalt.html');
}

/**
 * Run the sketch when clicking the RUN button.
 */
document.getElementById('p5Run').onclick = function() {
    $('#loggerDiv').removeClass('alert alert-danger').addClass('alert alert-light');
    document.getElementById('loggerDiv').innerHTML = '';
    updateP5();
};

let modalConfirm = function(callback){
  $("#p5loeschen").on("click", function(){
    $("#programmLoeschenModal").modal('show');
  });
  $("#btnLoeschJa").on("click", function(){
    callback(true);
    $("#programmLoeschenModal").modal('hide');
  });
  $("#btnLoeschNein").on("click", function(){
    callback(false);
    $("#programmLoeschenModal").modal('hide');
  });
};
modalConfirm(function(confirm){
  if(confirm){
    $('#loggerDiv').removeClass('alert alert-danger').addClass('alert alert-light');
    document.getElementById('loggerDiv').innerHTML = '';    
    myp5?.remove();
    p5Init(true);
  }else{
  }
});

document.getElementById('jsAnzeigen').onclick = function() {
    viewCode();
};

document.getElementById('flemsAnzeigen').onclick = function() {
    viewFlems();
};

document.getElementById('traceAnzeigen').onclick = function() {
    window.open("blocklytrace/index.html",'_blank');
};


document.addEventListener('DOMContentLoaded', function() {
    p5Init(false);
});