import palette from '../palette';

const style: any = {
  root: {
    '&:hover:not($disabled)': {
      backgroundColor: palette.background.default
    }
  }
};

export default style;
