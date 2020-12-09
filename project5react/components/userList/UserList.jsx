import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  // Typography,
}
from '@material-ui/core';
import { Link } from "react-router-dom";
import './userList.css';
/**
 * Define UserList, a React componment of CS142 project #5
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      users:window.cs142models.userListModel(),
    }
  }
  render() {
    console.log(this.state.users);
    return (
      <div>
        {/* <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window.
          You might choose to use <a href="https://material-ui.com/demos/lists/">Lists</a> and <a href="https://material-ui.com/demos/dividers">Dividers</a> to
          display your users like so:
        </Typography> */}
        <List component="nav">
          {
            this.state.users.map(el =>{
              return(
                <Link className = "user" to = {`/users/${el._id}`} key = {el._id}>
                <ListItem >
                  <ListItemText primary ={`${el.first_name} ${el.last_name}`}/>
                </ListItem>
                <Divider />
                </Link>
              )
            })
          }
        </List>
      </div>
    );
  }
}

export default UserList;
