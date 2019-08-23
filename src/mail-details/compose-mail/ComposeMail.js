import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendMail } from './../../actions';
import './composemail.css';

export default function ComposeMail(props) {
    const { userId } = props.user;
    const userList = useSelector(state => state.accReducer);
    const dispatch = useDispatch();
    const [userMailIdList, setUserMailIdList] = useState([]);
    const [selectUserIdList, setSelectUserIdList] = useState([]);

    const handleRecipientChange = (event) => {
        let tempVal = event.target.value;
        if (tempVal.length >= 3) {
            let filterUserId = Object.keys(userList).filter(el => {
                return selectUserIdList.includes(el) === false && userId !== el && userList[el] && userList[el].firstName.toLowerCase().startsWith(tempVal.toLowerCase());
            });
            if (filterUserId.length > 0) {
                setUserMailIdList([...filterUserId]);
                document.querySelector('.user-mail-list').classList.add('active');
            }
        } else {
            document.querySelector('.user-mail-list').classList.remove('active');
        }
    }

    const handleUserSelect = (event) => {
        document.querySelector('.user-mail-list').classList.remove('active');
        let selectUserId = event.target.getAttribute('data-key');
        if (!event.target.classList.contains('user-mail-details')) {
            selectUserId = event.target.parentElement.getAttribute('data-key');
        }
        setSelectUserIdList([...selectUserIdList, selectUserId]);
        setUserMailIdList([]);
        event.target.value = '';
    }

    const handleSendMail = () => {
        let currDate = new Date()
        let mailObj = {
            senderId: userId,
            recipientsId: selectUserIdList,
            mailSubject: document.getElementById('subjectInp').value,
            mailBody: document.getElementById('messageInp').value,
            mailTime: `${currDate.getMonth() + 1}/${currDate.getDate()}/${currDate.getFullYear()} ${currDate.getHours()}:${currDate.getMinutes()}`
        }
        dispatch(sendMail(mailObj));
        alert('Mail sent!!!');
        props.composeMail(false);
    }

    const deleteRecipientId = (event) => {
        let recipientElem = event.target.parentElement;
        let recipientId = recipientElem.getAttribute('data-key');
        let updateSelectUserList = selectUserIdList.filter(el => {
            return el !== recipientId;
        });
        setSelectUserIdList([updateSelectUserList]);
        // recipientElem.remove();
    }

    return (
        <div className='compose-mail'>
            <div className='header'>
                New Message
                <button id="closeComposeMail" onClick={() => props.composeMail()}>X</button>
            </div>
            <div className='container recipient-container'>
                <div className='recipientList'>
                    {
                        selectUserIdList.map(el => {
                            return (
                                <span className='recipient' key={el} data-key={el} >
                                    {userList[el] && userList[el].firstName}
                                    <span className='recipient-del' onClick={deleteRecipientId}>X</span>
                                </span>
                            )
                        })
                    }
                </div>
                <input id="recipientInp" name='recipients' placeholder='Recipients (Type username here)' onChange={handleRecipientChange} />
            </div>
            <div className='container subject-container'>
                <input id="subjectInp" type='text' name='subject' placeholder='Subject' />
            </div>
            <div className='container message-container'>
                <textarea id="messageInp" name='message' placeholder='Type Something here..' />
            </div>
            <div className='container footer'>
                <button id="sendMailBtn" onClick={handleSendMail}>Send</button>
            </div>
            <div className='user-mail-list'>
                {
                    userMailIdList.map(el => {
                        return (
                            <div className='user-mail-details' key={el} data-key={el} onClick={handleUserSelect}>
                                <div className='user-mail-name'>{userList[el].firstName}</div>
                                <div className='user-mail-id'>{userList[el].emailId}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}