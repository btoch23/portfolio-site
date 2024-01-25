import { ThemeProvider } from "@mui/material/styles";
import { Container, Box, Typography, IconButton } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { theme } from "../data";

const mapsUrl = "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3024%20W%20Addison%20St+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
const gitUrl = "https://github.com/btoch23";
const linkedinUrl = "https://www.linkedin.com/in/brian-tochterman-jr-991a1189/";

const Contact = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id="contact" sx={{ mt: 10 }}>
                <Container sx={styles.container}>
                    <Box sx={styles.mapBox}>
                        <iframe 
                            width="100%" 
                            height='300'
                            src={mapsUrl}
                        />
                    </Box>
                    <Box component='form' sx={styles.textBox}>
                        <Typography variant="h3" color='red.main' sx={{ mb: 1 }}>
                            Hire Me
                        </Typography>
                        <Typography variant='subtitle1' color="white.main" sx={{ textAlign: 'left' }}>
                            I&apos;m excited to join your team and to help you build the app or website of your dreams! Reach out and let me know what I can do for you!
                        </Typography>
                        <Box sx={styles.contactInfoBox}>
                            <EmailIcon sx={styles.icon} />
                            <Typography color='white.main'>
                                : brian.toch23@gmail.com
                            </Typography>
                        </Box>  
                        <Box sx={styles.contactInfoBox}>
                            <PhoneIcon sx={styles.icon} />
                            <Typography color='white.main'>
                                : (215) 910-1467
                            </Typography>
                        </Box>
                        <Box sx={styles.socialsBox}>
                            <IconButton href={gitUrl} target="_blank">
                                <GitHubIcon fontSize="large" sx={styles.icon} />
                            </IconButton>
                            <IconButton href={linkedinUrl} target="_blank">
                                <LinkedInIcon fontSize="large" sx={styles.icon} />
                            </IconButton>
                        </Box>  
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

const styles = {
    container: { 
        display: 'flex', 
        flexDirection: {xs: 'column-reverse', md: 'row'}, 
        gap: 5
    },
    mapBox: {
        display: 'flex', 
        flex: 1 
    },
    textBox: { 
        display: 'flex', 
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'start', 
    },
    contactInfoBox: { 
        display: 'flex', 
        flexDirection: 'row', 
        mt: 2 
    },
    socialsBox: { 
        display: 'flex', 
        mt: 2 
    },
    icon: { 
        color: 'red.light', 
        pr: 0.5
    }
}

export default Contact; 