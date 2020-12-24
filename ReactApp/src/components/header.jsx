import { Paper } from '@material-ui/core';
import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';

const Header = () =>
{
    return ( 
            <Paper elevation = "3">
                <h2 style={{ textAlign: 'left',paddingLeft:'5%', color : '#3f51b5'}}>Book Review</h2>
            </Paper>
    )
}
export default Header;