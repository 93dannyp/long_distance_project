import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EdipataForm from './EditDataForm.jsx'

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
            <div className='album py-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        
                            
                        {
                        this.props.trainingDay.map(trainingDay => {
                            return (
                                <div className='col-md-4' >
                                <div className='card mb-4 shadow-sm' >
                                    <div className='card-body'>
                                <div key={ trainingDay._id }>
                                    <div className='card-text'>
                                <p className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Title: { trainingDay.title }</p>
                                <p className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Distance: { trainingDay.distance }</p>
                                <p className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Time:  { trainingDay.time }</p>
                                <p className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Week: { trainingDay.week }</p>
                                <p className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Week: { trainingDay.day }</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                <p>
                                <a key={trainingDay._id} onClick={() => this.props.toggleGoalWasMet(trainingDay)} className={trainingDay.goalWasMet ? 'goalWasMet' : null}>Goal Met?</a>
                                </p>
                                <p>
                                <button onClick={()=>this.props.deleteTrainingDay(trainingDay._id)}>DELETE</button>
                                </p>
                                </div>
                                </div>
                                </div> 
                                </div>
                                </div>
                                </div>
                                )
                            })
                        }
                    
                
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

