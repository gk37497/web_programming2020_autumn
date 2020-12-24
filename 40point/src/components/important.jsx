import {Button, ListItem, ListItemText} from '@material-ui/core';
import React from 'react';

class Important extends React.Component
{
    state={
        tasks : ['aaaaaa' ,'bbb','ccc','ddd','eeee'],
    }
    render=() =>
    {
        return (
            <div>
                <h3>Important</h3>
                {
                    this.state.tasks.map(el =>
                    {
                        return (
                            <Button key = {el} fullWidth color = "secondary">
                                <ListItem divider>
                                    <ListItemText primary = {el}/>
                                </ListItem>
                            </Button>
                        )
                    })
                }
            </div>
     )
    }
}
export default Important;