import config from '../../serverConfig';
import * as cookie from 'js-cookie';
import { pickBy } from 'helpers/lodashHelpers';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { postRedirect } from '../../helpers/navigationUtils';
import { TextValidator, ValidatorForm } from '../common/formValidator';
import Link from '../common/link';
import PasswordField from './passwordField';
import accountStyles from './styles';
import rightPanelStyle from './rightStyle';
import {
  Button,
  Typography,
} from '@material-ui/core';

const { withStyles } = require('@material-ui/core/styles');
const axios = require('axios');

const styles = (theme: any) => ({
  ...accountStyles(theme),
  ...rightPanelStyle(theme),
  reset: {
    display: 'block',
    float: 'right',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 10,
  },
});

class SignIn extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (ev: any) => this.setState({ [ev.target.name]: ev.target.value });

  handlePasswordFocus = (ev: any) => {
  }

  signInNative = () => {
    const postdata = pickBy({
      ...this.state,
    });

    postRedirect(config.api + '/account/signin', postdata);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.formWrapper}>
        <Typography
          className={classes.title}
          variant="h2">
          Sign in
        </Typography>

        <Typography
          className={classes.sugestion}
          variant="body1">
          Login with email address
        </Typography>

        <ValidatorForm
          className={classes.form}
          ref="form"
          onSubmit={this.signInNative}>

          <TextValidator
            name="username"
            fullWidth
            label="Email or username"
            margin="dense"
            validators={{
              required: 'this field is required',
              accountExists: 'Account not found! Sign up by clicking "create an account" below.',
            }}
            value={this.state.username}
            onChange={this.handleChange}
            id="username" />

          <PasswordField value={this.state.password} onChange={this.handleChange} onFocus={this.handlePasswordFocus} id="password" />

          <Button type="submit" variant="contained" color="primary" className={classes.primaryButton}>
            Log in
          </Button>
          <div className={classes.footer}>
            <Typography
              className={classes.signUp}
              variant="body1">
              Don't have an account?{' '} 
              <Link className={classes.secondaryLink} to="/signup" color="primary">Sign up</Link>
            </Typography>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(SignIn));
