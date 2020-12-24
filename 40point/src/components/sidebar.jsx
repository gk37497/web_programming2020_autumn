import React from 'react';
import {
  Divider,
  List,
  Button,
  ListItemText,
  ListItem
}
  from '@material-ui/core';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AddIcon from '@material-ui/icons/Add';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Link } from "react-router-dom";
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: {
        Tasks: 'WbSunnyIcon',
        Important: 'StarBorderIcon',
        Completed:'CheckCircleOutlineIcon'
      },
    }
  }
  render() {
    return (
      <div>
        <List component="nav">
          <Link to = "/Tasks">
            <Button fullWidth color="primary">
              <ListItem>
                  <AddIcon style={{color: 'gray'}}/>
                  <p>Tasks</p>
              </ListItem>
            </Button>
              <Divider />
          </Link>
          <Link to = "/Completed">
            <Button fullWidth color="primary">
              <ListItem>
              <WbSunnyIcon style={{color: 'gray'}}/>
              <p>Completed</p>              
            </ListItem>
              </Button>
              <Divider />
          </Link>
          <Link to = "/Important">
            <Button fullWidth color="primary">
              <ListItem>
              <StarBorderIcon style={{color: 'gray'}}/>
              <p>Important</p>             
            </ListItem>
              </Button>
              <Divider />
          </Link>
        </List>
      </div>
    );
  }
}

export default SideBar;
