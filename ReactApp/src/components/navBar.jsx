import { ListItemText, List, ListItem, Paper, Collapse, ListItemIcon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
// import Category from './category';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ListIcon from '@material-ui/icons/List';

class NavBar extends React.Component
{
    state = {
        categories: ["Adventure", "Classics", "Detective", "Historical", "Literary"],
        open: false,
    }
    handleClick = () =>
    {
        this.setState({
            open : !this.state.open,
        })
    }
    render()
    {
        return (
            <Paper elevation="3" variant="elevation" style = {{height : '80vh'}}>
                <List>
                    
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button divider>
                            <ListItemIcon >
                                <HomeIcon color = "primary"/>
                            </ListItemIcon>
                            <ListItemText primary="My Reviews" />  
                        </ListItem>
                    </Link>
                    <Link to="/create" style={{ textDecoration: 'none', color: 'black' }}>
                        <ListItem button divider>
                            <ListItemIcon>
                                <MenuBookIcon color = "primary"/>
                            </ListItemIcon>
                            <ListItemText primary = "New Review"/>
                        </ListItem>
                    </Link>
                    {/* <Link to="/categories" style={{ textDecoration: 'none', color: 'black' }}> */}
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <ListIcon color = "primary"/>
                        </ListItemIcon>
                            <ListItemText primary = "Category"/>
                             {this.state.open ? <ExpandLessIcon/> : <ExpandMoreIcon />}
                        </ListItem>
                            <Collapse in={this.state.open}>
                                    {this.state.categories.map(el =>
                                    {
                                        return (
                                            <Link to = {"/categories/" + el} style={{ textDecoration: 'none', color: 'black' }}>
                                                <ListItem style = {{paddingLeft : '30%' , fontSize : '0.8rem'}} button key = {el}> 
                                                    {el}
                                                </ListItem>
                                            </Link>
                                            )
                                    })}
                            </Collapse> 
                    {/* </Link> */}
                </List>
            </Paper>
        )
    }
}
export default NavBar;
