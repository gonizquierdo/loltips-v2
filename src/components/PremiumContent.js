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
          <h1 className="text-uppercase"> Why <b>Subscribe</b>?</h1>
          <p className="lead text-justify"> We are aware there is plenty of free information around. A lot of websites harvest League of Legends data and have really cool visualizations and a masive amount of data. What we offer is a concise, simple interpretation, focused on your specific needs so you can get all the information you need, without having to go through multiple sources.</p>
          <h1 className="text-uppercase"> Our <b> product</b> </h1>
          <p className="lead text-justify"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis hendrerit ligula eu rhoncus. Maecenas magna tellus, faucibus a suscipit non, tempor eget tellus. Phasellus sit amet pharetra sem, nec iaculis neque. Fusce luctus quam sollicitudin mauris sollicitudin volutpat. Duis quis accumsan justo. Nunc ut ex porttitor, elementum arcu non, rutrum massa. Nunc eu diam sodales elit sagittis ultricies. Duis tellus nisl, laoreet pulvinar magna tristique, fringilla vulputate ante. Vivamus eget sollicitudin nisi, ac tempor urna. Donec mattis venenatis mi, sit amet condimentum mi congue et. Morbi ac sollicitudin nisl, id consequat diam. Sed mattis nulla vel lobortis molestie.</p>


          <p className="lead text-justify">Nullam et imperdiet enim. Nulla rhoncus ligula at justo mollis vestibulum. Phasellus a tellus ligula. Proin venenatis, urna varius bibendum semper, risus quam commodo leo, a viverra ex ex vel justo. Curabitur quis condimentum justo, eu congue quam. Duis in quam at orci porttitor accumsan eu aliquam felis. Nunc mattis quam sed dui aliquet, in porttitor nibh tempus. Pellentesque mollis felis non mauris dapibus suscipit. Nam tempor ante pellentesque lectus iaculis hendrerit. Mauris mattis massa quis nulla hendrerit tincidunt. Aenean ultricies nec arcu et malesuada. Donec et faucibus nisi, quis pellentesque elit. Nunc vitae diam suscipit, venenatis turpis non, convallis odio. Cras eu pharetra nisl, porta eleifend elit. Sed posuere augue erat, a consequat ipsum fringilla at.</p>
          <h1 className="text-uppercase"> Pick a <b>Champion</b>. Pick a <b>League</b>. Keep <b>up</b> </h1>

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
          <p className="lead"> Suscribe for only $2/month - yearly discounts available -  and get a <b>one month trial</b>. </p>

          <Link to="/subscriptions-closed" className="btn btn-scattler btn-lg text-uppercase">try it now</Link>
        </div>
      </div>
    )
  }

}
