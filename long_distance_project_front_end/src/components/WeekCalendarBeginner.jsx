import React, { Component } from 'react'

import beginner from '../data/beginner.js'


class WeekCalendarBeginner extends Component {

    

    // checkOffDay = () => {
    //     this.setState({

    //     })
    // }

    render () {
        return (
            <div>
                <h3>The Week Ahead:</h3>
                {this.props.beginner.map((beginner, index) => {
                    return <div key={index}>
                        <p>{beginner.weekNumber}</p>
                        </div>
                })}
                {this.props.beginner.map((weekDays, index) => {
                            return <div>
                                <p>{weekDays.day}</p>
                            </div>
                        })}
                </div>
        )
    }
}

export default WeekCalendarBeginner