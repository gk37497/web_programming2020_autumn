import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
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
      <Grid container
      justify="space-evenly"
      alignItems="center"
      >
        <Grid xs={6} item>
          <Typography variant="h3">
          {`${this.state.user.first_name} ${this.state.user.last_name}`}
        </Typography>
        <Typography variant="h5">
        Occupation:
          {this.state.user.occupation}
        </Typography>
        <Typography variant="h6">
        Location:
          {this.state.user.location}
        </Typography>
        <Typography variant="body1">
        Description:
          {this.state.user.description}
        </Typography>
        </Grid>
        <Grid xs={6} item>
          <Button variant="outlined" size="medium" color= "primary">
              <Link to={`/photos/${this.state.user._id}`}>Photos</Link>
          </Button>
        </Grid>
      </Grid>
    ) : (
      <div />
    );
  }
}

export default UserDetail;
