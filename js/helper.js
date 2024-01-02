// Pt 2021 - MIT-License

document.getElementById('p5saveDateiname').value = 'BlocklyCode';

//let currentlyOpenSketchId = null;

document.getElementById('p5Save').onclick = async function() {
  try {
    const filename = document.getElementById('p5saveDateiname').value;


    // HACK: get all existing sketches
    const responseRead = await fetch('https://api.nodb.sh/p5js-blockly/prod/sketches?token=ob2y31v0j832st', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    const {sketches} = await responseRead.json();

    // find the id id of the one with the target filename
    const existingSketch = sketches.find(s => s.name === filename);


    
    const json = Blockly.serialization.workspaces.save(Blockly.mainWorkspace);
    const doc = {
      id: existingSketch?.id ?? null,
      name: filename,
      data: json
    }

    const response = await fetch('https://api.nodb.sh/p5js-blockly/prod/sketches?token=ob2y31v0j832st', {
      method: existingSketch ? 'PUT' : 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([doc])
    });

    
    //const data = await response.json();    
    //currentlyOpenSketchId = data[0].id;
    
    // Download as a file
    // let link = document.createElement('a');
    // link.download = document.getElementById('p5saveDateiname').value + '.p5xml';
    // link.href = "data:application/octet-stream;utf-8," + encodeURIComponent(json_text);
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
  } catch(e) {
      alert(e);
   }
};

document.getElementById('URLSave').onclick = function() {
  try {
    let xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
    var xml_text = Blockly.Xml.domToText(xml);
    let compressed = LZString.compressToEncodedURIComponent(xml_text);
    let URL_text = "#LZ=" + compressed;
    let URLDiv = document.getElementById('URLDiv');
    URLDiv.innerHTML = URL_text;
  } catch { }
};

/** Load from cloud */
document.getElementById('p5Load').onclick = function() {
  document.getElementById('load-dialog').opened = true;
};

/**
 * Load from file
 */
const fileSelector = document.getElementById('p5Dateiwahl');
fileSelector.addEventListener('change', (event) => {
  const fileList = event.target.files;
  let file = fileList[0];
  let reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function (event) {
    Blockly.mainWorkspace.clear();

    let jsonParsed;
    try {
      jsonParsed = JSON.parse(event.target.result);
      Blockly.serialization.workspaces.load(jsonParsed, Blockly.mainWorkspace);
    }
    catch (e) {
      // try xml 
      var xml = Blockly.Xml.textToDom(event.target.result);
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace);         
    }
    
    document.getElementById('p5Dateiwahl').value = null;    
  };  
});

async function loadTutorial(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
    $("#divTutorials").html(data);
  } catch (err) { }
}

document.getElementById('backToContent').onclick = function() {
  loadTutorial('tutorials/inhalt.html');
};

async function loadBeispielProgramm(url) {
  try {
    const response = await fetch(url);
    const data = await response.text();
      Blockly.mainWorkspace.clear();
      var xml = Blockly.Xml.textToDom(data);
      Blockly.Xml.domToWorkspace(xml, Blockly.mainWorkspace); 
      updateP5();
  } catch (err) { }
}