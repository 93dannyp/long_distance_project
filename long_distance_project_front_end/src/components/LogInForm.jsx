import React, { Component } from 'react'

export default class LogInForm extends Component {
    state = {
        users: [],
        // currentUser: req.session.currentUser,
        isLoggedIn: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.target.value,
        });
      };

    handleLogin = (event) => {
        event.preventDefault();        
        fetch(this.props.baseURL + '/sessions', {
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
                {/* //if the user is not logged in, prompt them to, otherwise welcome them. We may want to include some way of revealing the user's training plan components based on this ternary, too*/}
                {this.state.currentUser ? <h6>Welcome, {this.state.username}</h6> : <h6>Please Log-In</h6> }
                <form onSubmit={(event) => this.handleLogin(event)}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={(evt) => this.handleChange(evt)} value={ this.state.username}/><br/>
                    <input type="submit" value="Log-In"/>
                </form>
            </div>
        )
    }


}
