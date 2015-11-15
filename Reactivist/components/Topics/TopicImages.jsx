/**
 * Topic images and description rendering
 */
 var React      = require('react');
 var TopicItem  = require('./TopicItem.jsx');

 module.exports = React.createClass({

   renderItems: function() {
     //topics passed from the store and turned into TopicItems
     return this.props.topics.map(function(topic, i) {
       return (
         <TopicItem imgPath={topic.img}
               description={topic.description}
               key={i}
               />
       );
     });
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
