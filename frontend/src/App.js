import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Link } from 'react-router-dom';
import Routes from './routes';
import theme from './theme';
import './static/css/uikit.css'

const App = ({ history }) => {
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;