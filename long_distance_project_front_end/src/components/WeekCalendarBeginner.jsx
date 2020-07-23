import React, {Component } from 'react'
import beginner from '../data/beginner.js'


class WeekCalendarBeginner extends Component {

    state = ({
        Week: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: '',
        Sunday: '',
    })

    checkOffDay = () => {
        this.setState({
            
        })
    }

    render () {
        return (
            <div>
                <h3>The Week Ahead:</h3>
                <h4>Week: {beginner[0].week}</h4>
                <div>Monday: {beginner[0].monday}</div>
                <div>Tuesday: {beginner[0].tuesday}</div>
                <div>Wednesday: {beginner[0].wednesday}</div>
                <div>Thursday: {beginner[0].thursday}</div>
                <div>Friday: {beginner[0].friday}</div>
                <div>Saturday: {beginner[0].saturday}</div>
                <div>Sunday: {beginner[0].sunday}</div>
            </div>
        )
    }
}

export default WeekCalendarBeginner