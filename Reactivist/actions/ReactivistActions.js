/**
 * Actions for Reactivist Application
 * -- Send calls that will be lined up to mutate data in store
 */

//filters actions for one way data flow
var AppDispatcher         = require('../dispatchers/AppDispatcher.js');
//defined user actions
var ReactivistConstants   = require('../constants/ReactivistConstants.js');
//Superagent request
var request               = require('superagent');

module.exports = {

  //generic dispatcher call
  doSomething: function(something) {
    AppDispatcher.handleSetterAction({
      actionType: ReactivistConstants.DO_SOMETHING,
      something: something
    });
  },

  //api call
  loginUser: function(email, password) {
    request.post('http://localhost:8080/auth')
    .send({'username': email, 'password': password})
    .end(function(err, res) {
        if (err) {
          //handle fail
          AppDispatcher.handleViewAction({
            actionType: ReactivistConstants.LOGIN_USER_FAIL,
            messages: res.body.description
          });
        }
        console.log(res.body);
        //handle success
        AppDispatcher.handleViewAction({
          actionType: ReactivistConstants.LOGIN_USER_SUCCESS,
          token: res.body['access_token']
        });
    });
  },

  createGroup: function(name, topic, position) {
    request.post('http://localhost:8080/api/groups')
    .send({'group': name, 'topic': topic, 'pos': position})
    .end(function(err, res) {
        if (err) {
          //handle fail
          return err;
        }

        console.log(res.body);
        //handle success
        AppDispatcher.handleViewAction({
          actionType: ReactivistConstants.CREATE_GROUP,
          response: res.body
        });
    });
  },

  getTopics: function() {
    request.get('http://localhost:8080/api/topics')
      .end(function(err, res) {
        if(err) {
        // failure
          console.log("getTopics request Failed");
        }
        console.log("getTopics request Success");
        AppDispatcher.handleViewAction({
          actionType: ReactivistConstants.GET_TOPICS,
          topics: res.body
        });
      });
  },

  getPosts: function(group) {
    request.get('http://localhost:8080/api/posts/' + group)
      .end(function(err, res) {
        if(err) {
        // failure
          console.log("getTopics request Failed");
        }
        console.log("getTopics request Success");
        AppDispatcher.handleViewAction({
          actionType: ReactivistConstants.GET_POSTS,
          posts: res.body.answer
        });
      });
  },
  postMessage: function(post) {
    request.post('http://localhost:8080/api/posts/').send(post)
      .end(function(err, res) {
        if(err) {
        // failure
          console.log("getTopics request Failed");
        }
        console.log("getTopics request Success");
        AppDispatcher.handleViewAction({
          actionType: ReactivistConstants.POST_MESSAGE,
          posts: res.body.answer
        });
      });
  }
};
