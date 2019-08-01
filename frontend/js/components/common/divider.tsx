import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactDom from 'react-dom';

const { withStyles } = require('@material-ui/core/styles');

const style = withStyles((theme: any) => ({
  small: {
    fontSize: 16,
  },

  big: {
    fontSize: 24,
  },

  divider: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: '20px 0px 0px',
    overflow: 'hidden',
    textAlign: 'center',
    color: '#000',

    '&:before': {
      content: '""',
      verticalAlign: 'top',
      display: 'inline-block',
      width: '6%',
      height: '.65em',
      borderBottom: '1px solid #000',
      margin: '0 2% 0 -55%',
    },
    '&:after': {
      content: '""',
      verticalAlign: 'top',
      display: 'inline-block',
      width: '6%',
      height: '.65em',
      borderBottom: '1px solid #000',
      margin: '0 -55% 0 2%',
    },
  },
}));

interface IProps {
  classes: any;
  text: string;
  big: boolean;
  small: boolean;
}

const Divider = (props: IProps): JSX.Element => {
  const { classes, text, big, small } = props;

  return (
    <div className={classnames({
      [classes.divider]: true,
      [classes.big]: big,
      [classes.small]: small,
    })}>
      {text}
    </div>
  );
};

export default style(Divider);
