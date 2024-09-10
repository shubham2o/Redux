import { createStore } from "redux";

/* -----------------------
--------- CASE 1 ---------
------------------------ */

// const person = {
//     name: "Shubham",
//     age: 24,
//     gender: "male",
//     address: {
//         city: "Delhi",
//         street: 21,
//         country: "India",
//     },
//     hobbies: ["Basketball", "Coding", "Movies"],
// };

// -------------------- SHALLOW COPY --------------------
// const copyPerson = {};
// const ans = Object.assign(copyPerson, person);
// console.log('ans', ans);
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// copyPerson.name = "Aman";
// console.log('ans', ans);
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// person.age = 30;
// console.log('ans', ans);
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// -------------------- IMPORTANT --------------------
// copyPerson.address.city = "Bangalore";
// console.log('ans', ans.address.city);
// console.log('copyPerson', copyPerson.address.city);
// console.log('person', person.address.city);

// -------------------- IMPORTANT --------------------
// person.hobbies[0] = "Music";
// console.log('ans', ans.hobbies[0]);
// console.log('copyPerson', copyPerson.hobbies[0]);
// console.log('person', person.hobbies[0]);

// -------------------- DEEP COPY --------------------
// const copyPerson = JSON.parse(JSON.stringify(person));
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// copyPerson.name = "Aman";
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// person.age = 30;
// console.log('copyPerson', copyPerson);
// console.log('person', person);

// copyPerson.address.city = "Bangalore";
// console.log('copyPerson', copyPerson.address.city);
// console.log('person', person.address.city);

// person.hobbies[0] = "Music";
// console.log('copyPerson', copyPerson.hobbies[0]);
// console.log('person', person.hobbies[0]);

/* -----------------------
--------- CASE 2 ---------
------------------------ */

// let state = {
//     count: 0,
// }

// let prevState = state;

// console.log("state", state.count);
// console.log("prevState", prevState.count);

// const increment = () => {
//     // state.count += 1;
//     /* Mutating State -
//     It will change the original state object as well, which is not the ideal case.
//     This happens because it creates a reference (pointing) to the original state object
//     in the memory, which means both the objects are pointing to the same state object or
//     has the same state object's value. */

//     state = { ...state, count: state.count + 1 };
//     /* Not Mutating State -
//     It will not change the original state object, as it will create a new copy of the
//     state object in the memory. It will store a copy of the original state object's value
//     in the new object. */
// }

// console.log("state", state.count);
// console.log("prevState", prevState.count);
// increment();
// console.log("state", state.count);
// console.log("prevState", prevState.count);
// increment();
// console.log("state", state.count);
// console.log("prevState", prevState.count);
// increment();
// console.log("state", state.count);
// console.log("prevState", prevState.count);

/* -----------------------
--------- CASE 3 ---------
------------------------ */

const initialState = {
    post: 0,
    name: "Shubham Sharma",
    age: 24,
}

const INCREMENT = "post/increment";
const DECREMENT = "post/decrement";

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, post: state.post + action.payload }
        case DECREMENT:
            return { ...state, post: state.post - action.payload }
        default:
            return state;
    }
}

// -------------------- BUILT SMALL CUSTOM REDUX --------------------
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: INCREMENT, payload: 100 });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: "DEFAULT_STATE" });
// console.log(reduxState);
// reduxState = reducer(reduxState, { type: DECREMENT, payload: 10 });
// console.log(reduxState);

// -------------------- HOW TO CREATE A STORE IN REDUX? --------------------
const store = createStore(reducer);
console.log(store);

// -------------------- HOW TO ACCESS A STATE IN REDUX? --------------------
console.log(store.getState());

// -------------------- HOW TO TRACK STATE CHANGES (DISPATCH ACTIONS) IN REDUX? --------------------
store.subscribe(() => {
    console.log(store.getState());
});

// -------------------- HOW TO CALL A REDUCER IN REDUX? --------------------
store.dispatch({ type: INCREMENT, payload: 100 });
store.dispatch({ type: "EXECUTE_DEFAULT_VALUE_IGNORE_PAYLOAD", payload: 1000 });
store.dispatch({ type: DECREMENT, payload: 10 });