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

//Optional Chaining

const getTotal = () => object.age + object?.phone || 0;

console.log(getTotal());

// Immutable arrays
const book1 = {
    id:1,
    name: "Harry Potter",
    author: "J.K. Rowlings",
    ratings: 9.5,
    pages: 600
}

const book2 = {
    id:2,
    name: "Secret",
    author: "Ronda",
    ratings: 8.5,
    pages: 400
}

const book3 = {
    id:3,
    name: "Rich man and poor man",
    author: "Robert Kiosaki",
    ratings: 9,
    pages: 500
}

const booksArray = [book1,book2];
const booksAfterAdd = [...booksArray,book3];
const booksAfterDelete = booksAfterAdd.filter((book)=>book.id !== 2);
const booksAfterUpdate = booksAfterAdd.map((book)=>{
    return (book.id === 1 ? {...book,pages:650,ratings:9.7} : book);
})

console.log(booksAfterUpdate);

//Asynchronous
fetch('https://jsonplaceholder.typicode.com/todos/5')
.then((response) => response.json())
.then((data) => console.log(data));

// best way for asynchronous
async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
    const data = await response.json();
    console.log(data);
    return data;
}

console.log(getTodos()); // it will always print promise<pending>
console.log("kishore");
