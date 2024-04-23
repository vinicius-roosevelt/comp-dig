import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function Banner( props ) {

    const digitalIdStyle = {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,.3)',
    }
  
    return (
        <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url( https://source.unsplash.com/random?wallpapers )`
        }}
      >
        <Box
          sx={ digitalIdStyle }
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: 'relative',
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Box sx = {{backgroundColor : 'rgba(150, 150, 150, 0.3)', padding : '5px'}} >
              <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                { props.title}
              </Typography>
  
  
              {/* DESCRICAO DE DENTIDADE DIGITAL */}
              <Typography variant="h5" color="inherit" paragraph>
                {props.content}
              
              </Typography>
              </Box>
              
  
            </Box>
          </Grid>
        </Grid>
      </Paper>
    );
  }
  
export default Banner;