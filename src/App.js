import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import Footer from './components/Footer'
import { getCurrentPatch } from './utils.js'


function App() {
  const currentPatch = getCurrentPatch();
  return (
    <Router>
      <div className="App text-light bg-dark">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" render={props =>
          <div className="mt-5 container">
            <MainPatchInfo patch={currentPatch}/>
          </div>
        }
        />
        <Footer/>
      </div>


    </Router>
  );
}

export default App;
