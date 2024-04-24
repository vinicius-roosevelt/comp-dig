import * as React from 'react';
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
              Identidade, segundo o Grande Dicionário da Língua Portuguesa, é a
              “consciência que uma pessoa tem de si própria; Conjunto de nome, de apelido, de parentesco, de profissão, de sinais físicos que
              individualiza a pessoa | Conjunto de elementos que permitem saber quem a pessoa é.
            </Typography>

            <Typography paragraph>
              Diante disso, podemos considerar que a identidade digital é a forma como você transparece suas individualidades, e também, a forma
              como você constrói uma personalidade dentro das redes.
            </Typography>

            <Typography paragraph>
              Tendo isso em mente, o questionário busca entender os seus interesses e te direcionar para comunidades que compartilhes desses
              interesses. Dessa forma, pode-se compartilhar informações e conhecimentos sobre essas áreas de como que todos os integrantes
              consigam aperfeiçoar seus conhecimentos.
            </Typography>

          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default FeaturedPost;
