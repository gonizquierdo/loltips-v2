import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import AboutUs from './components/AboutUs'
import {getCurrentPatch} from './utils.js'
import btc_qr from './assets/btc_qr.png'

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
              <div className="bg-dark-transparent pb-2">
                <h1 className="display-4 text-uppercase font-weight-light">
                  Research . Knowledge . <b className="text-amumu">Insights</b>
                </h1>
                <p className="lead text-center p-3"> League of Legends is constantly evolving, and keeping up with it can be very time consuming. Our goal is to make it easy for you to take advantage of every buff and nerf, new strategies, builds, and everything that has changed around your favourite champions and current league.</p>
                <h2 className="display-4 text-uppercase font-weight-light">
                  Help us <b className="text-amumu">grow</b>
                </h2>
                <p className="lead text-center p-3"> We won't charge you for this information, but keep in mind we have awesome plans to develop all kinds of crazy stuff. Consider helping us to do it and get a special place in our hearts!</p>
                <img alt="Btc qr code" className="pb-2" src={btc_qr}/>
                <p className="text-monospace">38qjG4BS3Rqr66jbaZYm6rzjJGCDFuVrbz</p>
              </div>
            </div>
          </div>
        }
        />
        <Route path="/about-us" render={props =>
          <div className="bg-dark-transparent">
            <h1 className="display-4"> About Us </h1>
          </div>
        }/>

        <Route path="/join-team" render={props =>
          <div>
          </div>
        }/>

      </div>
    </Router>
  );
}

export default App;
