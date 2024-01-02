import {LitElement, html, css, classMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/all/lit-all.min.js';
import {Task} from 'https://cdn.jsdelivr.net/npm/@lit/task@1.0.0/+esm'

class LoadDialog extends LitElement {

    // disable shadow root for this to enable blueprint
  // createRenderRoot() {
  //   return this;
  // }


  constructor () {
    super()
    this.opened = false
  }

  static get properties () {
    return {
      opened: {type: Boolean}
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('opened') && this.opened) {
      this.sketchTask.run();
    }    
  }

  sketchTask = new Task(this, {
    task: async ([], {signal}) => {
      const response = await fetch('https://api.nodb.sh/p5js-blockly/prod/sketches?token=ob2y31v0j832st', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const {sketches} = await response.json();
      return sketches;
    },
    args: () => []
  });

  render () {
  return html`
    <style>
      .backdrop {
        display: flex;
        justify-content: center;
        align-items: center;

      }

      .modal {
        background: white;
        border-radius: 5px;        
      }

      .title {
        padding: 5px 10px;
        font-weight: bold;
        font-size: 1.2em;
        border-bottom: 1px solid gray;
      }

      .content {
        padding: 5px 10px;
      }

      .item {
        border-bottom: 1px solid gray;
        padding: 5px 0;
        font-size: 1em;

        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .item .name {
          flex: 1;
      }
    </style>

    <div class="backdrop" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1000; display: ${this.opened ? 'flex' : 'none'}">
      <div class="modal" role="dialog">
        <div class="title">
          Load Sketch &nbsp;&nbsp;&nbsp; <a href="#" @click="${this.handleClose}">Close</a>
        </div>

        <div class="content">
          ${
            this.sketchTask.render({
              pending: () => html`<p>Loading...</p>`,
              complete: (sketches) => sketches.map((sketch, idx) => html`
                <div class="item" data-idx="${idx}">
                  <span class="name">${sketch.name ?? "no name"}</span>
                  <span class="actions">
                    <a href="#" @click="${this.handleLoad}">Load</a>
                    <a href="#" @click="${this.handleDelete}">Delete</a>
                  </span>
                `),
              error: (e) => html`<p>Error: ${e}</p>`
            })
          }
        </div>
      </div>
    </div>
    `;
  }

  handleLoad(e) {
    e.preventDefault();
    const idx = e.currentTarget.parentElement.parentElement.dataset.idx;
    const sketch = this.sketchTask.value[idx];
        
    Blockly.serialization.workspaces.load(sketch.data, Blockly.mainWorkspace);
    document.getElementById('p5saveDateiname').value = sketch.name;
    this.close();
  }

  close() {
    this.opened = false;
  }

  handleClose(e) {
    e.preventDefault();
    this.close();
  }

  async handleDelete(e) {
    e.preventDefault();
    const idx = e.currentTarget.parentElement.parentElement.dataset.idx;
    const sketch = this.sketchTask.value[idx];
    const name = sketch.name ?? "no name";
    if (window.confirm(`Delete "${name}"?`)) {

      const response = await fetch(`https://api.nodb.sh/p5js-blockly/prod/sketches/${sketch.id}?token=ob2y31v0j832st`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      this.sketchTask.value.splice(idx, 1);
      this.requestUpdate();
    }
  }
}

customElements.define('load-dialog', LoadDialog)
