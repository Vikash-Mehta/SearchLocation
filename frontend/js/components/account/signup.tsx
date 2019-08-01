import * as React from 'react';
import { TextValidator, ValidatorForm } from '../common/formValidator';
import Link from '../common/link';
import PasswordField from './passwordField';
import accountStyles from './styles';
import config from '../../serverConfig';
import * as cookie from 'js-cookie';
import { pick } from 'helpers/lodashHelpers';
const { withStyles } = require('@material-ui/core/styles');
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { postRedirect } from '../../helpers/navigationUtils';
import rightPanelStyle from './rightStyle';

const styles = (theme: any) => ({
  ...accountStyles(theme),
  ...rightPanelStyle(theme),
  actionButtons: {
    marginTop: 20,
  },
  form: {
    padding: '10px 20px'
  },
});

class SignUp extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      userName: '',
      password: '',
    };
  }

  handleChange = (name: any) => (event: any) => this.setState({ [name]: event.target.value });

  signup = async () => {
    try {
      const postdata = pickBy({
        ...pick(this.state, ['userName', 'password']),
      });

      postRedirect(config.api + '/account/signup', postdata);
    }
    catch (err) {
    }
  }

  render() {
    const props = this.props;
    const classes = props.classes;

    return (<div className={classes.formWrapper}>
      <ValidatorForm
        className={classes.form}
        onSubmit={this.signup}>
        <h3 className={classes.heading}>Welcome! Sign up</h3>

        <div>
          <TextValidator
            name="userName"
            fullWidth
            label="Email address or username"
            margin="dense"
            autoComplete="off"
            validators={{
              required: 'this field is required',
            }}
            value={this.state.userName}
            onChange={this.handleChange('userName')}
            id="user-name" />

          <PasswordField
            value={this.state.password}
            onChange={this.handleChange('password')}
            extraValidators={{
              ['matchRegexp:^.{6,}$']: 'password must be at least 6 characters long',
            }}
            id="password" />

          <div className={classes.actionButtons}>
            <Button className={classes.primaryButton} type="submit" variant="contained" color="primary" onClick={this.signup}>
              Sign up
          </Button>
          </div>
        </div>

        <div className={classes.footer}>
        <Typography
              className={classes.signUp}
              variant="body1">
              Already have an account? <Link className={classes.secondaryLink} to="/" color="primary">Sign in</Link>
        </Typography>
        </div>
      </ValidatorForm>
    </div>);
  }
}

export default withStyles(styles)(SignUp);
