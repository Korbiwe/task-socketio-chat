import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import SendMessageForm from '../forms/SendMessageForm';
import MessageListContainer from '../containers/MessageListContainer';
import UserListContainer from '../containers/UserListContainer';
import RoomNavBar from '../components/RoomNavBar';
import {leaveRoom} from '../actions';

class RoomPage extends React.Component {
  constructor(props) {
    super(props);

    this.onLeave = this.onLeave.bind(this);

    if (!this.props.user.nickname ||
      this.props.user.nickname === '' ||
      !this.props.room.name ||
      this.props.room.name === '') {
      // users without a nickname and/or a room shouldn't be able to access this page.
      // we can safely redirect them to the root page, as it handles the rest.
      this.props.push('/');
    }
  }

  onLeave() {
    this.props.leaveRoom(this.props.room.name);
    this.props.push('/');
  }


  render() {
    return (
      <div>
        <RoomNavBar roomName={this.props.room.name} onLeave={this.onLeave}/>
        <div className='container-fluid'>
          <div className='row' style={{ 'minHeight': '80vh', 'maxHeight': '80vh'}}>
            <div className='col-lg-10 bg-white m-0 p-0'>
              <MessageListContainer/>
              <SendMessageForm/>
            </div>
            <div className='col-lg-2 m-0 p-0'>
              <UserListContainer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    'user': state.user,
    'room': state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({push, leaveRoom}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
