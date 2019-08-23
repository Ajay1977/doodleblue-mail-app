import React from 'react';
import './dashboard.css';
import {Tween} from 'react-gsap';
import {withRouter} from 'react-router-dom';
import brandlogo from './images/doodlebluelogo.png';

function Dashboard(props) {
    const {history} = props;
    return (
        <div class='dashboard'> 
            <div className='logo-container'>
                <Tween from={{ x: '0px', y: '100px', opacity: 0 }} to={{ x: '0px', y: '0px', opacity: 1 }} duration={0.7}>
                    <img src={brandlogo} id="brandlogo" alt="brandlogo"  />               
                </Tween>
                <Tween from={{ y: '50px', opacity: 0 }} to={{ y: 0, opacity: 1 }} duration={0.5} delay={0.2}>
                    <button onClick={() => history.push('/createAccount')}>Create Account</button>              
                </Tween>
            </div>
        </div>
    );
}

export default withRouter(Dashboard);