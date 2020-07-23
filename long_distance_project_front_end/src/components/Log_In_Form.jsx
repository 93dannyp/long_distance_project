import React, { Component } from 'react'

export default class Log_In_Form extends Component {
    state = {
        user: [],
    }
    render() {
        return (
            <div>
                <form action="/sessions" method="POST">
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={(evt) => this.handleChange(evt)}/><br/>
                    Password: <input type="password" name="password"/><br/>
                    Skill Level: <input type="text" name="level"/><br/>
                    <input type="submit" value="Log-In"/>
                </form>
                
            </div>
        )
    }
}
