import React from 'react';
import { connect } from 'react-redux';

import Navigator from './components/Navigator';
import { handleInitialData } from './actions/shared';

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <Navigator />
    );
  }
}

const mapDispatchToProps = { handleInitialData };

export default connect(null, mapDispatchToProps)(App);
