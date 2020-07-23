import React from 'react'

import beginner from './data/beginner.js'

import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
import RunnerInfo from './components/RunnerInfo.jsx';

let baseURL = 'http://localhost:3003'


class App extends React.Component {
<<<<<<< HEAD
  //  state = {
  //   beginner: beginner,
  //   weekDays: weekDays,
    
  // }
=======
   state = {
    beginner: beginner,
    completedDays: [],    
  }
>>>>>>> 8981ad4352fbce8ff967c8339d6a79be1c50dfc6
    
  checkOffDay = (day) => {
    this.setState({completedDays: [day, ... this.state.completedDays]})
  }

  render () {
    return (
      <div>
        
        <h1>Welcome to the long distance project.</h1> 
        
        {/* <WeekCalendarBeginner beginner={this.state.beginner}/> */}
        <RunnerInfo />
      </div>
    )
  }
}


export default App;
