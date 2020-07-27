import React from "react";
import beginner from "./data/beginner.js";
import WeekCalendarBeginner from "./components/WeekCalendarBeginner.jsx";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import History from "./components/History";
import TodaysWorkout from "./components/TodaysWorkout.jsx";
import RunnerInfo from "./components/RunnerInfo.jsx";
import NewUserForm from "./components/NewUserForm.jsx";
import LogInForm from "./components/LogInForm.jsx";
import EditDataForm from './components/EditDataForm'

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    beginner: beginner,
    completedDays: [],
    message: "Hello",
    trainingDay: [],
    users: [],
    currentUser: [],
  };
  //Callback function to get currentUser from NewUserForm to App.js
  callbackFunction = (currentUser) => {
    this.setState({
      currentUser: currentUser,
    });
  };

  getTrainingDay = () => {
    fetch(baseURL + "/training")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          trainingDay: data,
        });
      });
  };

  addTrainingDay = (newTrainingDay) => {
    console.log(newTrainingDay);
    const copyTrainingDay = [...this.state.trainingDay];
    copyTrainingDay.push(newTrainingDay);
    this.setState({
      trainingDay: copyTrainingDay,
    });
  };

  deleteTrainingDay = (id) => {
    console.log(id)
    fetch(baseURL + '/training/' + id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.trainingDay.findIndex(trainingDay => trainingDay._id === id)
      const copyTrainingDay = [...this.state.trainingDay]
      copyTrainingDay.splice(findIndex, 1)
      this.setState({trainingDay: copyTrainingDay})
    })
  }

  
  toggleCompleted = (beginner) => {
    fetch(baseURL + '/training/' + beginner, {
      method: 'PUT',
      body: JSON.stringify({completed: !beginner}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
        const copybeginner = [...this.state.beginner]
        const findIndex = this.state.beginner.findIndex(beginner => beginner === resJson)
        copybeginner[findIndex].completed = resJson.completed
        this.setState({beginner: copybeginner})
    })
  }



  addUser = (newUser) => {
    const copyUser = [...this.state.users];
    copyUser.push(newUser);
    this.setState({
      users: copyUser,
    });
  };

  toggleGoalWasMet = (data) => {
    console.log(data)
    fetch(baseURL + '/training/' + data._id, {
      method: 'PUT',
      body: JSON.stringify({goalWasMet: !data.goalWasMet}),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
         const copyTrainingDays = [...this.state.trainingDay]
          const findIndex = this.state.trainingDay.findIndex(data => data._id === resJson._id)
          copyTrainingDays[findIndex].goalWasMet = resJson.goalWasMet
          this.setState({trainingDay: copyTrainingDays})
    })
  }
  
   //////////////////////////////////////////////////////////////////////////////////

  // editTrainingDay = (data) => {
  //   console.log(data)
  //   console.log(data._id)
  //   fetch(baseURL + '/training/' + data._id, {
  //     method: 'PUT',
  //     body: JSON.stringify(data
  //     ),
  //     headers: {
  //       'Content-Type' : 'application/json'
  //     }
  //   }).then(res => res.json())
    // .then(resJson => {
    //      const copyTrainingDay = [...this.state.trainingDay]
    //      console.log(this.state.trainingDay)
    //       const findIndex = this.state.trainingDay.findIndex(trainingDay => trainingDay._id === resJson._id)
    //       console.log(findIndex)
    //       copyTrainingDay[findIndex].title = resJson.title
    //       this.setState({trainingDay: copyTrainingDay})
    // })
  // }
  handleLogin = (event, username) => {
    event.preventDefault();
    fetch(baseURL + "/sessions/", {
      method: "PUT",
      body: JSON.stringify({
        username: username,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("data first: ", data);
        this.setState({
          currentUser: data,
        });
      });
  };

  handleLogout = (currentUser) => {
    console.log("in logOut()");
    console.log(currentUser._id);
    fetch(baseURL + "/sessions/" + currentUser._id, {
      method: "PUT",
      body: JSON.stringify({
        // isLoggedIn: !currentUser.isLoggedIn,
        currentUser: currentUser,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("logout data: ", data);
        this.setState({
          currentUser: data,
        });
      })
      .catch((error) => console.error({ Error: error }));
  };

  //       const copyUsers = [...this.state.users];
  //       const findIndex = this.state.users.findIndex(
  //         (currentUser) => currentUser._id === data._id
  //       );
  //       copyUsers[findIndex].isLoggedIn = data.isLoggedIn;
  //       this.setState({ users: copyUsers });
  //     });
  // };

  checkOffDay = (day) => {
    this.setState({ completedDays: [day, ...this.state.completedDays] });
  };

  componentDidMount = () => {
    this.getTrainingDay();
  };

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {/* HOME PAGE */}
          <Route exact path="/"
          render={() => (
          <History
          toggleGoalWasMet={this.toggleGoalWasMet}
          editTrainingDay={this.editTrainingDay}
          users={this.state.users}
          trainingDay={this.state.trainingDay}
          currentUser={this.state.currentUser}
          deleteTrainingDay={this.deleteTrainingDay}
        /> )}
        />

          {/* TRAINING CALENDAR */}
          <Route
            exact
            path="/calendar"
            render={() => (
              <WeekCalendarBeginner beginner={this.state.beginner} />
            )}
          />
          {/* ABOUT PAGE */}
          <Route
            exact
            path="/about"
            render={() => <About message={this.state.message} />}
          />
          {/* SIGN UP PAGE */}
          <Route
            exact
            path="/signup"
            render={() => (
              <NewUserForm
                baseURL={baseURL}
                addUser={this.addUser}
                users={this.state.users}
                parentCallback={this.callbackFunction}
                currentUser={this.state.currentUser}
              />
            )}
          />
          
          
          
          {/* INPUT WORKOUT PAGE */}
          <Route exact path='/recordworkout' render={() => <TodaysWorkout baseURL={ baseURL } addTrainingDay={ this.addTrainingDay} editTrainingDay={this.editTrainingDay} currentUser={this.state.currentUser} /> } />
        
          {/* EDIT WORKOUT PAGE */}
          <Route exact path='/edit' baseURL={ baseURL } component={ EditDataForm } render={() => <EditDataForm editTrainingDay={this.editTrainingDay} users={this.state.users} currentUser={this.state.currentUser} handleChange={this.handleChange} /> } />
                                  
          {/* LOGIN PAGE */}
          <Route
            exact
            path="/login"
            render={() => (
              <LogInForm
                baseURL={baseURL}
                handleChange={this.handleChange}
                users={this.state.users}
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
              />
            )}
          />

          {/* ERROR PAGE */}
          <Route component={Error} />
        </Switch>
        
        
      </div>
    )
  }
}

export default App;
