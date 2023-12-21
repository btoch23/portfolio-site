import { Container, Typography, Box, Chip } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { skills } from '../data';
import MemoryIcon from '@mui/icons-material/Memory';
import CodeIcon from '@mui/icons-material/Code';

const skillsArr = skills;

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

const Skills = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section'id="skills">
              <Container sx={{ padding: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Box>
                  <MemoryIcon sx={{ fontSize: 75, color: 'red.light', mb: 3 }} />
                  <Typography sx={{ color: 'red.main'}} variant="h2">
                    Skills and Technologies
                  </Typography>
                  <Typography sx={{ color: 'white.main', mt: 2 }} variant="subtitle1">
                    I&apos;ll be graduating from NuCamp&apos;s Full-Stack Web and Mobile Development Bootcamp on January 22, 2024
                  </Typography>
                </Box>
                <Box sx={{ marginTop: 3 }}>
                  {skillsArr.map((skill) => (
                    <Chip 
                      sx={{
                        paddingY: 3.5,
                        width: {xs: '100%', sm: '40%'},
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