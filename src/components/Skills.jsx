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
              <Container sx={{ p: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box>
                  <MemoryIcon sx={{ fontSize: 75, color: 'red.light', mb: 3 }} />
                  <Typography sx={{ color: 'red.main'}} variant="h2">
                    Skills and Technologies
                  </Typography>
                  <Typography sx={{ color: 'white.main', mt: 2 }} variant="subtitle1">
                    I&apos;m proficient in a number of front-end technologies and frameworks and I have excellent interpersonal and customer service skills
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 3 }}>
                  {skillsArr.map((skill) => (
                    <Chip 
                      sx={{
                        paddingY: 3.5,
                        width: {xs: '100%', sm: '30%'},
                        margin: 1, 
                        fontSize: 20, 
                        borderColor: 'hunterGreen.light',
                        color: 'hunterGreen.light',
                      }} 
                      label={skill} 
                      key={skill.indexOf()} 
                      variant="outlined"
                      icon={<CodeIcon color="hunterGreen.light" />}
                    />
                  ))}
                </Box>
              </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Skills;