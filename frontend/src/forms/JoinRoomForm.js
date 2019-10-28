import React from 'react';
import {push} from 'connected-react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {joinRoom} from '../actions';
import TextInput from '../components/TextInput';

class JoinRoomForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      'room': 'kittens',
    };
  }

  handleInputChange(id, value) {
    if (id === 'roomInput') {
      this.setState({'room': value});
    }
  }

  handleSubmit(event) {
    this.props.joinRoom(this.state.room);
    this.props.push('/');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Hey {this.props.user.nickname}! Let's hook you up with a chat room.</label>
          <TextInput placeholder='kittens' id='roomInput' value={this.state.room} onChange={this.handleInputChange}/>
        </div>
        <div className='row'>
          <button type='submit' className='btn btn-primary col-sm-4 mx-auto'>Take me to the chat!</button>
          <button className='btn btn-primary col-sm-4 mx-auto' onClick={() => this.props.push('/nickname')}>Change my
            nickname.
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'user': state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({joinRoom, push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoomForm);
