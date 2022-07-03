//COUNTER ACTIONS
export const increment = () => {
    return {
        type: 'INCREMENTA',
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENTA',
    }
}

//LOGIN ACTIONS
export const isOnline = () => {
    return {
        type: 'ONLINE',
    }
}

export const isOffline = () => {
    return {
        type: 'OFFLINE',
    }
}