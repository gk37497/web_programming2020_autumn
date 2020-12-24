import { Container, Grid,Paper } from '@material-ui/core';
import { HashRouter,Route } from 'react-router-dom';
import './App.css';
import Review from './components/createBookReview';
import Category from './components/category';
import EditReview from './components/editReview';
import Header from './components/header';
import NavBar from './components/navBar';
import ReviewList from './components/reviewsList';

function App() {
  return (
    <Container maxWidth="md">
      <HashRouter>
        <Header/>
        <Grid container>
          <Grid sm={3}>
            <NavBar/>          
          </Grid>
          <Grid sm={9}>
            <Paper elevation="3" variant="elevation" style = {{height : '80vh' , marginLeft : '2%'}}>
              <Route path="/" exact component={ReviewList} />
              <Route path="/create" component={Review} />
              <Route path="/categories/:id" component={Category} />
              <Route path="/edit/:id" component={EditReview} />
            </Paper>
          </Grid>
        </Grid>
      </HashRouter>
    </Container>
  );
}

export default App;
