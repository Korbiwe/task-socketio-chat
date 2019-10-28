import React from 'react';
import {push} from 'connected-react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setNickname} from '../actions';
import TextInput from '../components/TextInput';

class NicknameForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      'nickname': this.props.user.nickname || 'Anonymous',
    };
  }

  handleInputChange(id, value) {
    if (id === 'nicknameInput') {
      this.setState({'nickname': value});
    }
  }

  handleSubmit(event) {
    this.props.setNickname(this.state.nickname);
    this.props.push('/');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Tell us your nickname.</label>
          <TextInput placeholder='Anonymous' id='nicknameInput' value={this.state.nickname}
                     onChange={this.handleInputChange}/>
        </div>
        <button type='submit' className='btn btn-primary'>That's my name alright.</button>
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
  return bindActionCreators({setNickname, push}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(NicknameForm);
