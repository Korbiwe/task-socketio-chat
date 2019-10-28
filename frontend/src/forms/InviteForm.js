import React from 'react';
import {push} from 'connected-react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {joinRoom, setNickname} from '../actions';
import TextInput from '../components/TextInput';

class InviteForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      'nickname': this.props.user.nickname || 'Anonymous',
      'room': this.props.room,
    };
  }

  handleInputChange(id, value) {
    if (id === 'nicknameInput') {
      this.setState({'nickname': value});
    }
  }

  handleSubmit(event) {
    this.props.setNickname(this.state.nickname);
    this.props.joinRoom(this.state.room);
    this.props.push('/');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <p>You have been invited to the room {this.state.room}.</p>
          <label>Your nickname:</label>
          <TextInput className='form-control' placeholder='Anonymous' id='nicknameInput' value={this.state.nickname}
                     onChange={this.handleInputChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>Take me to the room!</button>
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
  return bindActionCreators({joinRoom, setNickname, push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(InviteForm);