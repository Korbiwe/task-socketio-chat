import React from 'react';
import UserEntry from './UserEntry';


export default class UserList extends React.Component {
  render() {
    const users = this.props.users.map((user, i) =>
      <li key={i.toString()}>
        <UserEntry nickname={user}/>
      </li>
    );
    return (
      <div className='px-1' style={{'overflowY': 'scroll', 'minHeight': '100%', 'maxHeight': '100%'}}>
        <p className='lead'>Users in this room:</p>
        <ul className='list-unstyled mb-0'>
          {users}
        </ul>
      </div>
    );
  }
}