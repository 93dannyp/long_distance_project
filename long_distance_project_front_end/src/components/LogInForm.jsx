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
            <div className="text-center container" data-gr-c-s-loaded="true">
                {/* //if the user is logged in, reveal the user's training plan components based on this ternary, too*/}
                {/* (event) => this.handleLogin(event, this.username) */}

                <form className="form-signin container" onSubmit={(event) => this.props.handleLogin(event, this.state.username)}>
                    {!this.props.currentUser.isLoggedIn ?
                    <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>: null}
                        <label htmlFor="username" className="sr-only" >Username: </label>
                        <input type="text" id="username" className="form-control" placeholder="Username" required autoFocus onChange={(event) => this.handleChange(event)} value={ this.state.username}/><br/>
                    
                    { this.props.currentUser.isLoggedIn ?
                        <>
                        <h6>Welcome, {this.props.currentUser.username}</h6>
                        <button class="btn btn-info my-4 btn-block" type="button" onClick={() => this.props.handleLogout(this.props.currentUser)}>Log Out</button>
                        </>
                        : <button class="btn btn-info my-4 btn-block" type="submit">Log In</button>
                        }
                    </form>
                    
            </div>
        )
    }


}
