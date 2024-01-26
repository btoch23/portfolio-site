import { Container, Typography, Box, Chip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { skills, theme } from '../data';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';

const skillsArr = skills;

const Skills = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section'id="skills">
              <Container sx={styles.container}>
                <Box>
                  <MemoryIcon sx={styles.icon} />
                  <Typography sx={{ color: 'red.main'}} variant="h3">
                    Skills and Technologies
                  </Typography>
                  <Typography sx={styles.subtitle} variant="subtitle1">
                    I&apos;m proficient in a number of technologies, libraries, and frameworks and I have excellent interpersonal and customer service skills
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 3 }}>
                  {skillsArr[0].map((skill) => (
                    <Chip 
                      sx={styles.frontendChip} 
                      label={skill} 
                      key={skill} 
                      variant="outlined"
                      icon={<CodeIcon color="hunterGreen.light" />}
                    />
                  ))}
                  {skillsArr[1].map((skill) => (
                    <Chip 
                      sx={styles.backendChip} 
                      label={skill} 
                      key={skill} 
                      variant="outlined"
                      icon={<CodeIcon color="red.light" />}
                    />
                  ))}
                  {skillsArr[2].map((skill) => (
                    <Chip 
                      sx={styles.generalChip} 
                      label={skill} 
                      key={skill} 
                      variant="outlined"
                      icon={<CodeIcon color="white.main" />}
                    />
                  ))}
                </Box>
              </Container>
            </Box>
        </ThemeProvider>
    )
}

const styles = {
  container: {
    p: 5, 
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
  frontendChip: {
    paddingY: 3.5,
    width: {xs: '100%', sm: '30%'},
    margin: 1, 
    fontSize: 20, 
    borderColor: 'hunterGreen.light',
    color: 'hunterGreen.light',
  },
  backendChip: {
    paddingY: 3.5,
    width: {xs: '100%', sm: '30%'},
    margin: 1, 
    fontSize: 20, 
    borderColor: 'red.main',
    color: 'red.main',
  },
  generalChip: {
    paddingY: 3.5,
    width: {xs: '100%', sm: '30%'},
    margin: 1, 
    fontSize: 20, 
    borderColor: 'white.main',
    color: 'white.main',
  },
}

export default Skills;