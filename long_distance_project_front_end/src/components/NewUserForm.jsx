import React, { Component } from 'react'
let baseURL = "http://localhost:3003";


export default class NewUserForm extends Component {
    //  why do I need state here? It won't work without it.
    state = {

        username: '',
        level: '',


    }
   
    handleChange = (event) => {
        this.setState({
          [event.currentTarget.id]: event.currentTarget.value,
        });
      };

    handleSubmit = (event) => {
        event.preventDefault();        
        fetch(this.props.baseURL+ '/users', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username, //Why do I need "state" here? I don't need it in the form. Because I'm calling a function in here that is on the parent level? But wouldn't that mean I need props?
                level: this.state.level,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            console.log((data))
            // opportunity for duplicate username error handling
            this.props.addUser(data);
            this.setState({
                username: '',
                level: '',
            });
        });
    }
    
    render() {
        return (
            <div>
                <h1>Create Your User Profile</h1>
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={(evt) => this.handleChange(evt)} value={ this.state.username} /><br/>
                    <label htmlFor="level">Skill Level: </label>
                    <input type="text" id="level" onChange={(evt) => this.handleChange(evt)} value={ this.state.level}/><br/>
                    <input type="submit" value="Create-User"/>
                </form>
            </div>
        )
    }
}
