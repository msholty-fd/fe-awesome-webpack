import { Icon } from '@blueprintjs/core';
// import Bets from 'components/Bets';
// import CreateBet from 'components/CreateBet';
import Home from 'components/Home';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

interface IState {
  bets: any;
  createBet: any;
}

const Loading = () => <h1>Loading</h1>;
class Router extends React.Component<{}, IState> {
  public state = {
    bets: Loading,
    createBet: Loading,
  };
  public async componentDidMount() {
    const [Bets, CreateBet] = await Promise.all([
      import('components/Bets'),
      import('components/CreateBet'),
    ]);
    this.setState({
      bets: Bets.default,
      createBet: CreateBet.default,
    });
  }
  public render() {
    return (
      <React.Fragment>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/bets" component={this.state.bets} />
        <Route
          exact={true}
          path="/create-bet"
          component={this.state.createBet}
        />
      </React.Fragment>
    );
  }
}

export default hot(module)(Router);
