import {Grid,Paper} from '@material-ui/core';
import {HashRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import AddTask from './components/addTask/addTask';
import Completed from './components/completed';
import Header from './components/header';
import Important from './components/important';
import SideBar from './components/sidebar';
import Task from './components/Tasks';
import TaskCard from './components/card.jsx'
import React from 'react'
import './styles/main.css';

class App extends React.Component
{
  state ={
    clicked: '', 
    taskTitle: '',
    completedTasks: [],
    Mytasks:[],
  }
  handler=(el) =>
  {
      this.setState({clicked :el})
  }
  titleHandler=(el) =>
  {
    console.log(el)
    this.state.Mytasks.push(el)
    console.log(this.state.Mytasks)
  }
  completedTasks=(el) =>
  {
    this.state.completedTasks.push(el);
    console.log(this.state.completedTasks)
  }

  render()
  {
    return (
      <div className="App">
        <HashRouter>
          <Grid container spacing={1}>
            <Grid xs={12}>
              <Header />
            </Grid>
            <Grid item sm={2}>
              <Paper className = "paper">
                <SideBar/>
               </Paper>
            </Grid>
            <Grid item sm={6}> 
              <Paper className = "paper">
                <Switch>
                  <Route
                    path="/Tasks"
                    render={props => (
                      <Task {...props}
                        completedTasks={this.completedTasks}
                        mytasks={this.state.Mytasks}
                      />
                    )}
                      />
                  <Route
                      path="/Important"
                      render={props => (
                        <Important {...props}/>
                      )}
                  />
                   <Route
                      path="/Completed"
                      render={props => (
                        <Completed {...props}  completedTasks = {this.state.completedTasks}/>
                      )}
                    />
                </Switch>
              </Paper>
            </Grid>
            <Grid item sm={4}>
              <Paper className = 'paper'>
                <TaskCard titleHandler={this.titleHandler}/>
              </Paper>
            </Grid>
          </Grid>
        </HashRouter>
      </div>
    );
  }
}

export default App;
