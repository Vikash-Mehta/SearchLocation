import * as React from 'react';

// Externals
import * as PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Grid, Typography } from '@material-ui/core';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  content: {
    marginTop: '150px',
    textAlign: 'center'
  },
  image: {
    display: 'inline-block',
    marginTop: '50px',
    maxWidth: '100%',
    width: '554px'
  }
});

class Profile extends React.Component<any, any> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          justify="center"
          spacing={4}>
          Profile
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Profile);
