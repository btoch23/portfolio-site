import { Container, Typography, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id='about'>
                <Container sx={{ mt: 5, pt: 10, pb: {sm: 5, md: 5}, display: 'flex', flexDirection: {sm: 'column', md: 'row'}, alignItems: 'center', justifyContent: 'center' }} maxWidth='med'>
                    <Box sx={{ paddingX: {sm: 0, md: 5}, paddingTop: {sm: 0, md: 5}, paddingBottom: {sm: 5, md: 5} }}>
                        <Box sx={{ width: { sm: '100%', md: '120%'} }}>
                            <Typography variant="h1" sx={{ textAlign: {sm: 'center', md: 'left'}, color: '#963638' }}>
                                Hi, I&apos;m Brian!
                            </Typography>
                            <Typography sx={{ pt: 2, textAlign: {sm: 'center', md: 'left'}, color: '#F2E8CF' }} variant="h3">
                                I&apos;m a web developer
                            </Typography>
                        </Box>
                        <Box sx={{ display: {sm: 'none', md: 'flex', maxWidth: '700px'}}}>
                            <Typography sx={{ pt: 3, textAlign: 'left', color: '#F2E8CF'}} variant='body1'>
                                I&apos;ve spent 15 years working in the restaurant industry and now I&apos;m transitioning into the tech world. Currently, I&apos;m located in Chicago, Illinois with my four beautiful cats. When I&apos;m not building apps and websites, I teach improv to kids, play Dungeons & Dragons, and I love to rock climb!
                            </Typography>
                        </Box>   
                    </Box>
                    <Box sx={{display: {xs: 'none', sm: 'inline'}}}>
                        <img src='./headshot.jpg' style={{ width: '55%', borderRadius: '50%' }} />
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
};

export default About;