import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import brandImage from "../../Assets/logo-sm.png";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Avatar, Link } from "@mui/material";
import { useTheme } from "@emotion/react";
import {
  Brightness4,
  Brightness7,
  SmartToy,
  SportsEsportsSharp,
} from "@mui/icons-material";

function ResponsiveDrawer(props) {
  const { window, drawerWidth, setMyMode } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  let theme = useTheme();

  let currentLocation = useLocation();
  let location = currentLocation.pathname;

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <ListItem sx={{ display: "flex", justifyContent: "center", mb: "8px" }}>
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "light" ? "dark" : "light"
            );
            setMyMode(theme.palette.mode === "dark" ? "light" : "dark");
          }}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? (
            <Brightness7 sx={{ color: "orange" }} />
          ) : (
            <Brightness4 />
          )}
        </IconButton>
      </ListItem>
      <Divider />
      <List>
        {[
          { text: "MMORPG", link: "/mmorpg" },
          { text: "SHOOTER", link: "/shooter" },
          { text: "SAILING", link: "/sailing" },
          { text: "PERMADEATH", link: "/permadeath" },
          { text: "SUPERHERO", link: "/superhero" },
        ].map((item, index) => (
          <ListItem
          className="ListItem"
            sx={{
              bgcolor:
                location === item.link ? theme.palette.mainNavHover : null,
              color: location === item.link ? "white" : null,
            }}
            key={item.text}
            disablePadding
          >
            <ListItemButton component={RouterLink} to={item.link}>
              <ListItemIcon>
                {index % 2 === 0 ? <SmartToy /> : <SportsEsportsSharp />}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
      className="AppBar"
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: theme.palette.mainNav,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", ml: { sm: "0" } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                flexGrow: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src={brandImage}
                  style={{ width: "50px", marginRight: "8px" }}
                  alt=""
                />
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    "&:hover": { fontSize: "16.5px" },
                  }}
                >
                  GAMEOVER
                </Link>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }} component="div">
            <Typography
              sx={{ display: { xs: "none", md: "block" } }}
              mr={2}
              variant="body1"
              color="white"
              fontWeight={"bolder"}
            >
              mohamed fadel
            </Typography>

            <Avatar
              alt="mohamed fadel"
              src="https:/mui.com/static/images/avatar/2.jpg"
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
