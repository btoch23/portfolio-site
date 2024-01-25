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
                <Container sx={styles.container}>
                    <Box>
                        <BookIcon sx={styles.icon} />
                        <Typography sx={{ color: 'red.main'}} variant="h2">
                            Certifications
                        </Typography>
                        <Typography sx={styles.subtitle} variant="subtitle1">
                            I&apos;ll be graduating from NuCamp&apos;s Full-Stack Web and Mobile Development Bootcamp on January 22, 2024
                        </Typography>
                    </Box>
                    <Box sx={styles.certificateBox}>
                        {certificatesArr.map((cert) => (
                            <Card key={cert.school} sx={styles.certificateCard}>
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
    certificateBox: { 
        mt: 3, 
        display: 'flex', 
        justifyContent: 'center' 
    },
    certificateCard: { 
        width: 345, 
        minHeight: 260, 
        backgroundColor: 'hunterGreen.light', 
        color: 'white.main' 
    }
}

export default Certifications;