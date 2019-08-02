import React from 'react'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'
import twitch from '../assets/twitch.png'


export default class Footer extends React.Component {


  render() {

    return (
      <footer className="bg-dark-new py-3 mt-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-auto"> 
                <div className="text-center text-light">Copyright © 2019 - <a href="https://www.sneakybaron.gg">SneakyBaron.gg</a></div>
              </div>
              <div className="col-auto">
                <a href="https://www.instagram.com/sneakybarongg"><img src={instagram} alt="Instagram" width={25}/></a>
              </div>
              <div className="col-auto">
                <a href="https://www.facebook.com/SneakyBaronGG-2409376319346645/"><img src={facebook} alt="Facebook" width={25}/></a>
              </div>
              <div className="col-auto">
                <a href="https://www.twitch.tv/sneakybarongg"><img src={twitch} alt="Twitch" width={25}/></a>
              </div>
            </div>
          </div>
        </footer>
    )
 }
}
