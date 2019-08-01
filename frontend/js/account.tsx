const { MuiThemeProvider } = require('@material-ui/core/styles');
import { lightBlue, pink, red } from '@material-ui/core/colors';
const axios = require('axios');

import config from './serverConfig';
import * as cookie from 'js-cookie';
import Signin from './components/account/signin';
import Signup from './components/account/signup';
import Logo from './components/common/logo';
import { withStyles } from '@material-ui/core';

// Material components
import {
  Grid,
  Button,
  IconButton,
  CircularProgress,
  TextField,
  Typography
} from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import theme from './theme';

import {
  HashRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';

const styles = (theme: any) => {
  const style: any = {
  input: {
    display: 'none',
  },
  logoContainer: {
    width: '100%',
    margin: 0,
  },
  logoLink: {
    textDecoration: 'none',
  },
  formWrapper: {
    margin: '10px 0',
  },
  regularLogo: {
    display: 'none',
  },
  whiteLogo: {
    display: 'block',
  },
  oauthSignoutImage: {
    opacity: 0,
  },
  '@media (max-width: 460px)': {
    root: {
      paddingTop: 0,
      width: '100%',
      marginLeft: 0,
      marginRight: 0,
    },
    logoLink: {
      marginBottom: 0,
    },
    whiteLogo: {
      display: 'none',
    },
    regularLogo: {
      display: 'block',
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh'
  },
  grid: {
    height: '100%',    
  },
  content: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentBody: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  quote: {
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteInner: {
    textAlign: 'center',
    flexBasis: '600px'
  },
  quoteText: {
    color: theme.palette.common.white,
    fontWeight: 300
  },
};
 return style;
};

const validateRoute = (history: any, location: any) => {
  // history.push(redirectUrl);
};

class Account extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props);
    props.history.listen((location: any, action: any) => validateRoute(props.history, location));
  }

  async componentWillMount() {
    validateRoute(this.props.history, this.props.location);
  }

  render() {
    const classes = this.props.classes || {};

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.content} item lg={6} xs={12}>
            <div className={classes.content}>
              <div className={classes.contentBody}>
                <Route exact path="/" component={Signin} />
                <Route exact path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
              </div>
            </div>
          </Grid>
          <Grid className={classes.quoteWrapper} item lg={6}>
            <div className={classes.quote}>
                <div className={classes.quoteInner}>
                  <Typography
                    className={classes.quoteText}
                    variant="h1">
                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life.
                  </Typography>
                </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const WrappedAccount = withRouter(withStyles(styles)(Account));

const main = async () => {
  let response: any = {};
  
  try {
    response = await axios.get(config.api + '/dashboard/isloggedin', { withCredentials: true });
  }
  catch (ex) {
    response = {};
  }

  if (!response || !response.data) {
    showAccountPage();
  }
  else {
    window.location.href = window.location.origin + '/index.html#/dashboard';
  }
};

const showAccountPage = () => {
  ReactDOM.render(
    <MuiThemeProvider theme={theme}>
      <Router basename="/">
        <WrappedAccount />
      </Router>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
};

main();