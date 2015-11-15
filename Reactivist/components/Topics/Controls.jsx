var React     = require('react');

var markers   = [];

function dropPins(position, map, time) {
  // Drop set of maps (array) on map obj.
  window.setTimeout(function() {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
      animation: google.maps.Animation.DROP
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


var Controls = React.createClass({
	onClick: function() {
		//var infoWindow = new google.maps.InfoWindow({map: map});

		if (navigator.geolocation) {
		  navigator.geolocation.getCurrentPosition(function(position) {
		    var pos = {
		      lat: position.coords.latitude,
		      lng: position.coords.longitude
		    };

		    map.setCenter(pos);
		    map.setZoom(16);
		    dropPins(pos, map, 0);
		    drawCircle(pos, 300);

		  }, function() {
		    //handleLocationError(true, infoWindow, map.getCenter());
		    console.log('err');
		  });
		}
	},

	sendForm: function() {
		return;
	},

	render: function() {
		return (
		<div id="controls">
			<h4 className="control-header">Create Group </h4><input  className="control-input" type="text" placeholder="Name" />
			<h4 className="control-header">Radius (miles)</h4><input className="control-input" type="text" placeholder="30" />
			<button className="btn btn-default" onClick={this.sendForm}>Create Group</button>
			<a href="https://twitter.com/share" className="twitter-share-button" data-via="dsiah17" data-hashtags="reactivist">Share this Group</a>
		</div>);
	}
});

module.exports = Controls;