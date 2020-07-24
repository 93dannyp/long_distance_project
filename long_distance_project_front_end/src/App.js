import React from "react";

import beginner from "./data/beginner.js";
import WeekCalendarBeginner from './components/WeekCalendarBeginner.jsx';
import RunnerInfo from './components/RunnerInfo.jsx';
import TodaysWorkout from './components/TodaysWorkout.jsx';

import NewUserForm from "./components/NewUserForm.jsx";

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    beginner: beginner,
    completedDays: [],  
    trainingDay: [],
    users: [],
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
    const copyUser = [...this.state.users];
    copyUser.push(newUser);
    this.setState({
      users: copyUser,
    });
  };

  checkOffDay = (day) => {
    this.setState({ completedDays: [day, ...this.state.completedDays] });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the long distance project.</h1>
        <TodaysWorkout baseURL={ baseURL } addTrainingDay={ this.addTrainingDay }/>
        <NewUserForm baseURL={baseURL} addUser={this.addUser} />
        <WeekCalendarBeginner beginner={this.state.beginner} />

      </div>
    );
  }
}
export default App;
