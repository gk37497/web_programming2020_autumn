import React from 'react';
import {
  AppBar, Toolbar, Typography
} from '@material-ui/core';
import './TopBar.css';

/**
 * Define TopBar, a React componment of CS142 project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    // changeUser = ()=>{
    //   this.setState({this.props.user : })
    // }
  }

  render() {
    return (
      <AppBar className="cs142-topbar-appBar" position="absolute">
        <Toolbar>
          <Typography variant="h5" color="inherit">
              Namsrai's photo app 
          </Typography>
           <Typography variant="h5" color="inherit">
            {this.props.user}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
