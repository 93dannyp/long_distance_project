import React from 'react'

import beginner from './data/beginner.js'

import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';

let baseURL = 'http://localhost:3003'


class App extends React.Component {
   state = {
    beginner: beginner,
    weekDays: weekDays,
    
  }
    


  render () {
    return (
      <div>
        
        <h1>Welcome to the long distance project.</h1> 
        
        <WeekCalendarBeginner beginner={this.state.beginner}/>
        
      </div>
    )
  }
}


export default App;
