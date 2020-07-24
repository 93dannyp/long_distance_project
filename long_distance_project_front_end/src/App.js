
import React from 'react'
import beginner from './data/beginner.js'
import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NavBar from './components/NavBar'




import RunnerInfo from './components/RunnerInfo.jsx';
import TodaysWorkout from './components/TodaysWorkout.jsx';


import NewUserForm from "./components/NewUserForm.jsx";
import LogInForm from "./components/LogInForm.jsx";

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    beginner: beginner,

    completedDays: [],    
    message: 'Hello',


     
    trainingDay: [],

    users: [],
    signUpUser: '',
  };
    
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

  addUser = (newUser) => {
    console.log(newUser)
    const copyUser = [...this.state.users];
    copyUser.push(newUser);
    this.setState({
      users: copyUser,
    });
    console.log(newUser)
  };

  checkOffDay = (day) => {
    this.setState({ completedDays: [day, ...this.state.completedDays] });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/calendar' render={() => <WeekCalendarBeginner beginner={this.state.beginner} /> } />
          <Route exact path='/about' render={() => <About message={this.state.message} />} />
          <Route exact path='/signup' render={() => <NewUserForm baseURL={baseURL} addUser={this.addUser} /> } />
          <Route component={Error}/>
        </Switch>
        <h1>Welcome to the long distance project.</h1>



        
        <LogInForm baseURL={baseURL} handleChange={this.handleChange} />
        <TodaysWorkout baseURL={ baseURL } addTrainingDay={ this.addTrainingDay }/>


      </div>
    );
  }
}
export default App;
