import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import FormGroup from './FormGroup';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CourseCard from './CourseCard';

import FormControl from '@mui/material/FormControl';
import Banner from './Banner';

const defaultTheme = createTheme();

const styleModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Blog() {

  const [ responseModalOpen, setResponseModalOpen ] = React.useState(false);
  const [ cursos, setCursos ] = React.useState([]);

  function handleForm( event ) {
    event.preventDefault();

    const data = new FormData(event.target);
    var result = [];

    for (const [name,value] of data) {
      if ( value > 0 ) {
        result.push( { course : name, peso : value })
      }
    }

    result.sort( (o1, o2) => {
      if ( o1.peso > o2.peso ) {
        return -1
      }

      if (o2.peso > o1.peso) {
        return 1
      }

      return 0;
    } )

    setCursos( result.slice(0, 4) );
    setResponseModalOpen( true );
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


        {/* MODAL */}
        <Modal
          open={ responseModalOpen }
          onClose={ () => {} }
        >

          <Card sx={ styleModal }>
            <CardContent>

              <Typography variant="h5">
                Comunidades com interesses em comum
              </Typography>

              { cursos.map( (item, key) => {

                return (
                  <CourseCard key={key} title={item.course} />
                )
                
              })}
              {/* <CourseCard title={item.title} /> */}

            </CardContent>
          </Card>

        </Modal>

      </Container>

    </ThemeProvider>
  );
}
