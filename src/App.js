import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import Footer from './components/Footer'

import { getCurrentPatch } from './utils.js'
import { t } from './i18n.js'


function App() {
  const currentPatch = getCurrentPatch();
  return (
    <Router>
      <div className="App bg-dark text-light">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" render={props =>
          <div>
            <MainPatchInfo patch={currentPatch}/>

          </div>
        }
        />
        <Route path="/about-us" render={props =>
          <div className="container p-2">
            <div className="bg-dark-transparent">
              <h1 className="display-4 text-uppercase">{t('about_us.title')}</h1>
            </div>
          </div>
        }/>
        <Route path="/join-team" render={props =>
          <div className="container p-2">
            <div className="bg-dark-transparent">
              <h1 className="display-4 text-uppercase">{t('join_team.title')}</h1>
              <div className="text-justify">
                <p> {t("join_team.text")} </p>
                <p> {t("join_team.contact")}</p>
              </div>
            </div>
          </div>
        }/>

      </div>
    </Router>
  );
}

export default App;
