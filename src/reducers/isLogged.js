const loggedReducer = (state = false, action) => {
    switch(action.type) {
        case 'ONLINE':
            return true;
        case 'OFFLINE':
            return false;
        default:
            return false;
    }
} 

export default loggedReducer;