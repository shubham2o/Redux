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

let state = {
    count: 0,
}

let prevState = state;

console.log("state", state.count);
console.log("prevState", prevState.count);

const increment = () => {
    // state.count += 1;
    //*** Mutating State ***// 
    // It will change the original state object as well, which is not the ideal case. 
    // This happens because it creates a reference (pointing) to the original state object 
    // in the memory, which means both the objects are pointing to the same state object or 
    // has the same state object's value.

    state = { count: state.count + 1 }
    //*** Not Mutating State ***//
    // It will not change the original state object, as it will create a new copy of the 
    // state object in the memory. It will store a copy of the original state object's value 
    // in the new object.
}

console.log("state", state.count);
console.log("prevState", prevState.count);
increment();
console.log("state", state.count);
console.log("prevState", prevState.count);
increment();
console.log("state", state.count);
console.log("prevState", prevState.count);
increment();
console.log("state", state.count);
console.log("prevState", prevState.count);