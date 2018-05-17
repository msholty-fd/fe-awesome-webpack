import { Button, Card, Elevation, Icon } from '@blueprintjs/core';
import React from 'react';
import { hot } from 'react-hot-loader';

class Bets extends React.Component<{}, {}> {
  public render() {
    return (
      <div style={{ display: 'flex', alignItems: 'space-between' }}>
        <Card
          interactive={true}
          elevation={Elevation.TWO}
          style={{ margin: 15 }}
        >
          <h5>Mike Trout</h5>
          <p>1 HR</p>
          <p>You paid $80</p>
          <p>Opponent paid $40</p>
          <p>Winner takes $120</p>
        </Card>
        <Card
          interactive={true}
          elevation={Elevation.TWO}
          style={{ margin: 15 }}
        >
          <h5>Lebron James</h5>
          <p>5 3-pointers</p>
          <p>You paid $80</p>
          <p>Opponent paid $40</p>
        </Card>
        <Card
          interactive={true}
          elevation={Elevation.TWO}
          style={{ margin: 15 }}
        >
          <h5>Stephen Curry</h5>
          <p>20 3-pointers</p>
          <p>You paid $80</p>
          <p>Opponent paid $40</p>
        </Card>
      </div>
    );
  }
}

export default hot(module)(Bets);
