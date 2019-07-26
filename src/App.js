import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ExercisesList from './components/ExercisesList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import { Grid, Header } from 'semantic-ui-react'

function App() {
  return (
    <Router>
      <div>
      <Grid verticalAlign='right' columns={3} divided>
      <Grid.Row>
      <Header as='h3' dividing>
      </Header>
      </Grid.Row>
      <Grid.Column >
      <Grid.Row>
        <NavBar />
      </Grid.Row>
      </Grid.Column>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </Grid >
      </div>
    </Router>
  );
}

export default App;
