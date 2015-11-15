var React = require('react');
var GMap = React.createClass({
  componentDidMount: function() {
    initMap();
  },

  render: function() {
    window.initMap = function() {
<<<<<<< HEAD
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
      });
=======
      try {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      } catch (e) {
        console.log(e);
      }
>>>>>>> 2412a0a24633be1d99a3a4db23779d86a81ea69a
    }

    return <div id="map" style={{'float':'none !important'}}></div>;
  }
});

module.exports = GMap;
