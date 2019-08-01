import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Link } from 'react-router-dom';
import lightBlue from '@material-ui/core/colors/lightBlue';
const { withStyles } = require('@material-ui/core/styles');

const style = withStyles((theme: any) => ({
  link: {
    color: lightBlue[800],
    cursor: 'pointer',
    textDecoration: 'none',
  },
}));

interface IProps {
  classes: any;
  className: string;
  to: string;
  color: string;
}

const ActivelyLearnLink = (props: IProps): JSX.Element => {
  const classNames = `${props.classes.link} ${props.className}`;
  const {classes: omit, ...propsWithoutClasses} = props;

  return <Link {...propsWithoutClasses} className={classNames}></Link>;
};

export default style(ActivelyLearnLink);
