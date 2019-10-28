import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

import UserList from '../components/UserList';

class UserListContainer extends React.Component {
  render() {
    return <UserList users={this.props.room.users}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    'room': state.room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
