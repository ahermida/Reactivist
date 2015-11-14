/**
 * Navbar Component & Login
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Link              = Router.Link;
module.exports = React.createClass({

  onClick: function() {
  },

  render: function() {
    return (
      <nav id="ReactivistNavbar" className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" id="navlogo" href="#">
              <span id="ra-sign-in-r">re</span><span id="ra-sign-in-right">activist</span>
            </Link>
          </div>
          <div className="navbar-form navbar-right" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Filter Topics"/>
            </div>
            <button className="btn btn-default">Submit</button>
          </div>
        </div>
      </nav>
    );
  }
});
