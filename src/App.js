import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import AboutUs from './components/AboutUs'
import {getCurrentPatch} from './utils.js'

function App() {
  const currentPatch = getCurrentPatch();
  return (
    <Router>
      <div className="App bg-dark text-light pb-4">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" render={props =>
          <div>
            <MainPatchInfo patch={currentPatch}/>
            <div className="container">
              <div className="bg-dark-transparent">
                <h1 className="display-4 text-uppercase font-weight-light">
                  Research . Knowledge . <b className="text-amumu">Insights</b>
                </h1>
                <p className="lead text-justify p-3"> League of Legends is constantly evolving, and keeping up with it can be very time consuming. Our goal is to make it easy for you to take advantage of every buff and nerf, new strategies, builds, and everything that has changed around your favourite champions and current league.</p>
              </div>
            </div>
          </div>
        }
        />
        <Route path="/loltips-v2" render={props =>
          <div>
            <MainPatchInfo patch={currentPatch}/>
          </div>
        }
        />

        <Route path="/about_us" component={() => <AboutUs />}/>

      </div>
    </Router>
  );
}

export default App;
