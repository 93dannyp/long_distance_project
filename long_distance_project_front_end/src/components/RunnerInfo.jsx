import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export default class RunnerInfo extends Component {

    render() {
        return (
            <form>
                <div>
                <Dropdown>Skill Level
                    <Dropdown.Toggle variant="success" id="skill-level">Level</Dropdown.Toggle>

                        <Dropdown.Menu>
                        <Dropdown.Item href="#">Beginner</Dropdown.Item>
                        <Dropdown.Item href="#">Elite</Dropdown.Item>
                        <Dropdown.Item href="#">Intermediate</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </div>
                <div>Race Distance</div>
                <div>
                    <label htmlFor="date">Race Date<input type="date" id="date" /></label>
                    <div>
                    </div>
                </div>

            </form>
        )
    }
}

