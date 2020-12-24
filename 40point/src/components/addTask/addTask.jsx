import { Button, Grid,TextField} from '@material-ui/core';
import React from 'react';
import axios from 'axios';

class AddTask extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            title: '',
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        

    }
    onChangeTitle(e)
    {
        this.setState({title : e.target.value})
    }
    onSubmit(e)
    {
        // e.preventDefault();

        // const title={
        //     title : this.state.title 
        // }
        // console.log(title);
        // axios.post('http://localhost:8000/titles/add',title)
        //     .then(res => console.log(res.data));
        this.props.titleHandler(this.state.title);
        this.setState({title: ''})

    }
    render()
    {
        return (
            <Grid container spacing={2} >
                <form
                    style={{
                        display: 'flex',
                        width: '100%',
                        paddingLeft: '15px'
                    }}>
                    <Grid item sm = {10} >
                        <TextField 
                            label="Task title"
                            placeholder="Hiking"
                            margin="none"
                            fullWidth
                            className="title"
                            onChange={this.onChangeTitle}
                            value = {this.state.title}
                        />
                    </Grid>
                    <Grid item sm= {2}>
                        <Button
                            onClick={this.onSubmit}
                            type="submit"
                            fullWidth
                            style={{paddingTop: '20px'}}
                        >
                            add
                        </Button>
                    </Grid>
                </form>
            </Grid>
        )
    }
}
export default AddTask;
  