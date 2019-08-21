import React from 'react';
import { withRouter } from 'react-router-dom';
import doodlebluelogo from '../../images/doodlebluelogo.png';
import profilepic from '../../images/profilepic.jpg';
import './header.css';

function Header({ history }) {
    return (
        <header>
            <div className='logo'>
                <img src={doodlebluelogo} alt='doodleblue' />
            </div>
            <div className='userDetails'>
                <button id="createAccBtn" onClick={() => history.push('/createAccount')}>Create Account</button>
                <span id="userName">Ajay</span>
                <img src={profilepic} alt="profilepic" />
            </div>
        </header>
    );
}

export default withRouter(Header);