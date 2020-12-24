import {Button, ListItem, ListItemText} from '@material-ui/core';
import React from 'react';

class Completed extends React.Component
{
    state={
        tasks : this.props.completedTasks
    }
    render=() =>
    {
        return (
            <div>
                {
                    this.state.tasks.map(el =>
                    {
                        return (
                            <ListItem
                                key={el}
                                fullWidth
                                color="secondary"
                                divider
                                dense
                            >
                                    <ListItemText primary = {el}/>
                                <Button
                                    color="secondary"
                                    variant = "contained"
                                    // style = {{backgroundColor : "red" , color : "withe"}}
                                >
                                    Delete
                                </Button>
                            </ListItem>
                        )
                    })
                }
            </div>
     )
    }
}
export default Completed;