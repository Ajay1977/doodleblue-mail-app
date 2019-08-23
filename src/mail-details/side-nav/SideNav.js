import React from 'react';
import './sidenav.css';
import { withRouter } from 'react-router-dom';

function SideNav(props) {
    const { inbox, sent, history, user } = props;
    return (
        <div className='side-nav-bar'>
            <button id='composeMailBtn' onClick={() => props.composeMail()}>Compose</button>
            <ul>
                <li className="side-nav-list active" onClick={() => history.push(`/mailApp/inbox/${user.userId}`)}>
                    Inbox
                    <span className='unread-mail' id='unreadMailInbox'>{inbox}</span>
                </li>
                <li className="side-nav-list" onClick={() => history.push(`/mailApp/sent/${user.userId}`)}>
                    Sent
                    <span className='unread-mail' id='unreadMailSent'>{sent}</span>
                </li>
            </ul>
        </div>
    );
}

export default withRouter(SideNav);