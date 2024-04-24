import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function CourseCard( props ) {
    return (
        <Card sx={ {marginTop : '10px', marginBottom : '10px', backgroundColor: '#efefef'} } >
            <CardContent>
            <Typography variant="h5">
                { props.title }
            </Typography>
            
            <Typography paragraph>
                Acesse o grupo pelo link: www.link_falso.com.br
            </Typography>
            
            </CardContent>
        </Card>
        
    );
}

export default CourseCard;