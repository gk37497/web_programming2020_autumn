import { Button, List, ListItem, Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>
{
    return (
        <Paper elevation = "3" variant = "elevation">
            <List>
                <ListItem divider>
                    <Button>
                        <Link to="/">
                            My Reviews                            
                        </Link>
                    </Button>
                </ListItem>
                <ListItem divider>
                    <Button>
                        Category
                    </Button>
                </ListItem>
                <ListItem divider>
                    <Button>
                        <Link to= "/create">
                            New reviews
                        </Link>
                    </Button>
                </ListItem>
            </List>
        </Paper>
    )
}
export default NavBar;