import React from 'react';
import RunnerInfo from './components/RunnerInfo.jsx'


let baseURL = 'http://localhost:3003'


class App extends React.Component {
  state = {
    trainingDay: []
  }

  //this is supposed to retrieve the strava API info
  getTrainingDay = () => {
    fetch(baseURL + '/').then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      this.setState({
        trainingDay: data,
      })
    })
  }

componentDidMount = () => {
  this.getTrainingDay()
}

  render () {
    return (
      <div>
        <RunnerInfo />
      </div>
    )
  }
}


export default App;
