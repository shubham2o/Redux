import { createStore } from "redux";

console.log(`<----- script.js ----->`);

const postCountElement = document.querySelector('.postCount');
const btnElement = document.querySelector('.btn');

// Initial State or Initial Data
const initialState = {
    post: 357,
    name: "KD",
}

// State or Data
let reduxState = {
    post: 0,
    name: "Shubham Sharma",
}

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";
const INCREASE_BY = "post/increaseBy";
const DECREASE_BY = "post/decreaseBy";

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + 1 }
        case DECREMENT:
            return { ...state, post: state.post - 1 }
        case INCREASE_BY:
            return { ...state, post: state.post + action.payload }
        default:
            return state;
    }
}

// What Redux will do is (REDUX BEHIND THE SCENES) -
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: 'post/increment' });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: 'post/decrement' });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: 'post/incrementByAmount', payload: 30 });
// console.log(reduxState);

// reduxState = reducer(reduxState, { type: 'post/decrementByAmount', payload: 15 });
// console.log(reduxState);

// Store
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

// getState()
console.log(store.getState());

// subscribe()
store.subscribe(() => {
    console.log(store.getState());
    postCountElement.innerHTML = store.getState().post;
});

// disptach()
store.dispatch({ type: INCREASE_BY, payload: 3 });
store.dispatch({ type: INCREMENT });
store.dispatch({ type: DECREASE_BY, payload: 3 });
store.dispatch({ type: DECREMENT });

setTimeout(() => {
    store.dispatch({ type: INCREASE_BY, payload: 100 });
}, 2000);

btnElement.addEventListener('click', () => {
    store.dispatch({ type: INCREASE_BY, payload: 10 })
});