import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {Button, Grid, TextField,FormControl} from '@material-ui/core';
import axios from 'axios';

class TaskCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            title: '',
            description: '',
            selectedDate: new Date(),
            clicked : null
        }
        this.OnClick = this.OnClick.bind(this)
    }
    Titlehandler=(e) =>
    {
        this.setState({title : e.target.value})
    }
    DescriptionHandler=(e) =>
    {
        this.setState({description : e.target.value})
    }
    handleDateChange = (date) => {
        this.setState({selectedDate : date});
    };
    OnClick()
    {
        // const Task={
        //     title: this.state.title,
        //     description: this.state.description,
        //     date : this.state.selectedDate
        // }
        // console.log(Task)
        // axios.post('http://localhost:8000/tasks/add',Task)
        //     .then(response => console.log(response.data));
        this.setState({
            clicked : true
        })
        this.props.titleHandler(this.state.title);
        this.setState({
            title: '',
            description: '',
            date: new Date(),
            clicked : null
        })
    }
    render()
    {
        return (
            <div>
                <FormControl fullWidth margin = "dense">
                    <TextField 
                            label="Task title"
                            placeholder="Hiking"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            value = {this.state.title}
                            className="title"
                            onChange = {this.Titlehandler}
                        />
                    <TextField
                        label="Description"
                        placeholder="Description"
                        multiline
                        margin = "normal"
                        variant="outlined"
                        fullWidth
                        value = {this.state.description}
                        onChange = {this.DescriptionHandler}
                        rows={5}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        fullWidth
                        label="Date"
                        value={this.state.selectedDate}
                        onChange={this.handleDateChange}

                        />
                    </MuiPickersUtilsProvider>
                    <Grid container>
                        <Button
                            onClick={this.OnClick}
                            variant="contained"
                            color = "primary"
                        >
                            Confirm
                        </Button>
                    </Grid>
                </FormControl>
            </div>
        )
    }
}
export default TaskCard;
