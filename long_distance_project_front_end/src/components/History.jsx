import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EdipataForm from './EditDataForm.jsx'

export default class History extends Component {
    // state = {
    //     trainingHistory: this.props.currentUser.trainingHistory,
    // }
    
    

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
                <section>
                    <div className='jumbotron text-center'>
                    <div className='container'>
                        <h3>Welcome to the Long Distance Project</h3>
                            </div>
                        <img src="https://images.unsplash.com/photo-1485388276992-0ce5ce2d6981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1999&q=80" width="800" height="400"></img>
                        
                    </div><br/>
                </section>
                <div className='container'>
                    <div className='row'>

                        {this.props.trainingDay.map(trainingDay => {

                            return (
                                <div key={ trainingDay._id } className='col-md-4' >
                                    <div className='card mb-4 shadow-sm' >
                                        <div className='card-body'>
                                            <div  className='card-text'>
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

