/**
 * Component for Topics
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistStore   = require('../../stores/reactivistStore.js');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Navbar            = require('./Navbar.jsx');
var Footer            = require('../Shared/Footer.jsx');
var TopicImages       = require('./TopicImages.jsx');
var Map               = require('./Map.jsx');

/**
 * Utility functions for Reactivist Application
 */
function getState() {
    console.log("Getting state");
    var temp = ReactivistStore.getData();
  return {
    data: temp
  };
}

/**
 * Component
 */
module.exports = React.createClass({

  mixins: [ Router.State ],

  //Implements utility function to get the View Data from store
  getInitialState: function() {
      console.log("Getting initial state");
    return getState();
  },

  //Fires post-mount,
  componentDidMount: function() {
      this.state.data.topics = ReactivistActions.getTopics();
      ReactivistStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ReactivistStore.removeChangeListener(this._onChange);
  },

  render: function() {
    //Reactivist view
      console.log("Loaded");
    return (
      <div id="ReactivistTopics">
        <div id="ReactivistMain">
          <Navbar />
          <TopicImages topics={this.state.data.topics} />
          <Map />
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
