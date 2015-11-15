//==============================================================================
//                    MESSAGE INPUT FORM AND ACTIONS
//==============================================================================

var React = require('react');
var ReactivistActions = require('../../actions/ReactivistActions.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      message: ''
    };
  },

  updateForm: function(value) {
    this.setState({ message: value });
  },
  onClick: function() {
    if (this.state.message && (this.state.message.trim() !== '')) {
      var date = new Date().getTime();
      var rv = {
        text: event.target.value,
        timestamp: date
      };
      ReactivistActions.postMessage(rv);
      event.target.value = '';
      this.setState({ message: '' });
    }
  },
  onKeyUp: function(event) {
    if (event.keyCode === 13 && event.target.value) {
      var date = new Date().getTime();
      var rv = {
        text: event.target.value,
        timestamp: date
      };
      ReactivistActions.postMessage(rv);
      event.target.value = '';
      this.setState({ message: '' });
    }
  },
  logCon: function() {
    console.log('WORKED');
  },

  render: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.updateForm
    };
    return (
      <div id="inputgrp" className="input-group">
         <input type="text" className="form-control" onKeyUp={this.onKeyUp}
                type="text"
                valueLink={valueLink}
                name="message"
                placeholder="Write a post..."
                id="writer_input"/>
              <span className="input-group-btn">
           <button className="btn btn-default" type="submit" onClick={this.onClick} type="button">send</button>
         </span>
       </div>
    );
  }
});
