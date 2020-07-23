import React from 'react';
<<<<<<< HEAD
import RunnerInfo from './components/RunnerInfo.jsx'

=======
import beginner from './data/beginner.js'
import intermediate from './data/intermediate.js'
import elite from './data/elite.js'
import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
>>>>>>> ce53c1e6f27ca8822521832cbf5463c20de90ffa

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
<<<<<<< HEAD
        <RunnerInfo />
=======
        
        <h1>Welcome to the long distance project.</h1>
        <WeekCalendarBeginner />
        
>>>>>>> ce53c1e6f27ca8822521832cbf5463c20de90ffa
      </div>
    )
  }
}


export default App;
