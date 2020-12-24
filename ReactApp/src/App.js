import { Container, Grid } from '@material-ui/core';
import { HashRouter,Route } from 'react-router-dom';
import './App.css';
import Review from './components/bookReview';
import Header from './components/header';
import NavBar from './components/navBar';
import ReviewList from './components/reviewsList';

function App() {
  return (
    <Container maxWidth="md">
      <HashRouter>
        <Header />
        <Grid container>
          <Grid sm={3}>
            <NavBar/>          
          </Grid>
          <Grid sm={9}>
            <Route path="/" exact component={ReviewList} />
            <Route path="/create" component={Review} />
            {/* <Review/>
            <ReviewList/> */}
          </Grid>
        </Grid>
      </HashRouter>
    </Container>
  );
}

export default App;
