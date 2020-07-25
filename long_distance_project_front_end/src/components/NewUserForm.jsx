import React, { Component } from 'react'
// import LogInForm from './LogInForm'

export default class NewUserForm extends Component {

    sendData = () => {
        this.props.parentCallback(this.state.currentUser);
   }
// render() { 
// //you can call function sendData whenever you'd like to send data from child component to Parent component.
//    }

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
                username: this.state.username,
                level: this.state.level,
                isLoggedIn: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            // console.log((data))
            // opportunity for duplicate username error handling
            this.props.addUser(data);
            this.setState({
                currentUser: data
            });
            this.sendData();
            console.log(this.state.currentUser)
            console.log('in handle submit')
           
        });
    }
    
    render() {
        return (
            <div>
                <h1>Create Your User Profile</h1>
                <form onSubmit={(evt) => this.handleSubmit(evt)}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" onChange={(evt) => this.handleChange(evt)} value={ this.props.username} /><br/>
                    <label htmlFor="level">Skill Level: </label>
                    <input type="text" id="level" onChange={(evt) => this.handleChange(evt)} value={ this.props.level}/><br/>
                    <input type="submit" value="Create-User"/>
                </form>
                
                

            </div>
        )
    }
}
