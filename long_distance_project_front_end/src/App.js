import React from 'react'
import beginner from './data/beginner.js'
import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'

let baseURL = 'http://localhost:3003'


class App extends React.Component {
   state = {
    beginner: beginner,
    completedDays: [],    
    message: 'Hello'
  }
    
  checkOffDay = (day) => {
    this.setState({completedDays: [day, ... this.state.completedDays]})
  }

  render () {
    return (
      <div>
          <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calendar' render={() => <WeekCalendarBeginner beginner={this.state.beginner} /> } />
          <Route exact path='/about' render={() => <About message={this.state.message} />} />
          <Route component={Error}/>
        </Switch>
        <h1>Welcome to the long distance project.</h1>         
      </div>
    )
  }
}


export default App;
