import React from 'react';
import {Route, Switch} from 'react-router';
import HomePage from '../pages/HomePage'
import NicknamePage from '../pages/NicknamePage';
import JoinRoomPage from '../pages/JoinRoomPage';
import RoomPage from '../pages/RoomPage';
import InvitePage from '../pages/InvitePage';

const routes = (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/joinRoom' component={JoinRoomPage}/>
      <Route path='/room' component={RoomPage}/>
      <Route path='/nickname' component={NicknamePage}/>
      <Route path='/invite' component={InvitePage}/>
      <Route path='/**' component={HomePage}/>
    </Switch>
  </div>
);

export default routes;
