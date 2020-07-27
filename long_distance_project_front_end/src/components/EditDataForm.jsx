import React, { Component } from 'react'

export default class EditDataForm extends Component {

    handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value,
        });
      };
    
      componentDidMount = () => {
          
      }
   

    render() {
        return (
            <div>
                <h1>Edit Your Stats For Today's Run!</h1>
                {/* NEED TO ADD IN KEY WITH OBJECT _ID SO THAT CURRENT INFORMATION IS RENDERED WHEN EDITING */}
                {/* NEED TO TAKE OUT ROUTE LINK AND USE AN <A></A> TAG. BECAUSE INFORMATION IS NOT BEING PROPERLY TRANSFERRED THROUGH ROUTE */}
                    {/* // from should populate current data
                    // form should contain the id for query
                    // update the data n the form event.currentTarget.value 
                    // then query database for updated opbject
                    // update state in app.js so that the list of past workouts update */}
                <form onSubmit={ (trainingDay) => this.props.editTrainingDay(trainingDay)} >

                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.props.title } /><br />

                    <label htmlFor="distance">Distance: </label>
                    <input type="number" id="distance"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.props.distance }/><br />

                    <label htmlFor="time">Time: </label>
                    <input type="number" id="time"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.props.time }/><br />

                    <label htmlFor="week">Week: </label>
                    <input type="number" id="week"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.props.week }/><br />

                    <label htmlFor="day">Day: </label>
                    <input type="number" id="day"
                        onChange={ (event) => this.handleChange(event) }
                        value={ this.props.day }/><br />

                    <input type="submit" value="EDIT"/>
                    
                </form>
            </div>
        )
    }
}

