import React from "react";
import {Button,CardContent, CardHeader,Typography, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
const axios = require('axios').default;
/**
 * Define UserDetail, a React componment of CS142 project #5
 */
class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    let newUser;
    this.state = {
      user: newUser
    };
    let newUserID = props.match.params.userId;
    axios.get(`/user/${newUserID}`)
      .then(response => {
        newUser = response.data;
        this.setState({ user: response.data });
        this.props.changeView(`${newUser.first_name} ${newUser.last_name}`
        );
      })
      .catch(err => console.log(err.response));
  }



  componentDidUpdate = () => {
    let newUserID = this.props.match.params.userId;
    if (this.state.user._id !== newUserID) {
      let self = this;
      axios.get(`http://localhost:3000/user/${newUserID}`)
        .then(response => {
          let newUser = response.data;
          self.setState({ user: newUser });
          self.props.changeView(
            `${newUser.first_name} ${newUser.last_name}`
          );
        }).catch(err => console.log(err.response));
    }
  };

  render() {
    return this.state.user ? (
      <Paper>
        <CardHeader
          title={`${ this.state.user.first_name } ${ this.state.user.last_name }`}
          subheader={`${ this.state.user.occupation } , ${ this.state.user.location }`}
          style = {{paddingBottom : "5px"}}
        />
        <CardContent style={{ paddingTop: "0"}}>
          <Typography>
            {this.state.user.description}
          </Typography>
            <Link to={`/photos/${this.state.user._id}`} className = "Link">
               <Button size="medium" color= "primary"> Photos</Button>
             </Link>
        </CardContent>
      </Paper>
    ):<div/>
}
}

export default UserDetail;
