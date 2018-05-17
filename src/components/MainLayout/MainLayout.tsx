import { Icon } from '@blueprintjs/core';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

class MainLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <nav className="pt-navbar .modifier">
          <div className="pt-navbar-group pt-align-left">
            <Icon icon="bank-account" style={{ marginRight: 5 }} />
            <div className="pt-navbar-heading">PropBet</div>
          </div>
          <div className="pt-navbar-group pt-align-right">
            <Link to="/" className="pt-button pt-minimal pt-icon-home">
              Home
            </Link>
            <Link to="/bets" className="pt-button pt-minimal pt-icon-dollar">
              My Bets
            </Link>
            <Link
              to="/create-bet"
              className="pt-button pt-minimal pt-icon-new-object"
            >
              Make a Bet
            </Link>
            <span className="pt-navbar-divider" />
            <button className="pt-button pt-minimal pt-icon-user" />
            <button className="pt-button pt-minimal pt-icon-notifications" />
            <button className="pt-button pt-minimal pt-icon-cog" />
          </div>
        </nav>
        <div style={{ margin: 5 }}>{this.props.children}</div>
      </div>
    );
  }
}

export default hot(module)(MainLayout);
