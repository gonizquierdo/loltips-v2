import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import { getCurrentPatch } from './utils.js'
import { t } from './i18n.js'


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
      </div>
      <footer class="bg-dark-new py-3 mt-2">
        <div class="container">
          <div class="text-center text-light">Copyright © 2019 - <a href="https://www.sneakybaron.gg">SneakyBaron.gg</a></div>
        </div>
      </footer>

    </Router>
  );
}

export default App;
