
let variable = "Hi";

const promise = new Promise((resolve,reject)=>{
    if(variable)
        resolve("Resolved");
    else
        reject("Rejected");
});

promise.then((message)=>console.log(message)).catch((error)=>console.log(error));

// Promis.all
const programOne = new Promise((resolve,reject)=>{
    resolve("Program One");
}); 

const programTwo = new Promise((resolve,reject)=>{
    resolve("Program Two");
}); 

const programThree = new Promise((resolve,reject)=>{
    resolve("Program Three");
}); 

// all the promises are executing asynchronously and which ever promise will complete first that will go to the first order in the result(then).
// all the responses are receiving as Arrays.
Promise.all([
    programOne,
    programTwo,
    programThree
]).then((messages)=>messages.map(message => console.log(message)))
.catch((errors)=>errors.map(error => console.log(error)));

// If we want to get the fastest response amongst the promises then we can use Promis.race
Promise.race([
    programOne,
    programTwo,
    programThree
]).then((message)=>console.log(message));