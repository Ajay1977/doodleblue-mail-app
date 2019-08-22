export const addUser = (user) => {
    return {
        type: 'CREATEACCOUNT',
        payload: user
    }
}

export const sendMail = (mailObj) => {
    return {
        type: 'SENDMAIL',
        payload: mailObj
    }
}

export const setInitMailCount = (user) => {
    return {
        type: 'INITIALMAILCOUNT',
        payload: user
    }
}