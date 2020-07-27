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


    render() {
        return (
            <div>
                {/* //if the user is logged in, reveal the user's training plan components based on this ternary, too*/}

                <form onSubmit={(event) => this.props.handleLogin(event, this.state.username)}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" id="username" onChange={(event) => this.handleChange(event)} value={ this.state.username}/><br/>
                    
                    { this.props.currentUser.isLoggedIn ?
                        <>
                        <h6>Welcome, {this.props.currentUser.username}</h6>
                        <button type="button" onClick={() => this.props.handleLogout(this.props.currentUser)}>Log Out</button>
                        </>
                        : <button type="submit">Please Log In</button>
                        }
                    </form>
                    
            </div>
        )
    }


}
