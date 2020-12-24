import { Button, Container, FormControl, MenuItem, TextField ,Paper,Typography,ListItemText} from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,MuiPickersUtilsProvider
  } from '@material-ui/pickers';

class Review extends React.Component
{
    constructor(props)
    {
        super(props);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeReview = this.onChangeReview.bind(this);
        this.onChangeRating = this.onChangeRating.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.OnClick = this.OnClick.bind(this);

        this.state = {
            title: '',
            author: '',
            categories: ["Adventure" , "Classics" , "Comic Book" , "Detective" , "Historical" , "Literary" , "Science Fiction"],
            review: '',
            category: '',
            date: new Date(),
            rating: null,
        }
    }
    onChangeCategory(el)
    {
        this.setState({category : el.target.value})
    }
    onChangeTitle(el)
    {
        this.setState({title : el.target.value})
    }
    onChangeAuthor(el)
    {
        this.setState({author : el.target.value})
    }
    onChangeReview(el)
    {
        this.setState({review : el.target.value})
    }
    onChangeDate(el)
    {
        this.setState({date : el})
    }
    onChangeRating(el)
    {
        this.setState({rating : el.target.value})
    }
    OnClick()
    {
        const Review = {
            title : this.state.title,
            category : this.state.category,
            author : this.state.author,
            rating : this.state.rating,
            review : this.state.review,
            date : this.state.date,
        }

        axios.post('http://localhost:5000/reviews/add', Review)
            .then(res => console.log(res.data));
        this.setState({
            title: '',
            review: '',
            category: '',
            date: new Date(),
            rating: '',
            author: '',
        })

        window.location = '/';
    }
    render()
    {
        return (
            <Container
                maxWidth="md"
                style={{ padding: '0 5%' }}
            >
                {/* <Paper elevation="5" style = {{margin: '1% 0'}}>
                    <Typography>
                        <ListItemText primary="Create review" style={{color : '#3f51b5' , paddingLeft: '3%'}}/>
                    </Typography>
                </Paper> */}
                <FormControl
                    fullWidth
                    >
                    <TextField
                        label="Select"
                        select
                        variant="outlined"
                        helperText="Pleace select your category"
                        onChange={this.onChangeCategory}
                        value = {this.state.category}
                    >
                        { this.state.categories.map(el => <MenuItem key = {el} value = {el} >{el}</MenuItem>) }
                    </TextField>
                    <TextField label="Title" variant="filled" value = {this.state.title} onChange={this.onChangeTitle}/>
                    <TextField label="Author" variant="outlined" value = {this.state.author} onChange={this.onChangeAuthor} />
                    <TextField
                        id="standard-multiline-static"
                        label="Your review"
                        multiline
                        rows={4}
                        variant="outlined"
                        value = {this.state.review}
                        onChange={this.onChangeReview}
                    />
                    <TextField label="Rating" name="number" value = {this.state.rating} variant="outlined" helperText="1-5"
                        onChange={this.onChangeRating}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker
                            margin="dense"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={this.state.date}
                            onChange={this.onChangeDate}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            />
                    </MuiPickersUtilsProvider>
                        
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick = {this.OnClick}
                    >
                        create review
                    </Button>
                </FormControl>
            </Container>
        )
    }

}
export default Review;