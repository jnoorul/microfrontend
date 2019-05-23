import React from 'react';
import ReactDOM from 'react-dom';
import retargetEvents from 'react-shadow-dom-retarget-events'
import App, {renderApp} from "./App";
import 'semantic-ui-css/semantic.min.css';

// window.SC_DISABLE_SPEEDY = true;

class Products extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({mode: 'open'});

    const appRoot = document.createElement('div');
    shadowRoot.appendChild(appRoot);

    const linkTag = document.createElement('link');
    linkTag.href = 'http://localhost:4000/products/static/css/app.css';
    linkTag.rel = 'stylesheet';
    shadowRoot.appendChild(linkTag);

    const styleTag = document.createElement('style');
    shadowRoot.appendChild(styleTag);


    renderApp(appRoot, styleTag);
    retargetEvents(shadowRoot);
  }
}

customElements.define('amaze-products', Products);

//just to test the app stand alone mode
ReactDOM.render(<App/>, document.getElementById('root'));