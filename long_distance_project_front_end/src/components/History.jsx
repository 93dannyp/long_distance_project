import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditDataForm from './EditDataForm.jsx'

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

