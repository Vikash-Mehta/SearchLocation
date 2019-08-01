import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

import Dashboard from './views/Dashboard';
import Profile from './views/Profile';
import NotFound from './views/NotFound';
import Header from './mainHeader';

const styles = theme => ({
  mainContainer: {
    position: 'absolute',
    top: '64px',
    height: 'calc(100% - 64px)',
    width: '100%'
  },
});

class Routes extends React.Component<any, any> {
  render() {
    const { classes } = this.props;

    return (<div>
        <Header/>
        <div className={classes.mainContainer}>
          <Switch>
            <Redirect exact from="/" to="/dashboard"/>
            <Route component={Dashboard} exact path="/dashboard"/>
            <Route component={Profile} exact path="/profile"/>
            <Route component={NotFound} exact path="/not-found" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Routes);
