import React from 'react';
import {Button} from 'reactstrap';

export default class CreateAccount extends React.Component {
  
  //get and post methods here
  
  render() {
    return (
      <header className="App-header">
        <img src="logo.png" className="App-logo-small" alt="logo" />
        <div className="Login-buttons">
        <Button color="primary" size="lg" href="/" block>Home</Button>
        <Button color="primary" size="lg" href="/game" block>Game</Button>
        <Button color="primary" size="lg" href="/tournament" block>Tournament</Button>
        <Button color="primary" size="lg" href="/profile" block>Profile</Button>
        <Button color="primary" size="lg" href="/leaderboard" block>Leaderboard</Button>
        <Button color="primary" size="lg" href="/settings" block>Settings</Button>
        <Button color="primary" size="lg" href="/howToPlay" block>How To Play</Button>
        </div>
      </header>
    )
  }
}