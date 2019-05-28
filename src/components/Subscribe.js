import React from 'react'
import WaitlistForm from './WaitlistForm'
import crying_amumu from '../assets/resources/crying_amumu.gif'
export default class Subscribe extends React.Component{

  render() {
    return (
      <div className="container text-center">
        <h1 className="display-4"> We're <b>sorry</b>! </h1>
        <img alt="Amumu is very sorry!" src={crying_amumu}/>
        <p className="lead"> We have reached our <b>500</b> subscriptions limit for the alpha period. We will take new subscribers as soon as we can!</p>

        <div >
          <h2 className="display-4"> Still interested? We have a <strong>waitlist</strong>! </h2>
          <WaitlistForm/>
        </div>
      </div>
    )
  }

}
