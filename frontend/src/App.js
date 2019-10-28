import React from 'react';
import {ConnectedRouter} from 'connected-react-router';
import routes from './routes';

const App = ({history, context}) => {
  return (
    <ConnectedRouter history={history} context={context}>
      {routes}
    </ConnectedRouter>
  );
};

export default App;
