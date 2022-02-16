import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: '#81d4fa',
        },
        secondary: {
            main: '#c2e6f9',
        }
    },
}); 

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

// interface Values {
//     questionAnswer: string;
// }
// interface Props { 
//     onSubmit: (values: Values) => void;
// }

export default function BasicCard() {
    const submitAnswer = () => {
        console.log('submit answer');
    }

    return (
        <Card sx={{ minWidth: 275 }}>
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="center">
                <CardContent>
                    <Typography sx={{ fontSize: 22, mt: 3}} color="text.primary" gutterBottom>
                    What software are we migratring our ERP system to?
                    </Typography>
                    <ThemeProvider theme={theme}>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100%' },
                            }}
                            noValidate
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            >
                            <TextField id="standard-large" label="" variant="standard" />
                        </Box>
                    </ThemeProvider>
                </CardContent>
            </Box>
            <Box
            display="flex"
            justifyContent="flex-end"
            sx={{
                '& > :not(style)': { mr: 3, mb: 3 },
            }}
            >
            <CardActions>
                <Button 
                    type='submit' 
                    className='!text-blue' 
                    size="small"
                    onClick={submitAnswer}
                    >Submit</Button>
            </CardActions>
            </Box>
        </Card>
    );
}