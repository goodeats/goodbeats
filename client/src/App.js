import React from 'react';
import './App.css';
import BeatsContainer from './components/BeatsContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><span role="img" aria-label="rock hand sign">🤘</span></p>
      </header>
      <BeatsContainer />
    </div>
  );
}

export default App;
