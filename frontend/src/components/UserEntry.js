import React from 'react';

export default class Message extends React.Component {
  render() {
    return (
      <div className='card text-secondary'>
        <div className='card-body'>
          <h6 className='card-subtitle mb-2 text-left'>{this.props.nickname}</h6>
        </div>
      </div>
    );
  };
}
