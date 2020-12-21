import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
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
