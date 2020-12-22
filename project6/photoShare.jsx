import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import {Grid,Container} from "@material-ui/core";
import "./styles/main.css";

// import necessary components
import TopBar from "./components/topBar/TopBar";
import UserDetail from "./components/userDetail/UserDetail";
import UserList from "./components/userList/UserList";
import UserPhotos from "./components/userPhotos/UserPhotos";

class PhotoShare extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: ""
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView = (newView, name) => {
    name ? 
    this.setState({ view: newView + (name) }):this.setState({ view: newView })
  };

  render() {
    return (
      <HashRouter>
        <Container maxWidth = "md">
          <Grid
            container
          >
            <Grid item sm={12}>
              <TopBar view={this.state.view} />
            </Grid>
            <Grid item sm={9}>
                <Switch>
                  <Route
                    path="/users/:userId"
                    render={props => (
                      <UserDetail {...props} changeView={this.changeView} />
                    )}
                  />
                  <Route
                    path="/photos/:userId"
                    render={props => (
                      <UserPhotos userName={this.state.view} changeView={this.changeView} {...props} />
                    )}
                  />
                  <Route path="/users" component={UserList} />
                </Switch>
            </Grid>
            <Grid
              item
              sm={3}>
                <UserList />
            </Grid>
          </Grid>
        </Container>
      </HashRouter>
    );
  }
}

ReactDOM.render(<PhotoShare />, document.getElementById("photoshareapp"));
