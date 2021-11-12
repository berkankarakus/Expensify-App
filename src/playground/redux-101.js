import { createStore } from "redux";

// Action generators are functions that return action objects.
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: "INCREMENT",
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: "DECREMENT",
    decrementBy
});

const setCount = ({value = 42} = {}) => ({
    type: "SET",
    value
});

const resetCount = () => ({
    type: "RESET"
});

// Reducers
//  - Reducers are pure functions.
//  - Never change state or actions.

const countReducer = (state = {count: 0}, action) => {
    switch(action.type)
    {
        case "INCREMENT":
            const incrementBy = typeof action.incrementBy === "number" ? action.incrementBy : 1;
            return {count: state.count + incrementBy};

        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
            return {count: state.count - decrementBy};

        case "SET":
            return {count: action.value};

        case "RESET":
            return {count: 0};

        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// unsubscribe();

// Actions are an object that gets sent to the store.
store.dispatch(incrementCount({incrementBy: 10}));
store.dispatch(decrementCount());
store.dispatch(resetCount());
store.dispatch(setCount());