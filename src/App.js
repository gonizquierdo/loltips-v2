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

      <footer class="bg-dark-new py-3 mt-2">
        <div class="container">
          <div class="text-center text-light">Copyright © 2019 - <a href="https://www.sneakybaron.gg">SneakyBaron.gg</a></div>
        </div>
      </footer>

    </Router>
  );
}

export default App;
