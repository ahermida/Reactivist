/**
 * Store for Reactivist Application
 */
var AppDispatcher    = require('../dispatchers/AppDispatcher.js');
var LoginConstants   = require('../constants/ReactivistConstants.js');
var EventEmitter     = require('events').EventEmitter;
var assign           = require('object-assign');
var CHANGE_EVENT     = 'change';
var _data            = {};


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

    case ReactivistConstants.LOGIN_USER_SUCCESS:
      //_addToken(action.token);
      console.log(action, 'successfully stored.');
      break;

    case ReactivistConstants.LOGIN_USER_FAIL:
      console.log(action.message);
      break;

    default:
      return true;
  }

  reactivistStore.emitChange();

});

module.exports = reactivistStore;