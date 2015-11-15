/**
 * Topic images and description rendering
 */
 var React      = require('react');
 var TopicItem  = require('./TopicItem.jsx');

 module.exports = React.createClass({

   renderItems: function() {
     //topics passed from the store and turned into TopicItems
       console.log(JSON.stringify(this.props.topics));
     return this.props.topics.map(function(topic, i) {
         console.log(JSON.stringify(topic.topic));
       return (
         <TopicItem imgPath={'img/' + topic.image}
               topic={topic.topic}
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
