import React, { Component } from 'react'

import beginner from '../data/beginner.js'


class WeekCalendarBeginner extends Component {

    state = {
        complete: false,
    }

    toggleComplete = () => {
        this.setState({
            complete: !this.state.complete
        })
    }

    render () {
        return (
            <div>
                <h3>The Week Ahead:</h3>
                {this.props.beginner.map((beginner, index) => {
                    return <div key={index}>
                        <p>{beginner.weekNumber}</p>
                        {beginner.weekDays.map((weekDays, subindex) => {
                            return <div key={subindex}>
                                <ul onClick={ () => {this.toggleComplete()}}>
                                    <li>Day: {weekDays.day}</li>
                                    
                                    <li>Workout: {weekDays.run}</li>
                                    <li>Complete:{weekDays.complete}</li>
                                </ul>
                                
                            </div>
                        })}
                        </div>
                    })}
                
                </div>
        )
    }
}

export default WeekCalendarBeginner