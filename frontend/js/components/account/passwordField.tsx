import Button from '@material-ui/core/Button';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TextValidator, ValidatorForm } from '../common/formValidator';

const { withStyles } = require('@material-ui/core/styles');

const styles = (theme: any) => ({
  password: {
    marginLeft: '0px',
    marginRight: '0px',
    position: 'relative',
  },

  showpassword: {
    display: 'none',
    position: 'absolute',
    right: '0px',
    top: '15px',
    zIndex: '100',
    backgroundColor: 'rgba(255,255,255,0.75)',
  },

  visible: {
    display: 'block',
  },
});

enum ShowPasswordButtonText {
  SHOW = 'show',
  HIDE = 'hide',
}

class PasswordField extends React.Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      showPasswordButtonVisible: false,
      showPasswordButtonText: ShowPasswordButtonText.SHOW,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.toggleVisibilityButtonText = this.toggleVisibilityButtonText.bind(this);
  }

  handleChange(e: any) {
    this.toggleVisibilityButton(!!e.target.value);

    if (this.props.onChange) {
      this.props.onChange(e);
    }
  }

  handleFocus(e: any) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  toggleVisibilityButton(show: boolean) {
    this.setState({ showPasswordButtonVisible: show });
  }

  toggleVisibilityButtonText() {
    this.setState({
      showPasswordButtonText: this.state.showPasswordButtonText === ShowPasswordButtonText.SHOW
        ? ShowPasswordButtonText.HIDE
        : ShowPasswordButtonText.SHOW,
    });
  }

  render() {
    const classes = this.props.classes.showpassword
      + (this.state.showPasswordButtonVisible ? ' ' + this.props.classes.visible : '');

    return (
      <div className={this.props.classes.password}>
        <TextValidator
          name={this.props.name || 'password'}
          fullWidth
          label={this.props.label || 'Password'}
          margin="dense"
          autoComplete="off"
          type={this.state.showPasswordButtonText === ShowPasswordButtonText.HIDE ? 'text' : 'password'}
          value={this.props.value}
          validators={{
            required: 'this field is required',
            correctPassword: 'user name or password provided is incorrect.',
            ...this.props.extraValidators,
          }}
          onChange={this.handleChange}
          onFocus={this.handleFocus} />
        {!this.props.hideVisibilityButton &&
          <Button onClick={this.toggleVisibilityButtonText} color="primary" className={classes}>
            {this.state.showPasswordButtonText}
          </Button>}
      </div>
    );
  }
}

export default withStyles(styles)(PasswordField);
