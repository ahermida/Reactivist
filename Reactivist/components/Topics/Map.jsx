var React = require('react');
var Map = React.createClass({
  componentDidMount: function() {
    initMap();
  },

  render: function() {
    window.initMap = function() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
      });
    }
      
    return <div id="map"></div>;
  }
});

module.exports = Map;