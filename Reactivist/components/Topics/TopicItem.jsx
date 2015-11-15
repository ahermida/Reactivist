/**
 * Topic images and description rendering
 */
var React = require('react');

module.exports = React.createClass({

    _onClick: function() {
        console.log("Clicked");
        //console.log(JSON.stringify(localStorage.selectedTopics));
        console.log(event.target.value);
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
    return (
      <span onClick={this._onClick} className="TopicImage">
        <img className="TopicItem-Image" height="115" width="115" src={this.props.imgPath}></img>
        <p className="TopicItem-description">{this.props.topic}</p>
      </span>
   );
  },

  render: function() {
    return (
      <div id="TopicItem">{ this.renderItems() }</div>
    );
  }
});
