import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './App';

class Search extends HTMLElement {
  static get observedAttributes() {
    return ['onSearch'];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    const appRoot = document.createElement('div');

    const styleTag = document.createElement('link');
    styleTag.href = 'http://localhost:4000/search/static/css/app.css';
    styleTag.rel = 'stylesheet';

    shadowRoot.appendChild(styleTag);
    shadowRoot.appendChild(appRoot);
    ReactDOM.render(<App/>, appRoot);
  }

  connectedCallback() {
    this.addEventListener('keypress', (event) => {
      const keyCode = event.which || event.keyCode;
      if (keyCode === 13) {
        this.dispatchEvent(new CustomEvent('search', {
          detail: {
            searchText: event.target.shadowRoot.activeElement.value,
          },
          bubbles: true,
        }));
      }
    });
  }

  set search(eventHandler) {
    this.setAttribute('onSearch', eventHandler);
  }

  get search() {
    return this.hasAttribute('search');
  }

}

customElements.define('amaze-search', Search);

//just to test the app stand alone mode
ReactDOM.render(<App/>, document.getElementById('root'));
