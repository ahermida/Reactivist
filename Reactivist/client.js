/**
 * Top Level App, Routing is handled from here. Routes manage full page components.
 */
var React       = require('react');
var ReactDOM    = require('react-dom');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var Landing       = require('./components/Landing/Landing.jsx');

//run router
ReactDOM.render(<Router>
                  <Route path="/" component={Landing}/>
                </Router>, document.getElementById('TeacherReview'));
