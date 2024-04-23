import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import { Box, Divider } from '@mui/material';

export default function FormGroup(props) {
    return (
        <Box mt={4} p={4} sx={ {backgroundColor : "rgba(222, 222, 222, 0.2)"} }>

            <FormLabel sx={{color : 'black', fontSize : '1.2rem'}}> {props.title} </FormLabel>
            <RadioGroup
                defaultValue={`${props.questao}_0`}
                name={props.questao}
            >
            
            <FormControlLabel value={`${props.questao}_-1`} control={<Radio />} label="Discordo." />
            <FormControlLabel value={`${props.questao}_0`}  control={<Radio />} label="Tanto faz." />
            <FormControlLabel value={`${props.questao}_1`}  control={<Radio />} label="Concordo." />
            <FormControlLabel value={`${props.questao}_2`}  control={<Radio />} label="Muito!" />
            
            </RadioGroup>

        </Box>
        );
  }
  