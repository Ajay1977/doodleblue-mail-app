import React from 'react';
import MailList from './mail-list/MailList';
import SideNav from './side-nav/SideNav';
import Header from './header/Header';
import Container from 'bootstrap'

export default function MailDetails() {
    const styles = {
        width: '100%',
        height: '90vh',
        overflow: 'hidden'
    }

    return (
        <div className='mail-dets-content'>
            <Header />
            <Container className='mail-details container-fluid' style={styles} fluid={true}>
                <SideNav />
                <MailList />
            </Container>
        </div>
    );
}