import React, { Component } from 'react'

export default class NewUserForm extends Component {
    state = {
        
    }


    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/training', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
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
                <h1>Create Your User Profile</h1>
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={(evt) => this.handleChange(evt)}/><br/>
                    <label htmlFor="level">Skill Level: </label>
                    <input type="text" id="level" onChange={(evt) => this.handleChange(evt)}/><br/>
                    <input type="submit" value="Log-In"/>
                </form>
            
            </div>
        )
    }
}
