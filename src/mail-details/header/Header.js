import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import doodlebluelogo from '../../images/doodlebluelogo.png';
import { useSelector } from 'react-redux';
import './header.css';

function Header(props) {
    const { history } = props;
    const { userId, firstName, profilepic } = props.user;
    const userList = useSelector(state => state.accReducer);
    //console.log(userList);
    useEffect(() => {
        const currUserElem = document.querySelector('#currUser');
        const userListElem = document.querySelector('#userList');
        currUserElem.addEventListener('mouseover', () => {
            document.getElementById('userList').classList.add('active');
        });
        currUserElem.addEventListener('mouseout', () => {
            document.getElementById('userList').classList.remove('active');
        });
        userListElem.addEventListener('mouseover', () => {
            document.getElementById('userList').classList.add('active');
        });
        userListElem.addEventListener('mouseout', () => {
            document.getElementById('userList').classList.remove('active');
        });
    }, []);

    const handleUserChange = (event) => {
        let selectedUserId = event.target.getAttribute('data-key');
        if (event.target.tagName === 'DIV') {
            selectedUserId = event.target.parentElement.getAttribute('data-key');
        }
        if (event.target.tagName === 'SPAN') {
            selectedUserId = event.target.parentElement.parentElement.getAttribute('data-key');
        }
        props.composeMail(false); ajay
        history.push(`/mailApp/inbox/${selectedUserId}`);
    }

    return (
        <header>
            <div className='logo'>
                <img src={doodlebluelogo} alt='doodleblue' onClick={() => history.push('/')} />
            </div>
            <div className='userDetails'>
                <button id="createAccBtn" onClick={() => history.push('/createAccount')}>Create Account</button>
                <div id='currUser'>
                    <span key={userId} className="userName">{firstName}</span>
                    <img src={profilepic} alt="profilepic" className="userPic" />
                </div>
                <ul id="userList">
                    {
                        Object.keys(userList).map(el => {
                            if (userList[el].userId !== userId) {
                                return (
                                    <li key={userList[el].userId} data-key={userList[el].userId} onClick={handleUserChange}>
                                        <div className='user-list-content'>
                                            <span className='userName'>{userList[el].firstName}</span>
                                        </div>
                                    </li>
                                );
                            }
                        })
                    }
                </ul>
            </div>
        </header>
    );
}

export default withRouter(Header);