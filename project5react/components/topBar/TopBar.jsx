import React from "react";
import { Grid, Toolbar, Typography, Container, Paper } from "@material-ui/core";
import "./TopBar.css";
class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: this.props.view,
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.view !== this.props.view) {
      this.setState({ view: this.props.view });
    }
  }
  render() {
    return (
      <Container maxWidth="md"
        style={{
          padding: "0",
          marginBottom : "10px"
      }}>
        <Paper style={{ backgroundColor: "#ffffff" }}>
          <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit">
              namsrai
            </Typography>
            <Typography variant="h5">{this.state.view}</Typography>
          </Grid>
          </Toolbar>
        </Paper>
      </Container>
    );
  }
}

export default TopBar;
