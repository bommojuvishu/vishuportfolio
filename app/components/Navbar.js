"use client";

import { AppBar, Toolbar, Typography, Button, Avatar } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <div style={{ flexGrow: 1 }} />
        <Avatar alt="Vishwanath" src="/static/images/avatar/1.jpg" />
        <Typography variant="h6">Vishwanath&#39;s Portfolio</Typography>

        <Button color="inherit" href="#home">
          Home
        </Button>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#projects">
          Projects
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
