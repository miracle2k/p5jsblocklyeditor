// Pt 2021 - MIT-License

async function supabaseCall(method, data, opts) {
  const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjdGR3em5qZ2p0eXZ0YXVramFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4OTUyODksImV4cCI6MjAyMTQ3MTI4OX0.xgHENnyd-IUztTEBC5d0oCkxgdeIkYy02VJp57rHkR0";

  let url = 'https://wctdwznjgjtyvtaukjaf.supabase.co/rest/v1/sketches';
  let body;
  if (method === 'GET' || method === 'DELETE') {
    const params = new URLSearchParams(data);
    url += '?' + params.toString();    
  }
  else {
    body = JSON.stringify(data);

    // allow querystring in addition to the body
    const params = new URLSearchParams(opts?.qs);
    url += '?' + params.toString();
  }

  const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'apikey': key,
        'Authorization': `Bearer ${key}`,
        ...opts?.headers
      },
      body
    });

  let responseData = await response.text();
  if (!responseData) {
    return null;  
  }
  return JSON.parse(responseData);
}

document.getElementById('p5saveDateiname').value = 'BlocklyCode';

//let currentlyOpenSketchId = null;

document.getElementById('p5Save').onclick = async function() {
  try {
    const filename = document.getElementById('p5saveDateiname').value;

    // later auto-save to current filename, for now, check by name
    const existingSketch = (await supabaseCall('GET', {name: `eq.${filename}`}))?.[0];
    
    const json = Blockly.serialization.workspaces.save(Blockly.mainWorkspace);

    // upsert

    const doc = {
      id: existingSketch?.id ?? undefined,
      name: filename,
      data: json
    }

    const response = await supabaseCall('POST', doc, {
      headers: {
        'Prefer': 'resolution=merge-duplicates,return=representation'        
      }
    });
    currentlyOpenSketchId = response[0].id;
    
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