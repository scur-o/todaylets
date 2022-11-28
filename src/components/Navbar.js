import React, { useState } from "react";
import { AppBar, Container, Toolbar, IconButton, Box, Typography, MenuIcon, ThemeProvider } from "@mui/material";
import { Menu } from '@mui/icons-material'
import Sidebar from "./sidebar";


const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <AppBar elevation={0}>
        <Toolbar 
            variant="dense" 
            sx={{
                bgcolor: '#282c34',
                color: 'lightgray'
                }}>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu" 
                sx={{ mr: 2 }} 
                onClick={() => setIsOpen(true)}>
                    <Menu />
            </IconButton>
        </Toolbar>
        <Sidebar {...{isOpen, setIsOpen}}/>
        </AppBar>
        

    )
}

export default NavBar;