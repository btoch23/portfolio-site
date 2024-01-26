import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../data';
import './Header.css'

const pages = ['skills', 'projects', 'certifications', 'contact'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed" sx={styles.navbar}>
        <Container>
          <Toolbar disableGutters sx={{ height: '90px' }}>
            <CodeIcon sx={styles.icon} color='white' />
            <Typography
              className='title'
              variant="h5"
              noWrap
              component="a"
              href="#about"
              sx={styles.expandedTitle}
            >
              BRIAN TOCHTERMAN 
            </Typography>
            <Box sx={styles.menuBox}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="white"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem component='a' key={page} onClick={handleCloseNavMenu} href={`#${page}`}>
                    <Typography>{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <CodeIcon sx={styles.icon} color='white' />
            <Typography
              className='title'
              variant="h5"
              noWrap
              component="a"
              href="#about"
              sx={styles.minimizedTitle}
            >
              BRIAN TOCHTERMAN
            </Typography>     
            <Box sx={styles.pagesBox}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  color='white'
                  sx={styles.pageButton}
                  href={`#${page}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

const styles = {
  navbar: { 
    height: '90px', 
    alignItems: 'center', 
    backgroundColor: 'hunterGreen.main' 
  },
  icon: { 
    display: { 
      xs: 'none', 
      md: 'flex' 
    }, 
    mr: 1 
  },
  expandedTitle: {
    mr: 1,
    display: { 
      xs: 'none', 
      md: 'flex' 
    },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: '#F2E8CF',
    textDecoration: 'none',
  },
  menuBox: { 
    flexGrow: 1, 
    display: { 
      xs: 'flex', 
      md: 'none' 
    } 
  },
  minimizedTitle: {
    mr: 2,
    display: { 
      xs: 'flex', 
      md: 'none' 
    },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.1rem',
    color: '#F2E8CF',
    textDecoration: 'none',
  },
  pagesBox: { 
    flexGrow: 1, 
    display: { 
      xs: 'none', 
      md: 'flex' 
    } 
  },
  pageButton: {
    my: 2, 
    display: 'block', 
    fontSize: '16px' 
  }
}

export default Header;
