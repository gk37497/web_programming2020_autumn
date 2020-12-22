const { Component } = require("react")
import React from 'react'
import "./Photo.css";
import { Card, CardContent, CardHeader, CardMedia, Grid , Link } from '@material-ui/core';
class Photo extends Component{
    constructor(props){
      super(props);
    }
  render()
  {
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