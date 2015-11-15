/**
 * Navbar Component & Login
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Link              = Router.Link;
var markers           = [];
var dropPins          = function(position, map, time) {
  // Drop set of maps (array) on map obj.
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
    }));
  }, time);
}

var Navbar = React.createClass({

  onClick: function() {
    var infoWindow = new google.maps.InfoWindow({map: map});

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);
        map.setZoom(16);
        dropPins(pos, map, 0);

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
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
            <button className="btn btn-default" onClick={this.onClick}>Locate Me!</button>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
