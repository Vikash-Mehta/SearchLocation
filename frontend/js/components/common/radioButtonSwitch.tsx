import * as React from 'react';
import Switch from '@material-ui/core/Switch';
const { createMuiTheme, MuiThemeProvider, withStyles } = require('@material-ui/core/styles');

interface IProps {
  leftOption: string;
  rightOption: string;
  checked: boolean;
  classes?: any;
}

const activelyLearnTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiSwitch: {
      icon: {
        backgroundColor: '#03A9F4'
      },
      bar: {
        backgroundColor: '#81D4FA !important'        
      }
    }
  }
});

const el = (props: IProps): JSX.Element => {
  const { classes } = props;
  return (<MuiThemeProvider theme={activelyLearnTheme}>
      <a>{props.leftOption}</a>
      <Switch
        className={classes.radioButton}
        checked={props.checked}
        color="primary" 
        disableRipple={true} />
      <a>{props.rightOption}</a>
    </MuiThemeProvider>
  );
};

const style = withStyles(() => ({
  radioButton: {
    display: 'inline-block',
  },
}));

export default style(el);