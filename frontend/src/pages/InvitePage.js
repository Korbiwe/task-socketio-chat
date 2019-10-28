import React from 'react';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {withRouter} from 'react-router';
import {connect} from 'react-redux';

import {joinRoom, setNickname} from '../actions';
import InviteForm from '../forms/InviteForm';

class InvitePage extends React.Component {
  constructor(props) {
    super(props);

    // Should contain ['', 'invite', <roomName>]
    const urlParts = this.props.location.pathname.split('/');

    if (urlParts.length !== 3) {
      // TODO: set some state to render a message about an invalid invite link later.
      this.props.push('/');
    }

    this.state = {
      'room': this.props.location.pathname.split('/')[2],
    };
  }


  render() {

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mx-auto mt-5'>
            <div className='card'>
              <div className='card-body mx-auto'>
                <InviteForm room={this.state.room}/>
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
  return bindActionCreators({push, setNickname, joinRoom}, dispatch)
};

const pageWithRouter = withRouter(InvitePage);
export default connect(mapStateToProps, mapDispatchToProps)(pageWithRouter);
