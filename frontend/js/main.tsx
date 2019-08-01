import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
const axios = require('axios');
import { HashRouter as Router } from 'react-router-dom';
import config from './serverConfig';
const { MuiThemeProvider } = require('@material-ui/core/styles');
import * as cookie from 'js-cookie';
import theme from './theme';
import Routes from './components/app/Routes';
import './css/leaflet.css'
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