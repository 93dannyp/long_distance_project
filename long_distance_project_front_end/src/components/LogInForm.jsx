import React, { Component } from 'react'


export default class LogInForm extends Component {
    state = {
        username: '',
    }

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
        });
      };

    handleLogin = (event, username) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/sessions/', {
            method: 'PUT',
            body: JSON.stringify({
                username: username,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(res => res.json())
        .then(data => {
            console.log("data first: ", data)
            this.setState({
                currentUser: data,
            })
            
        })  
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
                {/* (event) => this.handleLogin(event, this.username) */}

                <form onSubmit={(event) => this.handleLogin(event, this.state.username)}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" onChange={(event) => this.handleChange(event)} value={ this.state.username}/><br/>
                    
                    { this.props.currentUser.isLoggedIn ?
                        <>
                        <h6>Welcome, {this.props.currentUser.username}</h6>
                        <button type="button" onClick={() => this.handleLogout(this.props.currentUser)}>Log Out</button>
                        </>
                        : <button type="submit">Please Log In</button>
                        }
                    </form>
                    
            </div>
        )
    }


}
