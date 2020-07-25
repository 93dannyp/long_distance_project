import React from "react";
import beginner from "./data/beginner.js";
import WeekCalendarBeginner from "./components/WeekCalendarBeginner.jsx";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import History from './components/History'
import TodaysWorkout from './components/TodaysWorkout.jsx';
import RunnerInfo from "./components/RunnerInfo.jsx";
import NewUserForm from "./components/NewUserForm.jsx";
import LogInForm from "./components/LogInForm.jsx";
import EditDataForm from './components/EditDataForm'

let baseURL = "http://localhost:3003";

class App extends React.Component {
  state = {
    beginner: beginner,
    completedDays: [],    
    message: 'Hello',
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
    console.log(newTrainingDay)
    const copyTrainingDay = [...this.state.trainingDay];
    copyTrainingDay.push(newTrainingDay);
    this.setState({
      trainingDay: copyTrainingDay,
    });
  }

  
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

  addUser = (newUser) => {
    const copyUser = [...this.state.users];
    copyUser.push(newUser);
    this.setState({
      users: copyUser,
    });
  };

  editTrainingDay = (data) => {
    console.log(data)
    console.log(data._id)
    fetch(baseURL + '/training/' + data._id, {
      method: 'PUT',
      body: JSON.stringify(data
      ),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
         const copyTrainingDay = [...this.state.trainingDay]
         console.log(this.state.trainingDay)
          const findIndex = this.state.trainingDay.findIndex(trainingDay => trainingDay._id === resJson._id)
          console.log(findIndex)
          copyTrainingDay[findIndex].title = resJson.title
          this.setState({trainingDay: copyTrainingDay})
    })
  }

  checkOffDay = (day) => {
    this.setState({ completedDays: [day, ...this.state.completedDays] });
  };

  componentDidMount = () => {
    this.getTrainingDay();
}


  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          {/* HOME PAGE */}
          <Route exact path='/' component={Home}/>
          {/* TRAINING CALENDAR */}
          <Route exact path='/calendar' render={() => <WeekCalendarBeginner beginner={this.state.beginner} /> } />
          {/* ABOUT PAGE */}
          <Route exact path='/about' render={() => <About message={this.state.message} />} />
          {/* SIGN UP PAGE */}
          <Route exact path='/signup' render={() => <NewUserForm baseURL={baseURL} addUser={this.addUser} users={this.state.users}
                parentCallback={this.callbackFunction}
                currentUser={this.state.currentUser}/> } />
          {/* LOGIN PAGE */}
          <Route exact path='/login' render={() => <LogInForm baseURL={baseURL} handleChange={this.handleChange} users={this.state.users}
          currentUser={this.state.currentUser} /> } />
          
          {/* INPUT WORKOUT PAGE */}
          <Route exact path='/recordworkout' render={() => <TodaysWorkout baseURL={ baseURL } addTrainingDay={ this.addTrainingDay} editTrainingDay={this.editTrainingDay} /> } />
        
          {/* EDIT WORKOUT PAGE */}
          <Route exact path='/edit' baseURL={ baseURL } component={ EditDataForm } render={() => <EditDataForm editTrainingDay={this.editTrainingDay} users={this.state.users} currentUser={this.state.currentUser} handleChange={this.handleChange} /> } />
                                  

          {/* ERROR PAGE */}
          <Route component={Error}/>
        </Switch>
        <h1>Welcome to the long distance project.</h1>
          
        
        <History editTrainingDay={this.editTrainingDay} deleteTrainingDay={this.deleteTrainingDay} trainingDay={ this.state.trainingDay } />
      </div>
    )
  }
}

export default App;
