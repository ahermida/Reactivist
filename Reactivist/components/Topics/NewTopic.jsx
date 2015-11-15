/**
 * Topic images and description rendering TODO: Add topic
 */
 var React = require('react');
 module.exports = React.createClass({

   renderItems: function() {
     //topics passed from the store and turned into TopicItems
     return (
       <span className="TopicImage">
         <span>
           <h1>
             +
             <input type="file" id="topic-file-btn" className="TopicItem-Image" height="180" width="180">
           </h1>
         </span>
         <p className="TopicItem-description">{this.props.description}</p>
       </span>
     );
   },
   render: function() {
     return (
       <div id="TopicImages">
         {
             this.renderItems() //renders the topic items passed in props
         }
       </div>
     );
   }
 });
