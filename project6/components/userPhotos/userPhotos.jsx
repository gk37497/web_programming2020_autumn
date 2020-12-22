import React from 'react';
import Photo from "../Photo/Photo";
import { Container } from '@material-ui/core';
const axios = require('axios').default;

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
    this.userId = props.match.params.userId;
    axios.get(`/photosOfUser/${ this.userId }`)
      .then(response =>
      {
        this.setState({photos : response.data})
      })
  }
  render()
  {
    return (
      <Container>
        {
          this.state.photos.map((el)=>{
            return <Photo userName={this.props.userName} key={el._id} data={el} {...this.props}/>
          })
        }
      </Container>
    );
  }
}

export default UserPhotos;