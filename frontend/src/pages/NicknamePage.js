import React from 'react';
import NicknameForm from '../forms/NicknameForm';
import {bindActionCreators} from 'redux';
import {push} from 'connected-react-router';
import {connect} from 'react-redux';

class NicknamePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 mx-auto mt-5'>
            <div className='card'>
              <div className='card-body mx-auto'>
                <NicknameForm/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NicknamePage);
