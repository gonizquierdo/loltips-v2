import React from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'


function App() {
  return (
    <div className="App">
    <CustomNavbar/>
      <header className="App-header">
      </header>
      <MainPatchInfo patch='9.10'/>

    </div>
  );
}

export default App;
