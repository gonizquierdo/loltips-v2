import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CustomNavbar from './components/CustomNavbar'
import MainPatchInfo from './components/MainPatchInfo'
import AboutUs from './components/AboutUs'


function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavbar/>
        <header className="App-header">
        </header>
        <Route exact path="/" component={() => <MainPatchInfo patch='9.10'/>} />
        <Route path="/about_us" component={() => <AboutUs />}/>
        <Route path="/subscribe" component={() => <AboutUs />}/>
      </div>
    </Router>
  );
}

export default App;
