import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Products!</h1>
    </div>
  );
}


export const renderApp = (appRoot) => {
    ReactDOM.render(<App />, appRoot);
};