const { Component } = require("react")

import React from 'react'
import "./Photo.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import { Card, CardContent, CardHeader, CardMedia, Grid } from '@material-ui/core';
class Photo extends Component{
    constructor(props){
      super(props);
      fetchModel(`http://localhost:5000/user/${this.userId}`).then(response => {
        this.user = response.data;
        this.props.changeView(
          `${this.user.first_name} ${this.user.last_name}`
        );
      });
    }
  render()
  {
      console.log(this.props.userName)
      return (
        <Card className = "Card">
          <CardHeader
            title={this.props.userName}
            subheader = {this.props.data.date_time}
          />
          <CardMedia>
            <img src={"./../../images/" + this.props.data.file_name} alt=""/>
          </CardMedia>
          <CardContent>
              {this.props.data.comments ? 
                    this.props.data.comments.map((el , index)=>{
                        console.log(el)
                        return(
                            <Grid container key = {index} >
                                <Grid xs = {1} className = "comment_user">
                                <Link className = "link" to={`/users/${el.user._id}`}>
                                    {`${el.user.first_name}`}
                                </Link>
                                </Grid>
                                <Grid xs = {11} className = "comment_text">
                                    {`${el.comment}  ${el.date_time}`}
                                </Grid>
                            </Grid>
                        )
                    }) : console.log("nocomment")
                }
          </CardContent>

        </Card>
      )
    }
  }

  export default Photo;