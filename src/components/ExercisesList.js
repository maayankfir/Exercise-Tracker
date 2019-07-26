import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react';

const Exercise = props => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
    <Button.Group>
      <Button as= {Link} to={"/edit/"+props.exercise._id} >Edit</Button>
      <Button.Or />
      <Button positive onClick={() => { props.onDeleteExercise(props.exercise._id) }} >Delete</Button>
    </Button.Group>
    </td>
  </tr>
)

class ExercisesList extends Component {

  state = {
    exercises: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
    .then(res => {
      this.setState({
        exercises: res.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  onDeleteExercise = (id) => {
    axios.delete('http://localhost:5000/exercises/' + id)
    .then(res => { console.log(res.data)});
      this.setState({
        exercises: this.state.exercises.filter( exercise => exercise.id !== id)
    })
    window.location = '/';
  }

  exerciseList() {
    return this.state.exercises.map(selectedExercise => {
      return <Exercise exercise={selectedExercise} onDeleteExercise={this.onDeleteExercise} key={selectedExercise._id}/>;
    })
  }

  render() {
    console.log(this.state.exercises);

    return (
      <div>

      <Table basic='very' selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Duration</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell textAlign='right'>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          { this.exerciseList() }
        </Table.Body>
      </Table>
      </div>
    );
  }
}

export default ExercisesList;
