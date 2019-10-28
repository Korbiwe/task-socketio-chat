import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import MessageList from '../components/MessageList';

class MessageListContainer extends React.Component {
  render() {
    return <MessageList messages={this.props.room.messages}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    'user': state.user,
    'room': state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer);