const mailReducer = (state = {}, action) => {
    switch (action.type) {
        case 'INITIALMAILCOUNT':
            const defaultObj = {
                'inboxcount': 0,
                'sentcount': 0,
                'inboxmail': [],
                'sentmail': [],
            }
            let defaultMailObj = {};
            defaultMailObj[action.payload.userId] = defaultObj;
            state = Object.assign({}, state, defaultMailObj);
            return state;
        case 'SENDMAIL':
            const initialMailObj = {
                'inboxcount': 0,
                'sentcount': 0,
                'inboxmail': [],
                'sentmail': [],
            }
            const readFlag = false;
            let newMailObj = {};
            let { senderId, recipientsId, mailSubject, mailBody, mailTime } = action.payload;
            let senderObj = state[senderId] === undefined ? initialMailObj : state[senderId];
            senderObj.sentcount += 1;
            senderObj.sentmail = [...senderObj.sentmail, {
                mailSubject, mailBody, mailTime, readFlag
            }];
            newMailObj[senderId] = senderObj;
            recipientsId.map(el => {
                let receiverObj = state[el] === undefined ? initialMailObj : state[el];
                receiverObj.inboxcount += 1;
                receiverObj.inboxmail = [...receiverObj.inboxmail, {
                    mailSubject, mailBody, mailTime, readFlag
                }];
                newMailObj[el] = receiverObj;
            });
            state = Object.assign({}, state, newMailObj);
            return state;
        default:
            return state;
    }
}

export default mailReducer;