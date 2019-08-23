import React from 'react';
import { withRouter } from 'react-router-dom';
import './createaccount.css';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'firstName': '',
            'lastName': '',
            'emailId': '',
            'mobileNum': '',
            'profilepic': '',
            'userId': '',
            'mandatory': {
                'firstName': {
                    'name': 'First Name',
                    'required': true
                },
                'lastName': {
                    'name': 'Last Name',
                    'required': true
                },
                'emailId': {
                    'name': 'Email ID',
                    'required': true
                },
                'mobileNum': {
                    'name': 'Mobile Number',
                    'required': true
                },
                'profilepic': {
                    'name': 'Profile Picture',
                    'required': true
                },
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleLoadImage = this.handleLoadImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleLoadImage(event) {
        //const fileReader = new FileReader();
        const imageUrl = window.URL.createObjectURL(event.target.files[0])
        this.setState({ [event.target.name]: imageUrl });
    }

    async handleSubmit(event) {
        event.preventDefault();
        if (this.handleValidation() === false) {
            return;
        }
        const userId = `${this.state.firstName.toLowerCase()}_${new Date().getTime()}`;
        await this.setState({ 'userId': userId });
        this.props.addUser(this.state);
        this.props.setInitMailCount(this.state);
        alert('User Added successfully');
        this.props.history.push(`/mailApp/inbox/${userId}`);
    }

    handleValidation() {
        let validatePass = true;
        let mandArr = Object.keys(this.state.mandatory);
        for (let i = 0; i < mandArr.length; i++) {
            let el = mandArr[i];
            if (this.state.mandatory[el].required && this.state[el] === '') {
                document.querySelector(`input[name='${el}']`).focus()
                alert(`${this.state.mandatory[el].name} is mandatory`);
                validatePass = false;
                break;
            }
        }
        return validatePass;
    }

    render() {
        return (
            <div className='create-acc-containter'>
                <div className='create-acc-content'>
                    <form id="addUserForm" className='create-acc-form' onSubmit={this.handleSubmit}>
                        <div className='form-input'>
                            <label htmlFor={this.state.firstName}>First Name*</label>
                            <input type="text" value={this.state.firstName} name='firstName' onChange={this.handleInputChange} placeholder='Doodleblue' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor={this.state.lastName}>Last Name*</label>
                            <input type="text" value={this.state.lastName} name='lastName' onChange={this.handleInputChange} placeholder='Innovations' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor={this.state.emailId}>Email ID*</label>
                            <input type="email" value={this.state.emailId} name='emailId' onChange={this.handleInputChange} placeholder='doodleblue@example.com' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor={this.state.mobileNum}>Mobile No*</label>
                            <input type="number" value={this.state.mobileNum} name='mobileNum' onChange={this.handleInputChange} placeholder='00000 00000' />
                        </div>
                        <div className='form-input'>
                            <label htmlFor='profilepic'>Profile Image</label>
                            <input type="file" name='profilepic' onChange={this.handleLoadImage} placeholder='Choose file' />
                        </div>
                    </form>
                    <button id="addUser" onClick={this.handleSubmit}>Add</button>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateAccount);