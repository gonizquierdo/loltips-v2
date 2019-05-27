import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import BaitSection from './components/BaitSection'
import AboutUs from './components/AboutUs'
import Subscribe from './components/Subscribe'
import {getCurrentPatch} from './utils.js'

function App() {
  const currentPatch = getCurrentPatch();
  return (
    <Router>
      <div className="App">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" render={props =>
          <div>
            <MainPatchInfo patch={currentPatch}/>
            <BaitSection/>
          </div>
        }
        />
        <Route path="/loltips-v2" render={props =>
          <div>
            <MainPatchInfo patch={currentPatch}/>
            <BaitSection/>
          </div>
        }
        />

        <Route path="/about_us" component={() => <AboutUs />}/>
        <Route path="/subscribe" component={() => <Subscribe />}/>
      </div>
    </Router>
  );
}

export default App;
