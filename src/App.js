import React from 'react';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/index';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
    </div>
  );
}

export default App;
