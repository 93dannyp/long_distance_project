import React, { Component } from 'react'

export default class History extends Component {


    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {
                        this.props.trainingDay.map(trainingDay => {
                            return (
                                <tr key={ trainingDay._id }>
                                <td>Title: { trainingDay.title }</td>
                                <td>Distance: { trainingDay.distance }</td>
                                <td>Time:  { trainingDay.time }</td>
                                <td>Week: { trainingDay.week }</td>
                                <td>Week: { trainingDay.day }</td>
                                <button onClick={()=>this.props.deleteTrainingDay(trainingDay._id)}>Delete</button>
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
