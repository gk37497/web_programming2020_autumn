import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
}));

const Header = ()=> {
    const classes=useStyles();
    
  return (
    <Container className={classes.root} style = {{ padding : '0'}}>
      <AppBar position="static" style = {{backgroundColor:'#333333', padding : '0'}}>
        <Toolbar variant="dense">
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit">
            To do
          </Typography>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Header;
