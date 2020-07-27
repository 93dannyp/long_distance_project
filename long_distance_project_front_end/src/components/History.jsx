import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditDataForm from './EditDataForm.jsx'

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
                        {/* {               */}
                        {/* //CHANGED THE HISTORY COMPONENT PASS DOWN IN APP.JS
                        //  this.props.currentUser
                        // this.props.currentUser[0].map(trainingDay => { */}
                            {/* // return ( */}
                                {/* <tr> */}
                                {/* <tr key={ trainingDay._id }> */}
                                {/* <td>Title: <span> { this.props.currentUser.trainingHistory.title } </span> </td>
                                <td>Distance: { this.props.currentUser.trainingHistory.distance }</td>
                                <td>Time:  { this.props.currentUser.trainingHistory.time }</td>
                                <td>Week: { this.props.currentUser.trainingHistory.week }</td>
                                <td>Day: { this.props.currentUser.trainingHistory.day }</td>
                                </tr> */}
                                {/* // )
                            // }
                            // ) */}
                        {/* } */}

                        {
                        this.props.trainingDay.map(trainingDay => {
                            return (
                                <tr key={ trainingDay._id }>
                                <td className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Title: { trainingDay.title }</td>
                                <td className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Distance: { trainingDay.distance }</td>
                                <td className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Time:  { trainingDay.time }</td>
                                <td className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Week: { trainingDay.week }</td>
                                <td className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Week: { trainingDay.day }</td>
                                <td>
                                    <a key={trainingDay._id} onClick={() => this.props.toggleGoalWasMet(trainingDay)} className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Goal Met?</a>
                                </td>
                                <td>
                                <button onClick={()=>this.props.deleteTrainingDay(trainingDay._id)}>DELETE</button>
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

