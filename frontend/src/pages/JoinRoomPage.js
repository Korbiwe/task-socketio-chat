import React from 'react';
import JoinRoomForm from '../forms/JoinRoomForm';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

class JoinRoomPage extends React.Component {
  constructor(props) {
    super(props);

    if (!this.props.user.nickname ||
      this.props.user.nickname === '') {
      // If the user has no nickname, redirect him to the nickname page.
      // We can redirect to the root here, but it makes little difference and is kind of debatable.
      this.props.push('/nickname');
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mx-auto mt-5'>
            <div className='card'>
              <div className='card-body mx-auto'>
                <JoinRoomForm/>
              </div>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(JoinRoomPage);

