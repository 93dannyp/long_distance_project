import React, {Component } from 'react'

class TodaysWorkout extends Component {
    state = {
        title: '',
        distance: '0',
        time: '0',
        week: '0',
        day: '0',
        goalWasMet: false,
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.props.currentUser);
        fetch(this.props.baseURL + '/training', {
            method: 'POST',
            body: JSON.stringify({
                currentUserId: this.props.currentUser._id,
                title: this.state.title,
                distance: this.state.distance,
                time: this.state.time,
                week: this.state.week,
                day: this.state.day,
                goalWasMet: this.state.goalWasMet,
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
            <div data-gr-c-s-loaded="true">
                <section className='jumbotron text-center'>
                    <div class="view view-cascade overlay">
                        <img src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"   width="1000" height="300"></img>
                    </div><br/>
                </section>
                <div className="text-center container">
                <form className="form-signin container" onSubmit={ (event) => this.handleSubmit(event) }>

                <label htmlFor="title">Title: </label>
                <input type="text" id="title" className="form-control" required autoFocus
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.title }/><br />

                <label htmlFor="distance">Distance: </label>
                <input type="number" id="distance" className="form-control" required autoFocus
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.distance }/><br />
                
                <label htmlFor="time">Time: </label>
                <input type="number" id="time" className="form-control" required autoFocus
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.time }/><br />

                <label htmlFor="week">Week: </label>
                <input type="number" id="week" className="form-control" required autoFocus
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.week }/><br />
                
                <label htmlFor="day">Day: </label>
                <input type="number" id="day" className="form-control" required autoFocus
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.day }/><br />

                <input type="submit" value="Submit your day!" class="btn btn-info my-4 btn-block"/>
            </form>
            </div>
            </div>
        )
    }
}

export default TodaysWorkout