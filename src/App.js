import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import Footer from './components/Footer'

import { getCurrentPatch } from './utils.js'
import { t } from './i18n.js'

import btc_qr from './assets/btc_qr.png'

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
            <div className="container">
              <div className="bg-dark-transparent pb-2">
                <h1 className="display-4 text-uppercase font-weight-light">
                  {t('main.title_reasearch_knowledge')} <b className="text-amumu">{t('main.title_insights')}</b>
                </h1>
                <p className="lead text-center p-3">{t('main.info_text')}</p>
                <h2 className="display-4 text-uppercase font-weight-light">
                  {t('main.title_help_us')} <b className="text-amumu">{t('main.title_grow')}</b>
                </h2>
                <p className="lead text-center p-3">{t('main.donation_text')}</p>
                <img alt="Btc qr code" className="pb-2" src={btc_qr}/>
                <p className="text-monospace">38qjG4BS3Rqr66jbaZYm6rzjJGCDFuVrbz</p>
              </div>
            </div>
            <Footer/>
          </div>
        }
        />
        <Route path="/about-us" render={props =>
          <div className="container p-2">
            <div className="bg-dark-transparent">
              <h1 className="display-4 text-uppercase">{t('title.about_us')}</h1>
            </div>
          </div>
        }/>

        <Route path="/join-team" render={props =>
          <div className="container p-2">
            <div className="bg-dark-transparent">
              <h1 className="display-4 text-uppercase">{t('title.join_team')}</h1>
            </div>
          </div>
        }/>

      </div>
    </Router>
  );
}

export default App;
