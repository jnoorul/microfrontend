import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';

class Recommendations extends HTMLElement {
  static get observedAttributes() {
    return ['searchtext'];
  }
  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});
    this.appRoot = document.createElement('div');
    const styleTag = document.createElement('link');
    styleTag.href = 'http://localhost:4000/recommendations/static/css/app.css';
    styleTag.rel = 'stylesheet';

    shadowRoot.appendChild(this.appRoot);
    shadowRoot.appendChild(styleTag);

    ReactDOM.render(<App/>, this.appRoot);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    ReactDOM.render(<App searchText={newValue} />, this.appRoot);
  }
}

customElements.define('amaze-recommendations', Recommendations);