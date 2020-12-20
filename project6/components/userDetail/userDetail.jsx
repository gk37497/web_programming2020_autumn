import React from "react";
import { Button } from "@material-ui/core";
import "./userDetail.css";
import { Link } from "react-router-dom";
const axios = require('axios').default;

const DETAILS = "Info about ";

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
        this.props.changeView(
          DETAILS, `${newUser.first_name} ${newUser.last_name}`
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
            DETAILS,
            `${newUser.first_name} ${newUser.last_name}`
          );
        }).catch(err => console.log(err.response));
    }
  };

  render() {
      return this.state.user ? (
        <div className = "detail">
          <div className="name">
          <h1>
            {`${this.state.user.first_name} ${this.state.user.last_name}`}
          </h1>
              <Link to={`/photos/${this.state.user._id}`} className = "Link">
            <Button variant="contained" size="large" color= "primary"> Photos</Button>
              </Link>
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
