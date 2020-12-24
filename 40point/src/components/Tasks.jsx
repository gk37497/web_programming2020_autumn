import
    {
        Button,
        ListItem,
        ListItemText,
        FormControlLabel,
        Checkbox,
        Grid,
        Typography,
        TextField
    } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import AddTask from './addTask/addTask';
import { Link } from "react-router-dom";


class Task extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            tasks: [],
            clicked: false,
            taskTitle: '',
            clicked : null
        }
        // this.titleHandler=this.titleHandler.bind(this);
        this.handler=this.handler.bind(this);
        console.log(this.state.tasks)
    }

    // componentDidMount()
    // {
    //     axios.get('http://localhost:8000/tasks')
    //         .then(response =>
    //         {
    //             if(response.data.length>0)
    //             {
    //                 this.setState({
    //                   tasks : response.data.map(task =>task.title)  
    //                 })
    //                 console.log(response.data.map(el=>el.title));
    //             }
    //         })
    //         .catch((error) =>
    //         {
    //             console.log(error);
    //         })
    // }
    componentWillUpdate()
    {
        this.setState({
                    tasks : this.props.mytasks
                })
        
    }
    handler(){
        this.setState({clicked: this.state.clicked? false:true})
        this.props.handleClick(!this.state.clicked,this.state.taskTitle)
    }
    // titleHandler(el)
    // {
    //     this.state.tasks.push(el);
    //     this.setState({taskTitle : el})
    //     console.log(this.state.tasks);
    // }
    // ashdadhask()
    // {
    //     // if(this.props.taskTitle !== ''){
    //     //     this.state.tasks.push(this.props.taskTitle);
    //     //     console.log(this.props.taskTitle);  
    //     //     console.log(this.state.tasks)
    //     // }
    //     this.setState({
    //         tasks : this.props.mytasks
    //     })

    // }
    checkButton=(el) =>
    {
        this.props.completedTasks(el);
        console.log(el)
    }
    
    render()
    {
        // this.ashdadhask()
        return (
            <div>
                {/* <Grid container>
                    <Typography>
                        My day
                    </Typography>
                    <Typography>
                        2020:12:13
                    </Typography>
                </Grid> */}
                {/* <AddTask titleHandler={this.titleHandler}/> */}
                {
                    this.state.tasks.map(el =>
                    {
                        return (
                            <Grid container fullWidth>
                                <ListItem
                                    key={el}
                                    color="primary"
                                    divider
                                >
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="primary"
                                            icon={<RadioButtonUncheckedIcon/>}
                                            checkedIcon={<RadioButtonCheckedIcon />}
                                            onClick = {()=>this.checkButton(el)}
                                        />
                                    }
                                />
                                    <ListItem  fullWidth color = "primary">
                                        <ListItemText primary={el}/>
                                    </ListItem>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                icon={<StarBorderIcon/>}
                                                checkedIcon={<StarIcon />}
                                            />
                                        }
                                    />
                                </ListItem>
                            </Grid>
                        )
                    })
                }
            </div>
     )
    }
}
export default Task;