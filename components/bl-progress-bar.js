// Progress Bar

import 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.13.1/cdn/components/progress-bar/progress-bar.js';

class BLProgressBar extends HTMLElement {
  show = true;

  constructor() {
    super();
  }

  connectedCallback () {
    this.render();
    this.addEventListeners();
  }

  render () {
    try {
      let show = window._app.store.showProgress;
      if (!show) {
        return;
      }
    } catch (ex) {}

    this.innerHTML = `<sl-progress-bar id="bl-progress" indeterminate></sl-progress-bar>
    <style>
      #bl-progress {margin: 1em;}
    </style>`;
  }

  addEventListeners () {
    document.addEventListener('DOMContentLoaded', (event) => {
      window._app.store.showProgress.subscribe(() => {this.render.call(this)});
    });
  }
}

window.customElements.define('bl-progress-bar', BLProgressBar);