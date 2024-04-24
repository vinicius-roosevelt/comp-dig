import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function FeaturedPost() {
  return (
    <Grid item sm={12} >

        <Card sx={{ marginBottom : '30px' }} >
          <CardContent sx={{ flex: 1 }}>

            <Typography component="h2" variant="h5">
              Definição
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
              Tendo isso em mente, o questionário busca entender os seus interesses e te direcionar para comunidades que compartilhem desses
              interesses. Dessa forma, é possível compartilhar informações e conhecimentos sobre essas áreas de estudo de modo que todos os integrantes
              consigam aperfeiçoar seus conhecimentos.
            </Typography>

          </CardContent>
        </Card>

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

    </Grid>
  );
}

export default FeaturedPost;
