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
            <div>
            <section className='jumbotron text-center'>
                    <div className='container'>
                    <h3>Record Your Run</h3>
                        
                    </div>
                </section>
            <div className='container'>
                <form className='form-signin' onSubmit={ (event) => this.handleSubmit(event) }>

                <h1 className='h3 mb-3 font-weight-normal'>Record Your Run</h1>

                <label className='' htmlFor="title">Title</label>
                <input className='form-control' type="text" id="title"
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.title }/><br />

                <label className='' htmlFor="distance">Distance (miles)</label>
                <input className='form-control' type="number" id="distance"
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.distance }/><br />
                
                <label className='' htmlFor="time">Time (minutes)</label>
                <input className='form-control' type="number" id="time"
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.time }/><br />

                <label className='' htmlFor="week">Week Number</label>
                <input className='form-control' type="number" id="week"
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.week }/><br />
                
                <label className='' htmlFor="day">Day Number</label>
                <input className='form-control' type="number" id="day"
                    onChange={ (event) => this.handleChange(event) }
                    value={ this.state.day }/><br />

                <input className='btn btn-lg btn-primary btn-block'type="submit" value="Submit"/>
            </form>
            </div>
            </div>
        )
    }
}

export default TodaysWorkout