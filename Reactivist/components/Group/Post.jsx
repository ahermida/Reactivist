/**
 * Component for Single Post
 */
var React             = require('react');
var Timestamp         = require('./Timestamp.jsx');
/**
 * Component
 */
module.exports = React.createClass({

  render: function() {
    //Reactivist view
    return (
    <div className="SinglePost">
      <div><span>{this.props.text}</span></div>
      <Timestamp timestamp={this.props.timestamp}/>
    </div>);
  }

});
