/**
 * Topic images and description rendering
 */
 var React = require('react');

 module.exports = React.createClass({

   renderItems: function() {
     //topics passed from the store and turned into TopicItems
     return (
       <span className="TopicImage">
         <img className="TopicItem-Image" height="180" width="180" src={this.props.imgPath}></img>
         <p className="TopicItem-description">{this.props.description}</p>
       </span>
     );
   },

   render: function() {
     return (
        <div id="TopicImages">{ this.renderItems() }</div>
     );
   }
 });
