import
    {
        CardActions,
        CardContent,
        CardHeader,
        Typography,
        Accordion,
        AccordionSummary,
        AccordionDetails
    } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'

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
    render()
    {
        return (
            <div>
                {this.state.reviews.map(el =>
                {
                    return (
                        <Accordion style={{marginLeft : '5%'}}>
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
                                    <Typography  style={{ fontSize: '12px', margin: '0' }} paragraph>
                                        {el.review}
                                    </Typography>
                                </CardContent>
                                <CardActions style = {{padding : '0 0 0 3%' , fontSize : '13px'}}>
                                    {el.date}
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