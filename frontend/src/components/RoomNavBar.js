import React from 'react';
import {withRouter} from 'react-router';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class RoomNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.redirect = this.redirect.bind(this);
    this.onCopy = this.onCopy.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

    this.state = {
      'copied': false,
      'inviteUrl': ''
    };
  }

  componentDidMount() {
    const l = window.location;
    this.setState(
      {...this.state, 'inviteUrl': `${l.protocol}//${l.host}/invite/${this.props.roomName}`}
    );
  }

  onCopy() {
    this.setState({
      'copied': true,
    })
  }

  onDismiss() {
    this.setState({
      'copied': false,
    })
  }

  redirect(route) {
    this.props.history.push(route);
  };

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-0'>
        <p className='text-center mx-2 my-auto lead'>Room {this.props.roomName}</p>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <button className='nav-link bg-primary border-0' onClick={this.props.onLeave}>Leave</button>
          </li>
          <li>
            <button className='nav-link bg-primary border-0' onClick={() => this.redirect('/nickname')}>Change
              nickname
            </button>
          </li>
          <li>
            <CopyToClipboard text={this.state.inviteUrl} onCopy={this.onCopy}>
              <button className='nav-link bg-primary border-0'>Invite</button>
            </CopyToClipboard>
          </li>
          {
            this.state.copied &&
            <div className='alert alert-dismissible alert-info my-auto ml-3'>
              <button type='button' className='close' onClick={this.onDismiss}>&times;</button>
              Link copied to clipboard.
            </div>
          }
        </ul>
      </nav>
    );
  }
}

export default withRouter(RoomNavBar)