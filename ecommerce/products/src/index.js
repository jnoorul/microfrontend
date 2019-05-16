import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Products extends React.Component {
    constructor(props) {
        super(props);
        const shadowRoot = this.attachShadow({mode: 'open'});
        const appRoot = document.createElement('div');
        shadowRoot.appendChild(appRoot);
        ReactDOM.render(<App />, appRoot);
    }
}

customElements.define('amaze-products', Products);
