import { Icon } from '@blueprintjs/core';
import Bets from 'components/Bets';
import CreateBet from 'components/CreateBet';
import Home from 'components/Home';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

interface IState {
  bets: any;
  createBet: any;
}

class Router extends React.Component<{}, IState> {
  public render() {
    return (
      <React.Fragment>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/bets" component={Bets} />
        <Route exact={true} path="/create-bet" component={CreateBet} />
      </React.Fragment>
    );
  }
}

export default hot(module)(Router);
