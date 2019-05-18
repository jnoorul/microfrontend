import React from 'react';
import './App.css';
import './registerWebComponents';

function App() {
  return (
    <div className="App">
        <amaze-search id="search"></amaze-search>
        <amaze-products id="products"></amaze-products>
        <amaze-recommendations id="recommendations"></amaze-recommendations>
    </div>
  );
}

export default App;
