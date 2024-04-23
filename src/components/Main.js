import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';

function Main() {

  return (
    <Grid item xs={12} >

      <Typography variant="h6" gutterBottom>
        TITULO
      </Typography>
      
      <Divider />
      
    </Grid>
  );
}

export default Main;
