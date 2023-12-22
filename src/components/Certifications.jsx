import { Container, Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../data";
import BookIcon from '@mui/icons-material/Book';
import { certificates } from "../data";

const certificatesArr = certificates;

const Certifications = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box component='section' id="certifications">
                <Container sx={{ p: 5, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <Box>
                        <BookIcon sx={{ fontSize: 75, color: 'red.light', mb: 3 }} />
                        <Typography sx={{ color: 'red.main'}} variant="h2">
                            Certifications
                        </Typography>
                        <Typography sx={{ color: 'white.main', mt: 2 }} variant="subtitle1">
                            I&apos;ll be graduating from NuCamp&apos;s Full-Stack Web and Mobile Development Bootcamp on January 22, 2024
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                        {certificatesArr.map((cert) => (
                            <Card key={cert.school} sx={{ width: 345, minHeight: 260, backgroundColor: 'hunterGreen.light', color: 'white.main' }}>
                                <CardMedia 
                                    sx={{ height: 260 }}
                                    image={cert.certificate}
                                    title={cert.school}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {cert.school}
                                    </Typography>
                                    <Typography variant="body2" color="white.main" sx={{ opacity: '60%' }}>
                                        {cert.topic}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}

export default Certifications;