import React from 'react';
import beginner from './data/beginner.js'
import intermediate from './data/intermediate.js'
import elite from './data/elite.js'

let baseURL = 'http://localhost:3003'


class App extends React.Component {
  state = {
    trainingDay: []
  }

  //this is supposed to retrieve the strava API info
  getTrainingDay = () => {
    fetch(baseURL + '/').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      this.setState({
        trainingDay: data,
      })
    })
  }

componentDidMount = () => {
  this.getTrainingDay()
}

  render () {
    return (
      <div>
        <h1>Welcome to the long distance project.</h1>
        <h2>Beginner Training Plan:</h2> 
        <p>Week: {beginner[0].week}</p>
        <p>Monday: {beginner[0].monday}</p>
        <p>Tuesday: {beginner[0].tuesday}</p>
        <p>Wednesday: {beginner[0].wednesday}</p>
        <p>Thursday: {beginner[0].thursday}</p>
        <p>Friday: {beginner[0].friday}</p>
        <p>Saturday: {beginner[0].saturday}</p>
        <p>Sunday: {beginner[0].sunday}</p>
        
      </div>
    )
  }
}


export default App;
