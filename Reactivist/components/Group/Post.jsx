/**
 * Component for Single Post
 */
var React             = require('react');

/**
 * Component
 */
module.exports = React.createClass({

  render: function() {
    //Reactivist view
    return (
    <div className="SinglePost">
      {this.props.imgPath ? (<div><img src={this.props.imgPath}/><span>{this.props.text}</span></div>) :
                            (<span>{this.props.text}</span>)}
    </div>);
  }

});
