import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
    palette: {
      hunterGreen: {
        main: '#386641',
        light: '#50915D',
        dark: '#24422A'
      },
      white: {
        main: '#F2E8CF',
      },
      red: {
        main: '#BC4749',
        light: '#CE7879',
        dark: '#963638',
      }
    }
})

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id="contact" sx={{ mt: 10 }}>
                <Container sx={{ display: 'flex', flexDirection: 'row', gap: 5}}>
                    <Box sx={{ display: 'flex', flex: 1 }}>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3024%20W%20Addison%20St+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        />
                    </Box>
                    <Box component='form' sx={{ display: 'flex', flex: 1, flexDirection: 'column', alignItems: 'start', }}>
                        <Typography variant="h3" color='red.main' sx={{ mb: 1 }}>
                            Hire Me
                        </Typography>
                        <Typography variant='subtitle1' color="white.main" sx={{ textAlign: 'left' }}>
                            I&apos;m excited to join your team and to help you build the app or website of your dreams!
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                            <EmailIcon sx={{ color: 'red.light', pr: 0.5}} />
                            <Typography color='white.main'>
                                : brian.toch23@gmail.com
                            </Typography>
                        </Box>  
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                            <PhoneIcon sx={{ color: 'red.light', pr: 0.5}} />
                            <Typography color='white.main'>
                                : (215) 910-1467
                            </Typography>
                        </Box>  
                        <Box sx={{ display: 'flex', flexDirection: 'row', mt: 2 }}>
                            <IconButton href="https://github.com/btoch23">
                                <GitHubIcon fontSize="large" sx={{ color: 'red.light', pr: 0.5}} />
                            </IconButton>
                            <IconButton href="https://www.linkedin.com/in/brian-tochterman-jr-991a1189/">
                                <LinkedInIcon fontSize="large" sx={{ color: 'red.light', pr: 0.5}} />
                            </IconButton>
                        </Box>  
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Contact; 