import MainLayout from 'components/MainLayout';
import Router from 'components/Router';
import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <MainLayout>
        <Router />
      </MainLayout>
    );
  }
}

export default hot(module)(App);
