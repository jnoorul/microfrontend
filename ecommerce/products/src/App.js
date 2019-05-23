import React from 'react';
import ReactDOM from 'react-dom';
import {CacheProvider} from '@emotion/core';
import createCache from '@emotion/cache';
import ProductLists from "./ProductLists";
import {searchProducts} from './actions';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
  }

  async componentDidMount() {
    const searchResults = await searchProducts('iphone');
    this.setState({products: searchResults});

  }

  render() {
    return (
      <div id="App">
        <ProductLists products={this.state.products}/>
      </div>
    );
  }
}

export const renderApp = (appRoot, styleRoot) => {
  const myCache = createCache({
    container: styleRoot,
  });
  ReactDOM.render(<CacheProvider value={myCache}><App/></CacheProvider>, appRoot);
};
