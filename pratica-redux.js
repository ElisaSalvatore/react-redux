const redux = require('redux');
const createStore = redux.createStore;

//REDUCER
const initialState = {
    counter: 1
}

const aumentaDiUno = () => {
    return {
        type: "DIUNO"
    }
}

const aumentaDiTot = () => {
    return {
        type: "DITOT",
        value: 10,
    }
}

const reducer = (state = initialState, action) => {
    if (action.type === "DIUNO") {
        return {
            ...state,
            counter : state.counter + 1
        }
    };
    if (action.type === "DITOT") {
        return {
            ...state,
            counter : state.counter + action.value
        }
    };

    return state;
}

//STORE
const store = createStore(reducer);
console.log(store.getState());

//SUBSCRIPTION
store.subscribe(() => {
    console.log(`from subscription: `, store.getState());
});

//DISPATCH ACTION
// store.dispatch({type: "INCREMENTA"})
store.dispatch(aumentaDiUno());
console.log(store.getState());

