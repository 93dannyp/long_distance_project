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
            <div className="text-center container" data-gr-c-s-loaded="true">
                {/* //if the user is logged in, reveal the user's training plan components based on this ternary, too*/}

                <form className="form-signin container" onSubmit={(event) => this.props.handleLogin(event, this.state.username)}>
                    {!this.props.currentUser.isLoggedIn ?
                    <h1 className="h3 mb-3 font-weight-normal">Please log in</h1>: null}
                        <label htmlFor="username" className="sr-only" >Username: </label>
                        <input type="text" id="username" className="form-control" placeholder="Username" required autoFocus onChange={(event) => this.handleChange(event)} value={ this.state.username}/>
                    
                    { this.props.currentUser.isLoggedIn ?
                        <>
                        <h6>Welcome, {this.props.currentUser.username}</h6>
                        <button className="btn btn-lg btn-primary btn-block" type="button" onClick={() => this.props.handleLogout(this.props.currentUser)}>Log Out</button>
                        </>
                        : <button className="btn btn-lg btn-primary btn-block" type="submit">Log In</button>
                        }
                    </form>
                    
            </div>
        )
    }


}
