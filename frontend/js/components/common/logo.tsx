import * as classnames from 'classnames';
import * as React from 'react';
import * as ReactDom from 'react-dom';

const { withStyles } = require('@material-ui/core/styles');

const style = withStyles((theme: any) => ({
  center: {
    textAlign: 'center',
  },

  smallest: {
    height: 50,
  },

  smaller: {
    height: 75,
  },

  small: {
    height: 100,
  },
}));

interface IProps {
  classes: any;
  className: any;
  small: boolean;
  smaller: boolean;
  smallest: boolean;
  center: boolean;
  white: boolean;
}

const Logo = (props: IProps): JSX.Element => {
  const { classes, small, smaller, smallest, center, white, className } = props;
  const imageSrc = !white ? './img/kalash.png' : './img/kalash.png';

  return (
    <div
      className={classnames({
        logo: true,
        [classes.center]: center,
        [className]: className,
      })}>
      <img
        className={classnames({
          [classes.smallest]: smallest,
          [classes.smaller]: smaller,
          [classes.small]: small,
        })}
        src={imageSrc}
        alt="Kalash" />
    </div>
  );
};

export default style(Logo);
