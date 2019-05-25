import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events'
import App, {renderApp} from "./App";
import 'semantic-ui-css/semantic.min.css';

// window.SC_DISABLE_SPEEDY = true;

class Products extends HTMLElement {
  static get observedAttributes() {
    return ['searchtext'];
  }
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    this.appRoot = document.createElement('div');
    shadowRoot.appendChild(this.appRoot);

    const linkTag = document.createElement('link');
    linkTag.href = 'http://localhost:4000/products/static/css/app.css';
    linkTag.rel = 'stylesheet';
    shadowRoot.appendChild(linkTag);

    this.styleTag = document.createElement('style');
    shadowRoot.appendChild(this.styleTag);


    renderApp(this.appRoot, this.styleTag, {});
    retargetEvents(shadowRoot);
  }
  set searchtext(value) {
    this.setAttribute('searchText', value);
  }
  get searchtext() {
    this.hasAttribute('searchText');
  }
  attributeChangedCallback(name, oldValue, newValue) {
    renderApp(this.appRoot, this.styleTag, {searchText: newValue});
  }
}

customElements.define('amaze-products', Products);

//just to test the app stand alone mode
ReactDOM.render(<App/>, document.getElementById('root'));