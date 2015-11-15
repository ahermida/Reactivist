/**
 * Store for Reactivist Application
 */
var AppDispatcher     = require('../dispatchers/AppDispatcher.js');
var ReactivistConstants = require('../constants/ReactivistConstants.js');
var EventEmitter      = require('events').EventEmitter;
var assign            = require('object-assign');
var CHANGE_EVENT      = 'change';
var _data             = {};
    _data.topics      = [];
    _data.posts       = [];
/**
 * Utility functions for store -- for mutating store data
 */


 /**
  * Object through which store data is accessed -- *NOT MUTATED*
  */
var reactivistStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getData: function() {
    return _data;
  }
});

/**
 * Register store with the dispatcher
 */
reactivistStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;
  switch(action.actionType) {
    case ReactivistConstants.CREATE_GROUP:
      console.log(action, 'created group');
      break;

    case ReactivistConstants.LOGIN_USER_SUCCESS:
      //_addToken(action.token);
      console.log(action, 'successfully stored.');
      break;

    case ReactivistConstants.LOGIN_USER_FAIL:
      console.log(action.message);
      break;

    case ReactivistConstants.GET_TOPICS:
        _data.topics = action.topics; //might as well switch them out, it's easy
        break;
    case ReactivistConstants.GET_POSTS:
        _data.posts = action.posts; //might as well switch them out, it's easy
        break;
    case ReactivistConstants.POST_MESSAGE:
        _data.posts.push(action.post); //might as well switch them out, it's easy
        break;

      reactivistStore.emitChange();
    default:
      return true;
  }
  reactivistStore.emitChange();
});

module.exports = reactivistStore;
