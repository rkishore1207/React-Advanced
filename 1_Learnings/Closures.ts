
const CounterClick = (value) => {
    let count = value;
    const Counter = () => {
        return count++;
    }
    return Counter;
}

const Count = CounterClick(34);

console.log(Count());
console.log(Count());
console.log(Count());
