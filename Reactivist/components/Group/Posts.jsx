/**
 * Topic images and description rendering
 */
 var React      = require('react');
 var Post       = require('./Post.jsx');

 module.exports = React.createClass({

   renderPosts: function() {
     //topics passed from the store and turned into Posts
     return this.props.posts.map(function(post, i) {
       return (
         <Post imgPath={('img/' + post.image) || false}
               text={post.text || ''}
               key={i}
               />
       );
     });
   },
   render: function() {
     return (
       <div id="Posts">
         {
             this.renderPosts() //renders the posts passed in props
         }

       </div>
     );
   }
 });
