import React from "react";
import NewUserForm from "./components/NewUserForm";
// let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    trainingDay: [],
    users: [],
    baseURL: "http://localhost:3003",
  };

  getTrainingDay = () => {
    fetch(this.baseURL + "/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          trainingDay: data,
        });
      });
  };

  addUser = (newUser) => {
    const copyUsers = [...this.state.users];
    copyUsers.push(newUser);
    this.setState({
      users: copyUsers,
    });
  };

  componentDidMount = () => {
    this.getTrainingDay();
  };

  render() {
    return (
      <div>
        <h1>Welcome to the long distance project.</h1>

        <NewUserForm
          baseURL={this.state.baseURL}
          addUser={this.addUser}
          trainingDay={this.state.trainingDay}
          users={this.state.users}
        />
      </div>
    );
  }
}

export default App;
