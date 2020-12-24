import { Accordion, AccordionSummary,AccordionDetails,CardContent,Paper, CardHeader,ListItemText, Typography} from '@material-ui/core';
import React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios';

class Category extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            categories: [ "Classics","Detective", "Historical", "Literary"],
            open: false,
            reviews: [],

        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/reviews')
            .then(res =>
            { 
                this.setState({
                    reviews: res.data
                })
            })
    }
    render()
    {   
        let title = this.props.match.params.id;
        return (
            <div style={{ display: 'flex', flexDirection: 'column',padding: '0 5%' }}>
                <Paper elevation="5" style = {{margin: '2% 0'}}>
                    <Typography>
                        <ListItemText primary={title} style={{color : '#3f51b5' , paddingLeft: '3%'}}/>
                    </Typography>
                </Paper>
                {
                    this.state.reviews.map(el =>
                    {
                        if (el.category === title)
                            return (
                                <Accordion>
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
                                </AccordionDetails>
                            </Accordion>
                            )
                    })
                }
            </div>
        )
    }
}
export default Category;

               {/* <TextField
                        label="Select Category"
                        select
                        fullWidth
                        variant="outlined"
                        helperText="Pleace select your category"
                        onChange={this.onChangeCategory}
                        // value = {this.state.category}
                    >
                        { this.state.categories.map(el => <MenuItem key = {el} value = {el} >{el}</MenuItem>) }
                </TextField>
                <List>
                </List>
                {/* <ListItem button onClick={this.handleClick} style={{width : '100%'}}>
                    <ListItemText primary="Category" />
                    {this.state.open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={this.state.open} timeout="1s" unmountOnExit>
                        {this.state.categories.map(el =>
                        {
                            return (
                                <ListItem style={{ padding: '0 20%', fontSize: '10px', color: 'black' }}
                                    divider
                                    key={el}
                                    button
                                    onClick = {()=>this.listClickHandler(el)}
                                >
                                    <Typography > {el}</Typography>
                                </ListItem>     
                            )
                        })}
                </Collapse> */}