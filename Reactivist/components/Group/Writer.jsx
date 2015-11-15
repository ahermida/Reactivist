//==============================================================================
//                    MESSAGE INPUT FORM AND ACTIONS
//==============================================================================

var React = require('react');
var ReactivistActions = require('../../actions/ReactivistActions.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      message: ''
    }
  },

  updateForm: function(value) {
    this.setState({ message: value });
  },
  onClick: function() {
    if (this.state.message && (this.state.message.trim() !== '')) {
      var date = new Date().getTime();
      var rv = {
        username: this.props.username,
        userID: this.props.userID,
        body: this.state.message,
        timestamp: date
      };
      ReactivistActions.sendMessage(rv);
      this.setState({ message: '' });
    }
  },
  onKeyUp: function(event) {
    event.preventDefault();
    if (event.keyCode === 13 && event.target.value &&
        React.findDOMNode(this.refs.writer_button).offsetParent === null) {
      var date = new Date().getTime();
      var rv = {
        text: event.target.value,
        timestamp: date
      };
      ChatActions.sendMessage(rv);
      this.setState({ message: '' });
    }
  },

  renderInput: function() {
    var valueLink = {
      value: this.state.message,
      requestChange: this.updateForm()
    };
    return (
      <input type="text"
              className="writer_input"
              name="message"
              placeholder="Write a post..."
              id="writer_input"
              valueLink={valueLink}
              onFocus={this.onFocus}
              onKeyUp={this.onKeyUp}
              />
      );
  },

  render: function() {
    return (
      <div id="writer">
        <input onKeyUp={this.onKeyUp} />
        <button
          type="submit"
          className="writer_button"
          onClick={this.onClick}>
          send
        </button>

      </div>
    );
  }
});
