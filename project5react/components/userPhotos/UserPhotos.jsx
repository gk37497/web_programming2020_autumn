import React from 'react';
import './userPhotos.css';
import fetchModel from "../../lib/fetchModelData";
import Photo from "../Photo/Photo";
import "./userPhotos.css";
class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      user : ''
    };
    fetchModel("/PhotosOfUser/" + this.props.match.params.userId).then((response) =>
    this.setState({ photos: response.data })
  );
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
