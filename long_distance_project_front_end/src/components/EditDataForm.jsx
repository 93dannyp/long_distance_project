import React, { Component } from 'react'

export default class Edit_Form extends Component {
    render() {
        return (
            <div>
                <h1>Add Your Stats For Today's Run!</h1>
                <form>
                <form onSubmit={ (event) => this.handleSubmit(event) }>

                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.state.title }/><br />

                    <label htmlFor="distance">Distance: </label>
                    <input type="number" id="distance"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.state.distance }/><br />

                    <label htmlFor="time">Time: </label>
                    <input type="number" id="time"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.state.time }/><br />

                    <label htmlFor="week">Week: </label>
                    <input type="number" id="week"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.state.week }/><br />

                    <label htmlFor="day">Day: </label>
                    <input type="number" id="day"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.state.day }/><br />

                    <input type="submit" value="Submit your day!"/>
                    
                </form>
            </div>
        )
    }
}
