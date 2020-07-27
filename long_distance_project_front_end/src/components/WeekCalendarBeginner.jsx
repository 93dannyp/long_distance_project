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
                <div data-gr-c-s-loaded="true">
                    <main role="main">
                        <section className='jumbotron text-center'>
                            <div className='container'>
                            <h3>The Road Ahead</h3>
                                <p></p>
                            </div>
                        </section>
                <div className="album py-5 bg-light">
                    <div className="container">
                        <div className="row row-cols-4">
                            
                                
                {this.props.beginner.map((beginner, index) => {
                    return <div key={index}>
                        <p>WEEK: {beginner.weekNumber}</p>
                        {beginner.weekDays.map((weekDays, subindex) => {
                            return <div className="col-mb-4">
                                <div className="card mb-4 shadow-sm">
                            <div className="card-body" key={subindex}>
                                <div onClick={ () => {this.toggleComplete()}}>
                                    <p>Day: {weekDays.day}</p>
                                    <p>Workout: {weekDays.run} </p>
                                    <p>Complete:{weekDays.complete}</p>
                                    </div>
                                </div>
                                </div>
                                </div>
                            })}
                        </div>
                    })}
                    
                    
                    </div>
                    </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default WeekCalendarBeginner