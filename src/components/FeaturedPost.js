import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function FeaturedPost() {
  return (
    <Grid item sm={12} >
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            
            <Typography component="h2" variant="h5">
              Pesquisa de interesses
            </Typography>
            
            <Typography paragraph>
              Preencha a pesquisa abaixo para ser direcionado à comunidades com interesses em comum.
            </Typography>

          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
