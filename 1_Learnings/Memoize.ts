function memoize(fn){
    const cache = new Map();
    return function(...args){
        const key = args.toString();
        if(cache.has(key))
            return cache.get(key);
        else{
            const value = fn(...args);
            cache.set(key,value);
            return value;
        }
    }
}

let callCount = 0;

const memoizedFunction = memoize((a,b)=>{
    callCount += 1;
    return (a + b);
});

console.log(memoizedFunction(1,2));
console.log(memoizedFunction(1,2));
console.log(memoizedFunction(1,2));
console.log(callCount);
