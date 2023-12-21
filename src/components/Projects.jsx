import { projects } from "../data";
import { createTheme, ThemeProvider } from "@mui/material";
import { 
    Container, 
    Typography, 
    Box, 
    Card, 
    CardContent, 
    CardMedia, 
    CardActionArea
} from "@mui/material";
import TerminalIcon from '@mui/icons-material/Terminal';

const projectsArr = projects;

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

const Projects = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id='projects'>
            <Container sx={{ padding: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box>
                  <TerminalIcon sx={{ fontSize: 75, color: 'red.light', mb: 3 }} />
                  <Typography sx={{ color: 'red.main', }} variant="h2">
                    Things I&apos;ve Built
                  </Typography>
                  <Typography sx={{ color: 'white.main', mt: 2 }} variant="subtitle1">
                    A mixture of solo projects and apps that I helped developed with a team
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 4, display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 2, justifyContent: 'space-around' }}>
                  {projectsArr.map((project) => (
                        <Card key={project.id} sx={{ width: 345, minHeight: 260, backgroundColor: 'hunterGreen.light', color: 'white.main' }}>
                            <CardActionArea href={project.link}>
                                <CardMedia
                                    sx={{ height: 180 }}
                                    image={project.image}
                                    title={project.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="white.main" sx={{ opacity: '60%' }}>
                                        {project.subtitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                  ))}
                </Box>
              </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Projects;