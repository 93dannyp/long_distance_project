import React, {Component } from 'react'

class TodaysWorkout extends Component {
    state = {
        title: '',
        distance: '0',
        time: '0',
        week: '0',
        day: '0'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }




    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.props.baseURL + '/training', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                distance: this.state.distance,
                time: this.state.time,
                week: this.state.week,
                day: this.state.day,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => {
            return res.json();
        }).then(data => {
            this.props.addTrainingDay(data);
            this.setState({
                title: '',
                distance: '0',
                time: '0',
                week: '0',
                day: '0'
            });
        });
    }




    render () {
        return (
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
        )
    }
}

export default TodaysWorkout