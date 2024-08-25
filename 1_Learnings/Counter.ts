function Counter(init){
    let value = init;

    const increment = () => {
        return ++value;
    }

    const decrement = () => {
        return --value;
    }

    const reset = () => {
        value = init;
        return value;
    }

    return{
        increment,
        decrement,
        reset
    }
}

const createCounter = Counter(2);
console.log(createCounter.increment());
console.log(createCounter.reset());
console.log(createCounter.decrement());
