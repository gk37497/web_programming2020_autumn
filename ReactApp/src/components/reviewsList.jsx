import
    {
        CardActions,
        CardContent,
        CardHeader,
        Typography,
        Accordion,
        AccordionSummary,
        AccordionDetails,
        Button,
        Paper,
        ListItemText
    } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ReviewList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            btnClicked: false,
            reviews : []
        }
    };
    componentDidMount()
    {
        axios.get('http://localhost:5000/reviews')
            .then(res =>
            {
                this.setState({
                    reviews : res.data
                })
                console.log(res.data)
            })
    }
    btnHandler = () =>
    {
        this.setState({
            btnClicked: !this.state.btnClicked
        })
    };
    deleteReview = (id) =>
    {
        axios.delete('http://localhost:5000/reviews/' + id)
            .then(res => { console.log(res.data) });
        this.setState({
            reviews : this.state.reviews.filter(el => el._id !== id)
        })
    }
    render()
    {
        return (
            <div>
                <Paper elevation="5" style = {{margin: '0 0 1% 0'}}>
                    <Typography>
                        <ListItemText primary="My reviews" style={{color : '#3f51b5' , paddingLeft: '3%'}}/>
                    </Typography>
                </Paper>
                {this.state.reviews.map(el =>
                {
                    return (
                        <Accordion style={{ margin: '0 5%' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <CardHeader
                                    avatar={<Typography>Rating {el.rating}</Typography> }
                                    title={el.title}
                                    fullWidth
                                    subheader={`${el.author} , ${el.category}`}
                                    style={{ padding: '5px',color : "green"}}
                            />
                            </AccordionSummary>
                            <AccordionDetails>
                                <CardContent fullWidth style = {{padding : '0 0 0 3%' ,  fontSize : '13px'}}>
                                    <Typography  style={{ fontSize: '0.7rem', margin: '0' }} paragraph>
                                        {el.review}
                                        <br/>
                                        {el.date}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{
                                    padding: '0 0 0 3%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}>
                                    <Button
                                        color="primary"
                                        style={{ fontSize: '10px' }}
                                        size="small"
                                    >
                                        <Link to={"/edit/" + el._id}>
                                            edit
                                        </Link>
                                    </Button>
                                    <Button
                                        onClick = {()=>this.deleteReview(el._id)}
                                        color="secondary" style={{ fontSize: '10px' }} size="small">delete</Button>
                                </CardActions>
                            </AccordionDetails>
                        </Accordion>
                    )
                })}
            </div>
        )

    }
}
export default ReviewList;