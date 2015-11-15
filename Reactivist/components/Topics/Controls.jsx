var React = require('react');

var Controls = React.createClass({
	render: function() {
		return (<div id="controls">
			<h4>Radius (mi)</h4><input className="control-input" type="text" />
			<button className="control-btn btn btn-default">Locate Me!</button>	
		</div>);
	}
});

module.exports = Controls;