/**
 * Top Level App, Routing is handled from here. Routes manage full page components.
 */
var React       = require('react');
var ReactDOM    = require('react-dom');
var ReactRouter = require('react-router');
var history     = require('history/lib/createBrowserHistory');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var Landing     = require('./components/Landing/Landing.jsx');
var Topics      = require('./components/Topics/Topics.jsx');

//run router
ReactDOM.render(<Router history={history()}>
                  <Route path="/" component={Landing}/>
                  <Route path="/topics" component={Topics}/>
                </Router>, document.getElementById('Reactivist'));
