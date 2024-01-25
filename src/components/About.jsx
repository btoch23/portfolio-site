import { Container, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../data";

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id='about'>
                <Container sx={styles.container} maxWidth='med'>
                    <Box sx={styles.textBox}>
                        <Box sx={styles.titleBox}>
                            <Typography variant="h1" sx={styles.title}>
                                Hi, I&apos;m Brian!
                            </Typography>
                            <Typography sx={styles.subtitle} variant="h3">
                                I&apos;m a web developer
                            </Typography>
                        </Box>
                        <Box sx={styles.bodyBox}>
                            <Typography sx={styles.body} variant='body1'>
                                I&apos;ve spent 15 years working in the restaurant industry and now I&apos;m transitioning into the tech world. Currently, I&apos;m located in Chicago, Illinois with my four beautiful cats. When I&apos;m not building apps and websites, I teach improv to kids, play Dungeons & Dragons, and I love to rock climb!
                            </Typography>
                        </Box>   
                    </Box>
                    <Box sx={styles.imageBox}>
                        <img src='./headshot.jpg' style={styles.image} />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
};

const styles = {
    container: {
        mt: 5, 
        pt: 10, 
        pb: {sm: 5, md: 5}, 
        display: 'flex', 
        flexDirection: {sm: 'column', md: 'row'}, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    textBox: {
        paddingX: {sm: 0, md: 5}, 
        paddingTop: {sm: 0, md: 5}, 
        paddingBottom: {sm: 5, md: 5}
    },
    titleBox: { 
        width: { 
            sm: '100%', 
            md: '120%'
        } 
    },
    title: {
        textAlign: {sm: 'center', md: 'left'}, 
        color: '#963638'
    },
    subtitle: {
        pt: 2, 
        textAlign: {sm: 'center', md: 'left'}, 
        color: '#F2E8CF'
    },
    bodyBox: { 
        display: {
            xs: 'none', 
            md: 'flex', 
            maxWidth: '700px'
        } 
    },
    body: {
        pt: 3, 
        textAlign: 'left', 
        color: '#F2E8CF'
    },
    imageBox: {
        display: {
            xs: 'none', 
            sm: 'inline'
        }
    },
    image: {
        width: '55%', 
        borderRadius: '50%'
    }
}

export default About;