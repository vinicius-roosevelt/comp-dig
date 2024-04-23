import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import FormGroup from './FormGroup';

import FormControl from '@mui/material/FormControl';
import Banner from './Banner';

const defaultTheme = createTheme();

export default function Blog() {

  const [ responseModalOpen, setResponseModalOpen ] = React.useState(false);

  function handleForm( event ) {
    event.preventDefault();

    const data = new FormData(event.target);
    for (const [name,value] of data) {
      console.log(name, ":", value)
    }

    setResponseModalOpen(true)
    console.log(responseModalOpen)

  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Banner 
              title="Identidade digital"
              content= "Texto sobre o que é identidade digital deve vir aqui" />

          <Grid container spacing={4}>
            <FeaturedPost />
          </Grid>

          <Grid container sx={{ mt: 4 }}>

            <form onSubmit={ handleForm }>
            
              <FormControl>

                <FormGroup
                  title="Você se interessa pelas leis da física e suas aplicações no mundo."
                  questao="FISICA" />

                <FormGroup
                  title="Você se interessa por problemas matemáticos e suas aplicações no mundo."
                  questao="MATEMATICA" />

                <FormGroup
                  title="Você se interessa em discussões sobre acontecimentos históricos."
                  questao="HISTORIA" />

                <FormGroup
                  title="Você se interessa por discussões sobre os aspectos sociais atuais e antigos."
                  questao="SOCIOLOGIA" />

                <FormGroup
                  title="Você se interessa por assuntos filosóficos."
                  questao="FILOSOFIA" />

                <FormGroup
                  title="Você se interessa pelos estudos dos organismos e sobre os processos que sustentam a vida."
                  questao="BIOLOGIA" />

                <FormGroup
                  title="Você se interessa por atualidades e pelas relações entre as diversas nações."
                  questao="CIENCIAS-POLITICAS" />

                <Button 
                  sx={ {marginTop : '30px'} }
                  variant="contained"
                  color="success"
                  type='submit'
                >
                  Enviar respostas
                </Button>

                
              </FormControl>

            </form>
          </Grid>

          <Footer />
        </main>
      </Container>

    </ThemeProvider>
  );
}
