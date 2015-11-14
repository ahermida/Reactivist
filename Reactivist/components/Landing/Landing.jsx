/**
 * Component for Login Application
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistStore   = require('../../stores/reactivistStore.js');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Main              = require('./Main.jsx');
var Navbar            = require('./Navbar.jsx');
var Footer            = require('../Shared/Footer.jsx');
/**
 * Utility functions for Login Application
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
    LoginStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    LoginStore.removeChangeListener(this._onChange);
  },

  render: function() {
    //login view
    return (
      <div id="main">
        <Navbar />
        <Main />
      </div>
      <Footer />
    );
  },

  //sets page to rerender on every change
  _onChange: function() {
  this.setState(getState());
  }

});
