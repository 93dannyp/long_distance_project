import React, { Component } from 'react'



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
                <section className='jumbotron text-center'>
                    <div className='container'>
                    <h3>The Road Ahead</h3>
                        <p></p>
                    </div>
                </section>
                
                {this.props.beginner.map((beginner, index) => {
                    return <div key={index}>
                        <p>WEEK: {beginner.weekNumber}</p>
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