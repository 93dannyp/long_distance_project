import React, { Component } from 'react'

export default class LogInForm extends Component {
    

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
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                currentUser: data,
            });
        });
    }

    handleLogout = (currentUser) => {
        console.log('in logOut()')
        console.log(currentUser._id)
        fetch(this.props.baseURL + '/users/' + currentUser._id, {
            method: 'PUT',
            body: JSON.stringify({isLoggedIn: !currentUser.isLoggedIn}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            const copyUsers = [...this.props.users]
            const findIndex = this.props.users.findIndex(currentUser => currentUser._id === data._id)
            copyUsers[findIndex].isLoggedIn = data.isLoggedIn
            this.setState({users: copyUsers})
        })            
    }

   

    render() {
        return (
            <div>
                {/* //if the user is logged in, reveal the user's training plan components based on this ternary, too*/}

                <form onSubmit={(event) => this.handleLogin(event)}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" onChange={(evt) => this.handleChange(evt)} value={ this.props.username}/><br/>
                    
                    { this.props.currentUser.isLoggedIn ?
                        <>
                        <h6>Welcome, {this.props.currentUser.username}</h6>
                        <button type="button" onClick={() => this.handleLogout(this.props.currentUser)}>Log Out</button>
                        </>
                        : <input type="submit" value="Please Log In"/>}
                    </form>
                        
            </div>
        )
    }


}
