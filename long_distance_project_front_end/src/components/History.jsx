import React, { Component } from 'react'

export default class History extends Component {
    

returnCurrentUser = () => {

    this.props.currentUser.trainingHistory.map(trainingDay => {
        console.log(trainingDay.title)
    }) 
    // console.log(this.props.currentUser.trainingHistory.map(trainingDay => {
    //     return trainingDay.title
    // })) 
    // return Object.entries(this.props.currentUser);

}

    render() {
        return (
            <div>
                <table>
                    <tbody>

                        { this.returnCurrentUser() }
                  

                        {
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
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
