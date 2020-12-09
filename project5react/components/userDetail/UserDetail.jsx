import React from "react";
import {Button } from "@material-ui/core";
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
      <div className = "detail">
        <div className="name">
        <h1>
          {`${this.state.user.first_name} ${this.state.user.last_name}`}
        </h1>
          <Button variant="contained" size="large" color= "primary">
             <Link to={`/photos/${this.state.user._id}`} className = "Link">Photos</Link>
          </Button>
        </div>
        <div className = "desc">
          <ul>
            <li>
              <h4>Location    :</h4>
               {this.state.user.location}
            </li>
            <li>
              <h4>Occupation    :</h4>
              {this.state.user.occupation}
            </li>
            <li>
              <h4>Description   :</h4>
              {this.state.user.description}
            </li>
          </ul>
        </div>
      </div>
    ):<div/>
  }
}
export default UserDetail;