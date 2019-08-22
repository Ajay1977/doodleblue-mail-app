import React, { useState } from 'react';
import MailList from './mail-list/MailList';
import SideNav from './side-nav/SideNav';
import ComposeMail from './compose-mail/ComposeMail';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './header/Header';
import { useSelector } from 'react-redux';

export default function MailDetails({ match }) {
    const styles = {
        width: '100%',
        height: '90vh',
        overflow: 'hidden',
        display: 'inline-flex',
    }

    const userObj = useSelector(state => state.accReducer[match.params.userId]);
    const inboxMail = useSelector(state => state.mailReducer[userObj.userId].inboxmail);
    const sentMail = useSelector(state => state.mailReducer[userObj.userId].sentmail);
    const inboxCount = useSelector(state => state.mailReducer[userObj.userId].inboxcount);
    const sentMailCount = useSelector(state => state.mailReducer[userObj.userId].sentcount);

    const [newMailFlag, setNewMailFlag] = useState(false);
    const handleMailFlagChange = () => {
        setNewMailFlag(!newMailFlag);
    }

    return (
        <div className='mail-dets-content'>
            <Header user={userObj} />
            <div className='mail-details' style={styles}>
                <SideNav user={userObj} composeMail={handleMailFlagChange} inbox={inboxCount} sent={sentMailCount} />
                <Route exact path={'/mailApp/sent/:userId'} component={() => <MailList user={userObj} mails={sentMail} />} />
                <Route exact path={'/mailApp/:userId'} component={() => <MailList user={userObj} mails={inboxMail} />} />
                {newMailFlag ? <ComposeMail user={userObj} composeMail={handleMailFlagChange} /> : ''}
            </div>
        </div>
    );
}