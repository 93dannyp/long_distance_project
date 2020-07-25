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
                                <td>Title: { trainingDay.title }</td>
                                <td>Distance: { trainingDay.distance }</td>
                                <td>Time:  { trainingDay.time }</td>
                                <td>Week: { trainingDay.week }</td>
                                <td>Week: { trainingDay.day }</td>
                                <td>
                                    <Link className='nav-link' to='/edit' key={trainingDay._id}>EDIT</Link>
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

