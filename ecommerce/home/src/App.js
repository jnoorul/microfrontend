import React from 'react';
import './App.css';
import './registerWebComponents';

function App() {
  return (
    <div className="App">
        <amaze-search></amaze-search>
        <amaze-products-wrapper></amaze-products-wrapper>
        <amaze-recommendations></amaze-recommendations>
    </div>
  );
}

export default App;
