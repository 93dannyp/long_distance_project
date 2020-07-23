import React, {Component} from 'react'

class Day extends Component {
    state = {
        complete: false,
    }

    toggleComplete = () => {
        this.setState ({
            complete: !this.state.complete,
        })
    }

    render () {
        return (
            <div onClick={() => this.toggleComplete()}>
                {this.props.weekDays[index].day}
            </div>
        )
    }
}