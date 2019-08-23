import React from 'react';
import './sidenav.css';
import { withRouter } from 'react-router-dom';

function SideNav(props) {
    const { inbox, sent, history, user, location } = props;

    console.log(location.pathname);

    return (
        <div className='side-nav-bar'>
            <button id='composeMailBtn' onClick={() => props.composeMail()}>Compose</button>
            <ul>
                <li className={location.pathname.indexOf('/inbox/') > 0 ? 'active' : ''} onClick={() => history.push(`${process.env.PUBLIC_URL}/mailApp/inbox/${user.userId}`)}>
                    Inbox
                    <span className='unread-mail' id='unreadMailInbox'>{inbox}</span>
                </li>
                <li className={location.pathname.indexOf('/sent/') > 0 ? 'active' : ''} onClick={() => history.push(`${process.env.PUBLIC_URL}/mailApp/sent/${user.userId}`)}>
                    Sent
                    <span className='unread-mail' id='unreadMailSent'>{sent}</span>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(SideNav);