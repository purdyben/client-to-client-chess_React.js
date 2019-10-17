import React from 'react';
import axios from 'axios';
import {Table, Button, ButtonGroup} from 'reactstrap';

export default class Leaderboard extends React.Component {
  state = {
    persons: []
  }
  componentDidMount() {
    //https://jsonplaceholder.typicode.com/users
    //coms-309-bs-4.misc.iastate.edu:8080/test/hello
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res.data);
        this.setState({persons : res.data});
        console.log(this.state.persons);
      })
  }
  
  render() {
    return (
      <header className="App-header">
      <img src="logo.png" className="App-logo-small" alt="logo" />
        Leaderboard
        <div className="Leaderboard-Buttons">
          <ButtonGroup size="lg">
            <Button color="primary" href="/leaderboard">All Time</Button>
            <Button color="primary" href="/leaderboard">Monthly</Button>
            <Button color="primary" href="/leaderboard">Weekly</Button>
          </ButtonGroup>
        </div>
        <Table dark className="Leaderboard">
          <thead>
            <tr>
              <th>#</th>
              <th>Display Name</th>
              <th>Points</th>
              <th>Ranking</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>[Name]</td>
              <td>[Point Value]</td>
              <td>[Rank]</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>[Name]</td>
              <td>[Point Value]</td>
              <td>[Rank]</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>[Name]</td>
              <td>[Point Value]</td>
              <td>[Rank]</td>
            </tr>
          </tbody>
        </Table>
      </header>
    )
  }
}