import React from 'react';
import fetchModel from "../../lib/fetchModelData";
import Photo from "../Photo/Photo";
import { Container } from '@material-ui/core';
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
      <Container>
        {
          this.state.photos.map((el)=>{
            return <Photo userName = {this.props.userName} key = {el._id} data = {el} />
          })
        }
      </Container>
    );
  }
}

export default UserPhotos;
