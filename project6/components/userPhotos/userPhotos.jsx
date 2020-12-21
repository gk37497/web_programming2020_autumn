import React from 'react';
import './userPhotos.css';
import Photo from "../Photo/Photo";
import "./userPhotos.css";
const axios = require('axios').default;

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      user : ''
    };
    this.userId = props.match.params.userId;
    axios.get(`/photosOfUser/${ this.userId }`)
      .then(response =>
      {
        this.setState({photos : response.data})
      })
    axios.get(`/user/${ this.userId }`)
      .then(response =>
      {
        this.user = response.data
      })
  }
  render() {
    return (
      <div className = "container">
        {
          this.state.photos.map((el)=>{
            return <Photo changeView = {this.props.changeView} key = {el._id} data = {el}/>
          })
        }
      </div>
    );
  }
}

export default UserPhotos;