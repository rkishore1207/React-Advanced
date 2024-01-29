# Fundamentals of React
## Why we don't go for other frameworks?
* Initially web was developed by complete javascript with j query library.
* In that, there arises two big problems.
    1. Requires lots of DOM manipulation and traversing.
    2. Data(state) is usally stored in the DOM and very hard to use and create lot of bugs.
## Why do frontend frameworks exists?
* Keeping a user interface to **sync with the data** is realy hard and requires lot of work.
## VS cose Extensions
1. **Prettier**
* To make our code looks good, give correct intendations, remove extra spaces or lines.
2. **EsLint**
* Check all the errors and indicate instantially.
3. **Mateial Icons** -> for giving good looking icons for the folders in the source tab.
-----
* To make this work, in the settings type **default formatter** and select `prettier`.
* Type **eslint run** and select `onSave`. 
## Creating new react app
* `npx create-react-app` is the old command to create new react app and it doesn't have updated packages.
* So, we go for `vite` it would include all the updated packages and ask the recommandation for some of the extensions such as ESlint, prettier, etc.
* And also HMR and bundling process are also fast when compared with the old command procedure.
* Hence, it recommanded to use **VITE** for real time application and **create-react-app** for tutorials or learnings.

## Javascripts
* During destructuring we could give different variables for elements in the array, but i want to get only first two elements and rest elements are i want as array itself.
* Then in this case **REST OPERATOR** came into picture, it will occupy all the remaining elements into one array.
```javascript
const array = [1,2,3,4,5];
let [firstValue,secondValue,...remainingValues] = array;

//output is => 1 2 [ 3, 4, 5 ]
```
* **Spread Operator** is used to hold the previous value and assign the new value without losing the existed value.
```javascript
const array = [1,2,3,4,5];
const newArray = [...array,6];
```
* We can update existing property in a object as well as we can add new property to it by `spread operator`.
```javascript
const object = {
    uid:'0000000',
    name:'Kishore',
    age:21
}

const newObject = {
    ...object,
    //adding new property
    phone:'8940804555',
    //updating existing property
    age:22};
```

### Arrow function and Short Circuit (&&,||,??)
* In arrow function, if body of the function is one line then **no need to type return keyword**, it will automatically return it.
* But if more than one line, **we should explicitly specify the return** statement or else it will throw error.
* Don't use arrow function for all functions, if the function has one line implementation then use arrow function.
```javascript
//To get year from date datatype
const getYear = (date) => date.split(" ")[3];
console.log(getYear(new Date().toDateString()));
```
#### Logical And
- All the short circuits took **two operands and one operator**.
- falsy values are `0,'',null,undefined,false`.
```javascript
true && "String" // string
false && "String" //false
```
#### Logical Or
```javascript
true || "String" // false
false || "String" //string
```
#### Null collasing
```javascript
null ?? "String" // string
true ?? "String" //true
```
### Optional Chaining
* If we want to access one object's property but if it's not exist, code will throw error.
* To handle this use Optional chaining.
```javascript
const getTotal = () => object.age + object?.phone || 0;
console.log(getTotal()); //age value only (21)
```

### Javascript Functions
* We could use **object and array** as starter in `reduce` method not only the integer.
* Unlike sort all the functions return or produce new array but sort only directly modify the original array.
* We don't have to focus on how *a-b* will work, if we use that it will sort the array.
```javascript
const array = [3,7,4,2,9];
const sortedArrayAsc = array.sort((a,b)=>a-b);//ascending
const sortedArrayDesc = array.sort((a,b)=>b-a);// descending
// In the above way will change the original array
const newArray = array.slice().sort((a,b)=>a-b);
// we can also able to sort the object list.
```
* In javascript, arrays are immutable so if we want to add, delete, or update we could do that in the new array.
### Asynchronous 
```javascript
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((data) => console.log(data)); 
```

## React-Component
* First we need to learn how to split the web page as **components**, we need to visualize web page as components.
* We would also place the images or assets in the `public` folder because **webpack (Module Bundler)** always looks images automatically in the public folder in react.
* Automatically VS code connect our code to the git hub repo and it will notify the changes by lines.
* We can get rid of this by -> settings -> type Diff decorations -> change all to none.
* Browser will only understand html and javascript, hence in the background our react code is converted into nested javascript format by `BABEL` tool.

### Javascript vs React
* In the traditional way **One Technology per file** that is html, Css, javascript are all in three sparated files.
* Data and logics (html,javascripts) are **tightly coupled**.
* But it is very hard to dump everything in one file hence React come up with **One component per file**.
* One component have `Data, Logics and Appearance`.

## State Management
* Each hooks return **array of length 2** and 0th index is the `value` and 1st index is the `function`.
* Hence we need to destructure it and store it in the variables.
* Manually updating the state variable is the **bad practice** because, in react everything is `immutable` so we should update the state by **setter function** only.
```javascript
const [test,setTest] = useState({name:"Kishore"});
test.name = "Mathan"; //bad Practice
setTest({name:"Mathan"}); // we should update the object' state like this only
```
* React `Reacts` the state changes by re-rendering the component UI.
* If we want to pass one state to another component, but that component is **not the child** of this component.
* This case we would use **Lifting up technique**.
* We could write those props passing state in the **common parent** for both the siblings and pass the value as `props` to the respected component.

## Derived State
* If some variables depend upon the **already existed state** then we should prefer **Regular variables** not again the state variable.
```javascript
const[cart,setCart] = [
    {id:1,name:"Watch",price:2000},
    {id:2,name:"Shoe",price:750}
];
// bad practice because if cart values changes it makes three times rerendering
const [totalCount,setTotalCount] = cart.length;
const [totalPrice,setTotalPrice] = cart.reduce((acc,value)=>{
    const updatedValue = acc + value.price;
    return updatedValue;
},0);

// good practice -> using regular variables
const totalCount = cart.length;
const totalPrice = cart.reduce((acc,value)=>{
    const updatedValue = acc + value.price;
    return updatedValue;
},0);
```
## Children Props
* The children prop allow us to pass `JSX` into an element (besides regular props).
* An Empty **hole** that can be filled by any *JSX the receives* as children.
```javascript
<Button bgColor={'black'}>
    <span>Next</span><span>👉</span>
</Button>

//Component
const Button = ({bgColor,children}) => {
    <button style={{background:bgColor}}>
        {children}
    </button>
}
```