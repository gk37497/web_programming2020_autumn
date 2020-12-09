const { Component } = require("react")

import React from 'react'
import "./Photo.css";
import { Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
const desc = "Photos of ";
class Photo extends Component{
    constructor(props){
      super(props);
      fetchModel(`http://localhost:5000/user/${this.userId}`).then(response => {
        this.user = response.data;
        this.props.changeView(
          desc,
          `${this.user.first_name} ${this.user.last_name}`
        );
      });
    }
    render(){
      return (
        <div className = "Photo">
          <img
            src={"./../../images/" + this.props.data.file_name}
            alt="Photos of user"
          />
          <div className= "comment">
            {this.props.data.comments ? 
                this.props.data.comments.map((el , index)=>{
                    console.log(el)
                    return(
                        <div key = {index} className = "comment_container">
                            <div className = "comment_user">
                            <Link to={`/users/${el.user._id}`} className = "link">
                                 {`${el.user.first_name}`}
                           </Link>
                            </div>
                            <div className = "comment_text" >
                                {`${el.comment}  ${el.date_time}`}
                            </div>
                        </div>
                    )
                }) : console.log("nocomment")
            }
          </div>
          <h5>{this.props.data.date_time}</h5>
        </div>
      )
    }
  }

  export default Photo;