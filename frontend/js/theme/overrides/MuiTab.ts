// Palette
import palette from '../palette';

const style: any = {
  root: {
    height: '50px',
    fontWeight: 400,
    textTransform: 'none',
    fontSize: '14px',
    '@media (min-width: 960px)': {
      minWidth: '100px'
    },
    '&$selected': {
      fontWeight: 500
    }
  },
  label: {},
  labelContainer: {},
  textColorPrimary: {
    color: palette.text.secondary
  }
};

export default style;
