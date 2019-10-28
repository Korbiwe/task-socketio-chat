import React from 'react';
import {push} from 'connected-react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {sendMessage} from '../actions';
import TextArea from '../components/TextArea';

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      'message': ''
    };
  }

  handleInputChange(id, value) {
    if (id === 'messageInput') {
      this.setState({'message': value});
    }
  }

  handleSubmit(event) {
    if (this.state.message.trim() !== '') {
      this.props.sendMessage(this.state.message, this.props.room.name);
      // TODO: clear the input only if sending the message succeeded.
      this.setState({'message': ''});
    }
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='input-group'>
          <TextArea placeholder='' id='messageInput' onChange={this.handleInputChange} onSubmit={this.handleSubmit}
                    value={this.state.message}/>
          <div className='input-group-append'>
            <button type='submit' className='btn btn-primary'>Send</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'room': state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({sendMessage, push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(SendMessageForm);
