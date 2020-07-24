import React from 'react'

import beginner from './data/beginner.js'

import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
import RunnerInfo from './components/RunnerInfo.jsx';
import TodaysWorkout from './components/TodaysWorkout.jsx';

let baseURL = 'http://localhost:3003'


class App extends React.Component {
  state = {
    beginner: beginner,
    completedDays: [],  
    trainingDay: [],
  }
    
  getTrainingDay = () => {
    fetch(baseURL + '/training').then(res => {
      return res.json();
    }).then(data => {
      this.setState({
        trainingDay: data,
      });
    });
  }

  addTrainingDay = (newTrainingDay) => {
    const copyTrainingDay = [...this.state.trainingDay];
    copyTrainingDay.push(newTrainingDay);
    this.setState({
      trainingDay: copyTrainingDay,
      
    });
  }




  checkOffDay = (day) => {
    this.setState({completedDays: [day, ... this.state.completedDays]})
  }
 

  render () {
    return (
      <div>
        <TodaysWorkout baseURL={ baseURL } addTrainingDay={ this.addTrainingDay }/>
        
      <h1>Welcome to the long distance project.</h1> 
      
      <WeekCalendarBeginner beginner={this.state.beginner}/>
      
    </div>
    )
  }
}


export default App;
