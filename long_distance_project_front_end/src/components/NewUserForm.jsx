import React, { Component } from 'react'
let baseURL = "http://localhost:3003";


export default class NewUserForm extends Component {
    state = {
        username: '',
        level: '',
    }


    handleChange = (event) => {
        this.setState({
            [event.currentTarget.id]: event.currentTarget.value,
        })
    }

    // getUsers = () => {
    //     fetch(this.props.baseURL + '/training').then(res => {
    //         return res.json();
    //     }).then(data => {
    //         this.setState({
    //             holidays: data,
    //         })
    //     })
    // }
    handleSubmit = (event) => {
        event.preventDefault();        
        fetch(this.props.baseURL+ '/users', {
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
            console.log((data))
            // opportunity for duplicate username error handling
            this.props.addUser(data);
            this.setState({
                username: '',
                level: '',
            });
        });
    }

    // componentDidMount() {
    //     this.getUsers();
    // }
    
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