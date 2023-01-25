import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import {
  PersonOutlineOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Badge, Menu, MenuItem } from "@mui/material";
import { toast } from "react-hot-toast";
import { AuthContext } from "./context/AuthProvider/AuthProvider";
import { theme } from "../theme";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, usersignOut } = React.useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        Tspring
      </Typography>
      <Divider />
      <List>
        <Stack gap={4}>
          <Link to='/'>Home</Link>
          {/* <Link to='/blog'>Blogs</Link> */}
          <Link to='/products'>Products</Link>
          <Link to='/order'>Orders</Link>
          {user ? "" : <Link to='/login'>Login</Link>}
        </Stack>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

const [open, setopen] = React.useState(false);


let handleSignOut = () => {
  usersignOut()
    .then(() => {
      //signout
      toast.success("Logout successfull!");
    })
    .catch((error) => {
      console.error(error);
    });
};
  return (
    <Box sx={{ display: "flex"}}>
      <CssBaseline />
      <AppBar component='nav' position='sticky' sx={{backgroundColor:"white", color:"black"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <div className='flex items-center'>
            <img
              src='../mobile.svg'
              alt='nav'
              className='w-10 sm:block hidden mr-2'></img>
            <Typography variant='h6' component='div' fontWeight={700}>
              <Link to='/'>PhoneFlip</Link>
            </Typography>
          </div>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <Stack direction='row' gap={4}>
              <Link to='/'>Home</Link>
              {/* <Link to='/blog'>Blogs</Link> */}
              <Link to='/products'>Products</Link>
              <Link to='/order'>Orders</Link>
              {user ? "" : <Link to='/login'>Login</Link>}
            </Stack>
          </Box>
          <div className='flex gap-1'>
            <PersonOutlineOutlined
              onClick={(e) => setopen(true)}></PersonOutlineOutlined>{" "}
            <Badge badgeContent={2} color='error'>
              <ShoppingCartOutlined />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setopen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <MenuItem>
          <Link to='/desboard'>Desboard</Link>
        </MenuItem>
        {user && <MenuItem onClick={handleSignOut}>Logout</MenuItem>}
      </Menu>
    </Box>
  );
}


export default DrawerAppBar;
