import React from 'react';
import Message from './Message';


export default class MessageList extends React.Component {
  render() {
    const messages = this.props.messages.map((message, i) =>
      <li key={i.toString()}>
        <Message sender={message.sender} body={message.body} datetime={message.datetime}/>
      </li>
    );
    return (
      <ul className='list-unstyled mb-0' style={{'overflowY': 'scroll', 'minHeight': '75vh', 'maxHeight': '75vh'}}>
        {messages}
      </ul>
    );
  }
}