import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.user.nickname ||
      this.props.user.nickname === '') {
      // If the user doesn't have a nickname, redirect him to the nickname page.
      this.props.push('/nickname');
    } else if (!this.props.room.name ||
      this.props.room.name === '') {
      // If the user doesn't have a room, redirect him to the joinRoom page.
      this.props.push('/joinRoom');
    } else {
      // If the user has both, redirect him to the room.
      this.props.push('/room')
    }
  }

  render() {
    return null;
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
