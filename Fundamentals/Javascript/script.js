//Rest Operator
const array = [1,2,3,4,5];
let [firstValue,secondValue,...remainingValues] = array;

console.log(firstValue,secondValue,remainingValues);

//Spread Operator
const newArray = [...array,6];

console.log(newArray);

const object = {
    uid:'0000000',
    name:'Kishore',
    age:21
}

const newObject = {...object,phone:'8940804555',age:22};
console.log(newObject);

//To get year from date datatype
const getYear = (date) => date.split(" ")[3];


console.log(getYear(new Date().toDateString()));

