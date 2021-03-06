var React = require('react');
var GMap = React.createClass({
  componentDidMount: function() {
    initMap();
  },

  render: function() {
    window.initMap = function() {

      try {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      } catch (e) {
        console.log(e);
      }
    }

    return <div id="map" style={{'float':'none !important'}}></div>;
  }
});

module.exports = GMap;
