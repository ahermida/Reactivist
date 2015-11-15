/**
 * Topic images and description rendering
 */
var React = require('react');

module.exports = React.createClass({
    getInitialState: function() {
      return {
        clicked: false
      }
    },
    _onClick: function() {
        this.setState({clicked: !this.state.clicked});
        if(localStorage.selectedTopics) {
            var storedTopics = JSON.parse(localStorage.selectedTopics);
            storedTopics.push("HI123");
            localStorage.setItem("selectedTopics", JSON.stringify(storedTopics));
            //console.log(localStorage.selectedTopics);
        } else {
            localStorage.setItem("selectedTopics", JSON.stringify([]));
        }
    },

  renderItems: function() {
   //topics passed from the store and turned into TopicItems
   var i = this.state.clicked ? i = {backgroundColor: 'lime'}: i = {display: 'block'};
    return (
      <span onClick={this._onClick}
        style={i}
        className="TopicImage">
        <img className="TopicItem-Image" height="100" width="100" src={this.props.imgPath}></img>
        <p className="TopicItem-description">{this.props.topic}</p>
      </span>
   );
  },

  render: function() {
    return (
      <div className="TopicItem">{ this.renderItems() }</div>
    );
  }
});
