import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import CounterContext from './CounterContext';

function App() {
  let countState=useState(1);
  return (
    <CounterContext.Provider value={countState}>
    <div>
      <Parent></Parent>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
