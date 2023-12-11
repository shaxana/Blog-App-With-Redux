import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { UserAuth } from "../context/UserAuth";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'white'}}>
        <Toolbar style={{display:'flex', justifyContent:'center'}}>
          <h1 style={{color:'black'}}>Blogs</h1>
         
          <Typography variant="h6" component="div" style={{marginLeft:"800px", marginRight:"30px"}}>
           <Link to="/">Blogs</Link>
          </Typography> 
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'30px'}} >
            <Link to="/postblog">Post Blog</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}