import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import AboutUs from './components/AboutUs'
import {getCurrentPatch} from './utils.js'

function App() {
  const currentPatch = '9.10';
  return (
    <Router>
      <div className="App">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" component={() => <MainPatchInfo patch={currentPatch}/>} />
        <Route path="/loltips-v2" component={() => <MainPatchInfo patch={currentPatch}/>} />
        <Route path="/about_us" component={() => <AboutUs />}/>
        <Route path="/subscribe" component={() => <AboutUs />}/>
      </div>
    </Router>
  );
}

export default App;
