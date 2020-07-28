import React, { Component } from 'react'
// import LogInForm from './LogInForm'

export default class NewUserForm extends Component {

    sendData = () => {
        this.props.parentCallback(this.state.currentUser);
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
            <div className="text-center container" data-gr-c-s-loaded="true">
                <h1 className="h3 mb-3 font-weight-normal">Create Your User Profile</h1>
                <form lassName="form-signin container" onSubmit={(evt) => this.handleSubmit(evt)}>
                    <label htmlFor="username"  className="sr-only">Username: </label>
                    <input type="text" id="username" className="form-control" placeholder="Username" required autoFocus onChange={(evt) => this.handleChange(evt)} value={ this.props.username} />
                    <label htmlFor="level" className="sr-only">Skill Level: </label>
                    <input type="text" id="level" className="form-control" placeholder="Level" required autoFocus onChange={(evt) => this.handleChange(evt)} value={ this.props.level}/><br/>
                    <input type="submit" value="Create-User" class="btn btn-info my-4 btn-block"/>
                </form>
                
                

            </div>
        )
    }
}
