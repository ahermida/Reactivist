var React = require('react');
var request = require('superagent');
var Actions = require('../../actions/ReactivistActions.js');

var getCoordinates = function() {
	if (navigator.geolocation) {
	  navigator.geolocation.getCurrentPosition(function(position) {
	    var pos = {
	      lat: position.coords.latitude,
	      lng: position.coords.longitude
	    };
	    return pos;
	  }, function() {
	    //handleLocationError(true, infoWindow, map.getCenter());
	  });
	}
}

var GroupForm = React.createClass({
	sendForm: function() {
		var pos = getCoordinates();
		var name = document.getElementById('group-name');
		var topic = document.getElementById('group-topic');
		Actions.createGroup(name, topic, pos);
	},

	render: function() {
		return (
		<div>
			<input id="group-name" type="text" placeholder="Group Name" />
			<input id="group-topic" type="text" placeholder="Topic" />
			<button onClick={this.sendForm}>Initialize Group</button>
		</div>)
	}
});

module.exports = GroupForm;