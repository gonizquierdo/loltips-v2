import React from 'react'
import { Link } from 'react-router-dom';
import { getLeagueIcons } from '../utils.js'

export default class PremiumContent extends React.Component{

  render() {
    const league_icons = getLeagueIcons();
    const leagues = ['iron', 'bronze', 'silver', 'gold', 'platinum', 'diamond']

    return (
      <div className="container pt-4">
        <div className="container bg-dark-transparent pb-4">
          <h1 className="display-4 text-uppercase"> Not just data. <b>Insights</b> </h1>
          <div className="text-justify">
            <p className="lead"> League of Legends is constantly evolving, and keeping up with it can be very time consuming. Our goal is to make it easy for our subscribers to take advantage of every buff and nerf, new strategies, builds, and everything that has changed around their favourite champions and their current league.</p>
          </div>
          <h1 className="text-uppercase p-3"> Why <b>Subscribe</b>?</h1>
          <p className="lead text-justify"> We are aware there is plenty of free information around. A lot of websites harvest League of Legends data and have really cool visualizations and a masive amount of data. What we offer is a concise, simple interpretation, focused on your specific needs so you can get all the information you need, without having to go through multiple sources.</p>
          <h1 className="text-uppercase p-3"> Our <b> product</b> </h1>
          <div className="row">
            <div className="col">
            <p className="lead text-justify"> Using multiple information sources we have chosen through intensive research, we designed a custom ad hoc report based on your specific needs.</p>
            <p className="lead text-justify"> Your suscription gives you access to a regular report, every time there is a new <b>patch update</b>.</p>
            <p className="lead text-justify">We want you to find opportunities based on powerful insights. A few examples of the most important concepts we will analyze:</p>
              <div className="text-justify lead">
                <p><b className="text-uppercase">Champion current stats</b> - such as <b>popularity, win rate, strength, counter.</b></p>
                <p><b className="text-uppercase">Champion best builds</b> - which items to buy based on the current meta and how to adapt your gameplay.</p>
                <p><b className="text-uppercase">Champion tips and strategies</b> - what should be trying to do in the <b>different stages of the game</b> involving your different opponents, whether your have a lead over them or not.</p>
                <p><b className="text-uppercase">Gameplay recommendations</b> - aspects of your game you should improve to get the best out of it such as <b>economy, fighting and using summoner spells</b>.</p>
              </div>
            </div>
            <div className="col">
            </div>
          </div>
          <h1 className="text-uppercase p-3"> Pick a <b>Champion</b>. Pick a <b>League</b>. Keep <b>up</b> </h1>

          <div className="row">
          {
            leagues.map((league, index) =>
            <div className="col">
              <img
                className="img-thumbnail bg-transparent border-0"
                key={index}
                src={league_icons[league]}
                alt={league}
              />
            </div>
            )
          }
          </div>
          <p className="lead"> There are currently 144 released champions, pick te one you like the most, tell us your league and we'll do the rest for you. </p>
          <h1 className="text-uppercase display-4"> And we are <b>very cheap</b>! </h1>
          <p className="lead"> Suscribe for only <strong>$2 / month</strong> OR choose a  year plan with discounts available and get a <b>one month trial</b>. </p>

          <Link to="/subscriptions-closed" className="btn btn-scattler btn-lg text-uppercase">try it now</Link>
        </div>
      </div>
    )
  }

}
