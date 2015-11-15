/**
 * Navbar Component & Login
 */
var React             = require('react');
var Router            = require('react-router');
var ReactivistActions = require('../../actions/ReactivistActions.js');
var Link              = Router.Link;
var request           = require('superagent');
var markers           = [];
var groups            = [];

function dropPins(position, map, time) {
  // Drop set of maps (array) on map obj.
  window.setTimeout(function() {
    var m = new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: 'img/BlueMarker.png'
    });
    
    markers.push(m);

    m.addListener('click', function() {
      request.get('http://localhost:8080/api/groups')
      .end(function(err, res) {
        if(err) {
        // failure
          console.log("getTopics request Failed");
        }
        console.log("getTopics request Success", res.body.answer[24]);
        groups.push(res.body.answer[24]);

        var entry = document.getElementById('gpin-entry');
        
        var topicstr = groups[0].topic;
        var groupstr = groups[0].group;
        var topic = document.createElement('h4')
        topic.textContent = topicstr;
        var group = document.createElement('a');
        group.textContent = groupstr;
        
        group.href = 'http://localhost:8080/groups/' + groupstr.replace(/\s/g, "-");;
        
        var header = entry.appendChild(topic);
        var butt   = entry.appendChild(group);
      });

    });
  }, time);
}

function dropInitialPin(position, map, time) {
  // Drop set of maps (array) on map obj.
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP,
    }));
  }, time);
}

function drawCircle(center, radius) {
  var cityCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.2,
    strokeWeight: 0,
    fillColor: '#4682B4',
    fillOpacity: 0.25,
    map: map,
    center: center,
    radius: radius
  });
}

var Navbar = React.createClass({

  onClick: function() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        map.setCenter(pos);
        map.setZoom(14);
        dropInitialPin(pos, map, 0);
        drawCircle(pos, 700);

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    }
  },

  onClick2: function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        map.setZoom(14);        

        for (var i = 0; i < 10; i++) {
          var pos2 = {
            lat: position.coords.latitude + (Math.random() / 100.0),
            lng: position.coords.longitude + (Math.random() / 100.0)
          };  

          dropPins(pos2, map, 125 * i);
        }

      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
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
            <button className="btn btn-default" onClick={this.onClick2}>Groups nearby</button>
            <button className="btn btn-default" onClick={this.onClick}>Locate Me!</button>
          </div>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
