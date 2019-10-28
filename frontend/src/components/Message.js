import React from 'react';
import moment from 'moment';

export default class Message extends React.Component {
  render() {
    return (
      <div className='card text-secondary'>
        <div className='card-body'>
          <h6 className='card-subtitle mb-2 text-left'>{this.props.sender}</h6>
          <p className='card-text float-left'>
            {this.props.body}<br/>
            <small>{moment(this.props.datetime).format('LTS')}</small>
          </p>
        </div>
      </div>
    );
  };
}
