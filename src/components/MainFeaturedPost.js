import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function MainFeaturedPost() {

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
            <Box sx = {{backgroundColor : 'rgba(150, 150, 150, 0.4)', padding : '5px'}} >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              Identidade Digital
            </Typography>


            {/* DESCRICAO DE DENTIDADE DIGITAL */}
            <Typography variant="h5" color="inherit" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non tellus et augue consequat venenatis id eu
              magna. In quam metus, dapibus id mattis sed, tempus volutpat lacus. Quisque id vestibulum enim. Phasellus ullamcorpe
              feugiat leo, sit amet pharetra nunc. Aliquam diam leo, aliquam a tempor quis, ultricies et massa. Nam urna ligula,
              scelerisque ut enim quis, molestie venenatis urna. Etiam aliquam lectus non rhoncus feugiat. Vestibulum molestie urna
              tellus, non vulputate tellus vehicula fermentum. Donec et maximus risus. Donec non auctor dui, non aliquam lectus.
              Vestibulum at lobortis mi. Cras ac placerat dui, at placerat massa. Nunc nec pulvinar elit, nec vulputate elit. Cras non
              scelerisque nibh, quis vestibulum lacus. Integer eleifend arcu ut rutrum molestie.
            
            </Typography>
            </Box>
            

          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MainFeaturedPost;
