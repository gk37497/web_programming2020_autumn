import { Button, Container, FormControl, MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
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
        this.setState({date : el.target.value})
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
        
    }
    render()
    {
        return (
            <Container
                maxWidth="md"
                style={{ padding: '0 0 0 5%' }}
            >
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
                    <TextField label="Date" value = {this.state.date} variant="filled" onChange={this.onChangeDate}/>
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