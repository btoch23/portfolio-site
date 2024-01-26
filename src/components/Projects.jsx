import { projects, theme } from "../data";
import { ThemeProvider } from "@mui/material";
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

const Projects = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id='projects'>
            <Container sx={styles.container}>
                <Box>
                  <TerminalIcon sx={styles.icon} />
                  <Typography sx={{ color: 'red.main', }} variant="h3">
                    Things I&apos;ve Built
                  </Typography>
                  <Typography sx={styles.subtitle} variant="subtitle1">
                    A mixture of solo projects and apps that I helped developed with a team
                  </Typography>
                </Box>
                <Box sx={styles.projectBox}>
                  {projectsArr.map((project) => (
                        <Card key={project.id} sx={styles.projectCard}>
                            <CardActionArea href={project.link} target='_blank'>
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

const styles = {
    container: {
        padding: 5, 
        display: 'flex', 
        justifyContent: 'center', 
        flexDirection: 'column'
    },
    icon: { 
        fontSize: 75, 
        color: 'red.light', 
        mb: 3 
    },
    subtitle: { 
        color: 'white.main', 
        mt: 2 
    },
    projectBox: {
        mt: 4, 
        display: 'grid',
        gridTemplateColumns: {
            sm: 'repeat(2, 1fr)',
            lg: 'repeat(4, 1fr)'
        }, 
        gap: 2, 
        justifyContent: 'center' 
    },
    projectCard: { 
        width: 'auto',
        minHeight: 260, 
        backgroundColor: 'hunterGreen.light', 
        color: 'white.main' 
    },
}

export default Projects;