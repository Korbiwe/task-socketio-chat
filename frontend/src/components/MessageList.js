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
      <ul className='list-unstyled my-auto' style={{'overflowY': 'scroll', 'minHeight': '100%', 'maxHeight': '100%'}}>
        {messages}
      </ul>
    );
  }
}