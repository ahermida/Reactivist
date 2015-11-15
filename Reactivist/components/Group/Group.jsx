/**
 * Component for Group View
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistStore   = require('../../stores/reactivistStore.js');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Navbar            = require('../Topics/Navbar.jsx');
var Footer            = require('../Shared/Footer.jsx');
var Upcoming          = require('./Upcoming.jsx');
var Posts             = require('./Posts.jsx');
var GMap              = require('./GMap.jsx');
var Writer            = require('./Writer.jsx');

/**
 * Utility functions for Reactivist Application
 */
function getState() {
  return {
    data: ReactivistStore.getData()
  };
}

/**
 * Component
 */
module.exports = React.createClass({

  mixins: [ Router.State ],

  //Implements utility function to get the View Data from store
  getInitialState: function() {
    return getState();
  },

  //Fires post-mount,
  componentDidMount: function() {
      ReactivistActions.getPosts(this.props.params.group);
      ReactivistStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ReactivistStore.removeChangeListener(this._onChange);
  },

  render: function() {
    //Reactivist view
    return (
      <div id="ReactivistTopics">
        <div id="main">
        <Navbar />
        <div style={{'height': '60px'}}></div>
        <div id="gradient-block"></div>
        <h1 id="groupname">{this.props.params.group}</h1>
        <div id="mcmappy"><GMap id="group-location-map" className="breakout" /></div>
        <Upcoming />
        <Posts posts={this.state.data.posts}/>
        <Writer />
        </div>
        <Footer />
      </div>
    );
  },

  //sets page to rerender on every change
  _onChange: function() {
    this.setState(getState());
  }

});
