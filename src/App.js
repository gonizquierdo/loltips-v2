import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import Footer from './components/Footer'
import { getCurrentPatch } from './utils.js'
import TftComp from './components/TeamfightTactics'


function App() {
  const currentPatch = getCurrentPatch();
 
  return (
    <div className="App text-light bg-dark">
      <CustomNavbar />
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path="/" component={Lol} />
        <Route exact path="/tft/" component={Tft} />
      </Switch>
      <Footer />
    </div>

  );
}
function Lol() {
  const currentPatch = getCurrentPatch();
  return (
    <div>
      <Route exact path="/" render={props =>
        <div className="mt-5 container">
          <MainPatchInfo patch={currentPatch} />
        </div>
      }
      />
    </div>
  )
}
function Tft() {
  return (
    <div>
      <TftComp />
    </div>
  )
}

export default App;
