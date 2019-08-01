// Colors
import { primary } from '../../common/colors';
import palette from '../palette';

const style: any = {
  root: {
    backgroundColor: palette.background.default,
    '&:hover': {
      backgroundColor: primary.light
    },
    '&$focused': {
      backgroundColor: primary.light
    }
  }
};

export default style;
