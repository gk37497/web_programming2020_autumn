import React from "react";
import {Button,CardContent, CardHeader,Typography, Paper } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
    fetchModel(`http://localhost:5000/user/${this.props.match.params.userId}`).then(response=>{
      this.setState({user : response.data});
      this.props.changeView(`${this.state.user.first_name} ${this.state.user.last_name}`);
    })
  }
  componentDidUpdate = () => {
    let newUserID = this.props.match.params.userId;
    if (this.state.user._id !== newUserID) {
      let self = this;
      fetchModel(`http://localhost:5000/user/${newUserID}`).then(response => {
        let newUser = response.data;
        self.setState({ user: newUser });
        self.props.changeView(
          `${newUser.first_name} ${newUser.last_name}`
        );
      });
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