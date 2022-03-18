import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import MenuIcon  from '@mui/icons-material/Menu';


const pages = ['Home', 'Blog', 'Qui Somme-Nous ?'];
const settings = ['Profil', 'Information Cookie', 'Déconnexion'];

class Navb extends React.Component {

    constructor(props) {
        super(props);
        this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this)
        this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this)
        this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this)
        this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this)
        this.state = {
            anchorElNav: null,
            anchorElUser: null,
        }
    }

    //const [anchorElNav, setAnchorElNav] = React.useState(null);
    //const [anchorElUser, setAnchorElUser] = React.useState(null);
  
    handleOpenNavMenu(event) {
        this.setState({ anchorElNav: event.currentTarget })
      //setAnchorElNav(event.currentTarget);
    };
    handleOpenUserMenu(event) {
        this.setState({ anchorElUser: event.currentTarget })
      //setAnchorElUser(event.currentTarget);
    };
  
    handleCloseNavMenu() {
        this.setState({ anchorElNav: null })
      //setAnchorElNav(null);
    };
  
    handleCloseUserMenu() {
        this.setState({ anchorElUser: null })
      //setAnchorElUser(null);
    };


    render() {
        return (
            <AppBar position="static" sx={{ backgroundColor: '#212121e6'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            LOGO
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleOpenNavMenu}
                            color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(this.state.anchorElNav)}
                            onClose={this.handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={this.handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={this.handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Mon compte">
                                <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={this.state.anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(this.state.anchorElUser)}
                            onClose={this.handleCloseUserMenu}
                            >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default Navb;