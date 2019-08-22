import React, { useState } from 'react';
import './maillist.css';

export default function MailList(props) {
    const { mails } = props;
    // const [mailList, setMailList] = useState([]);

    // setMailList(mails);
    const styles = {
        textAlign: 'center',
        paddingTop: '30px',
        fontSize: '25px'
    }

    if (mails.length == 0) {
        return (
            <div className='mail-dets-list-content' style={styles}>
                No mail is present in the box!!!
            </div>
        )
    }

    return (
        <div className='mail-dets-list-content'>
            {
                mails.map(el => {
                    let classList = 'mail-dets-list';
                    if (!el.readFlag) {
                        classList += ' unread-mail-body';
                    }
                    return (
                        <div className={classList} key={el.mailTime}>
                            <div className='mail-subject'>{el.mailSubject}</div>
                            <div className='mail-body'>{el.mailBody}</div>
                            <div className='mail-time'>{el.mailTime}</div>
                        </div>
                    )
                })
            }
        </div>
    );
}