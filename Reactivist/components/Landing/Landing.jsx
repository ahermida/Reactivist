/**
 * Component for Reactivist Application
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistStore   = require('../../stores/reactivistStore.js');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Link              = Router.Link;

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
    ReactivistStore.addChangeListener(this._onChange);
  },

  // Remove change listers from stores
  componentWillUnmount: function() {
    ReactivistStore.removeChangeListener(this._onChange);
  },

  resultFacebookLogin: function( response ) {
    console.log( response );
  },

  render: function() {
    //Reactivist view
    return (
      <div id="main">
        <img id="background" src="city.jpg" className="earlybird"></img>
        <div id="content">
          <h1 id="logo"><span id="ra-sign-in-r">re</span><span id="ra-sign-in-right">activist</span></h1>
          <div id="social-button-container">
              <Link to="/topics" className="btn btn-block btn-social btn-facebook">
                <span className="fa fa-facebook"></span> Sign in with Facebook
              </Link>
              <Link to="/topics" className="btn btn-block btn-social btn-google">
                <span className="fa fa-google"></span> Sign in with Google
              </Link>
              <Link to="/topics" className="btn btn-block btn-social btn-twitter">
                <span className="fa fa-twitter"></span> Sign in with Twitter
              </Link>
              <Link to="/topics" className="btn btn-block btn-social btn-github">
                <span id="ra-sign-in">
                  <span id="ra-sign-in-r">r</span>
                  <span id="ra-sign-in-a">a</span>
                </span>Sign in
              </Link>
          </div>
        </div>
      </div>
    );
  },

  //sets page to rerender on every change
  _onChange: function() {
  this.setState(getState());
  }

});
