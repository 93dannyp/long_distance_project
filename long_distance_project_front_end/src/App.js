import React from "react";

import beginner from "./data/beginner.js";

import WeekCalendarBeginner from "./components/WeekCalendarBeginner.jsx";
import NewUserForm from "./components/NewUserForm.jsx";

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    beginner: beginner,
    completedDays: [],
    users: [],
  };

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
        <NewUserForm baseURL={baseURL} addUser={this.addUser} />
        <WeekCalendarBeginner beginner={this.state.beginner} />
      </div>
    );
  }
}

export default App;
