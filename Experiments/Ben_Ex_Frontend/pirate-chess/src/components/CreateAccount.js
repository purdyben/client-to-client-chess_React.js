import React from 'react';
import {Button, Form, FormGroup, Input, Label} from 'reactstrap';

const CreateAccount = () => (
    <header className="App-header">
        <div className="col-lg-3 col-md-3">
            <li>
                <a href="/"><img style={{width: 150, height: 150}} src="logo.png" className="App-logo-small" alt="logo"
                                 onClick=""/></a>
            </li>
        </div>
        <div className="Login-buttons">
            <Form>
                <FormGroup>
                    <Label for="newUsername">Enter Username</Label>
                    <Input type="newUsername" name="newUsername" id="newUsername" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <Label for="newPassword">Password</Label>
                    <Input type="newPassword" name="newPassword" id="newPassword" placeholder="Password"/>
                </FormGroup>
                <FormGroup>
                    <Label for="confirmNewPassword">Confirm Password</Label>
                    <Input type="confirmNewPassword" name="confirmNewPassword" id="confirmNewPassword"
                           placeholder="Confirm Password"/>
                </FormGroup>
            </Form>
            <Button color="primary" size="lg" href="/mainScreen" block>Create Account</Button>
        </div>
    </header>
);

export default CreateAccount;
