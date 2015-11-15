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

		    var pos2 = {
		    	lat: position.coords.latitude + Math.random(),
		    	lng: position.coords.longitude + Math.random()
		    }

		    dropPins(pos2, map, 200);

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
			<a href="https://twitter.com/share" className="twitter-share-button" data-via="dsiah17" data-hashtags="reactivist">Share this Group</a>
			<br /><p><i>Click on a Blue Pin to see nearby group</i></p>
			<div id="gpin-entry"></div>
		</div>);
	}
});

module.exports = Controls;