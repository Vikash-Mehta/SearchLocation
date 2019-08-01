import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { HashRouter as Router } from 'react-router-dom';
const { MuiThemeProvider } = require('@material-ui/core/styles');
const axios = require('axios');
import * as cookie from 'js-cookie';

import Routes from './components/app/Routes';
import theme from './theme';
import './css/leaflet.css'
import config from './serverConfig';

const browserHistory: any = createBrowserHistory();

export default class App extends React.Component<any, any> {
  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <Router history={browserHistory} basename="/">
          <Routes />
        </Router>
      </MuiThemeProvider>);
  }
}

const main = async () => {
  let response: any = {};
  
  try {
    response = await axios.get(config.api + '/dashboard/isloggedin', { withCredentials: true });
  }
  catch (ex) {
    response = {};
  }

  if (response && response.data) {
    showMainPage();
  }
  else {
    window.location.href = '/account.html';
  }
};

const showMainPage = () => {
  ReactDOM.render(<App/>, document.getElementById('roots'));
};

main();