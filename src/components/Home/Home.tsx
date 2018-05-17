import { Button, Icon } from '@blueprintjs/core';
import React from 'react';
import { hot } from 'react-hot-loader';

class Bets extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <h1>Welcome to Propbets</h1>
        <h3>
          This is the new legal way to bet against your friends and make sure
          they actually pay you
        </h3>
        <Button>Click here to create a bet</Button>
      </div>
    );
  }
}

export default hot(module)(Bets);
