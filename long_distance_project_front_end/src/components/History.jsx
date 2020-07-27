import React, { Component } from 'react'

export default class History extends Component {
    state = {
        trainingHistory: this.props.currentUser.trainingHistory,
    }
    

returnCurrentUser = () => {

    this.props.currentUser.trainingHistory.map(trainingDay => {
        console.log(trainingDay.title)
    }) 
    
    // return Object.entries(this.props.currentUser);

}

    render() {
        return (
            <div>
                <table>
                    <tbody> 
                                       
                        {Object.values(this.props.currentUser).map(trainingDay => {
                        return (                                 
                            <tr key={ trainingDay._id }> 
                                <td>Title: { trainingDay.title } </td>
                                <td>Distance: { trainingDay.distance }</td>
                                <td>Time:  { trainingDay.time }</td>
                                <td>Week: { trainingDay.week }</td>
                                <td>Day: { trainingDay.day }</td>
                                </tr> 
                        )})
                        }
                              

                        {/* {
                        this.props.trainingDay.map(trainingDay => {
                            return (
                                <tr key={ trainingDay._id }>
                                <td>Title: { trainingDay.title }</td>
                                <td>Distance: { trainingDay.distance }</td>
                                <td>Time:  { trainingDay.time }</td>
                                <td>Week: { trainingDay.week }</td>
                                <td>Week: { trainingDay.day }</td>
                                <td>
                                <button onClick={()=>this.props.deleteTrainingDay(trainingDay._id)}>Delete</button>
                                </td>
                                </tr>
                                
                                )
                            })
                        } */}

                    </tbody>
                </table>
            </div>
        )
    }
}
