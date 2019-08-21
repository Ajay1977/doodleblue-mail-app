import React from 'react';

export default class CreateAccount extends React.Component {
    constructor() {
        super();
        this.state = {
            'firstName': '',
            'lastName': '',
            'emailId': '',
            'mobileNum': '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        console.log('changed1');
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='createAccForm'>
                <h3> This is the Account Create Section</h3>
                <form>
                    <input type="text" value={this.state.firstName} name='firstName' onChange={this.handleInputChange} placeholder='Doodleblue' />
                    <input type="text" value={this.state.lastName} name='lastName' onChange={this.handleInputChange} placeholder='Innovations' />
                    <input type="email" value={this.state.emailId} name='emailId' onChange={this.handleInputChange} placeholder='doodleblue@example.com' />
                    <input type="number" value={this.state.mobileNum} name='mobileNum' onChange={this.handleInputChange} placeholder='00000 00000' />
                </form>
            </div>
        );
    }
}