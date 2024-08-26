function expect(input1){
    const toBe = (input2) => {
        if(input1 === input2)
            return true;
        throw new Error("Not Equal");
    }

    const notToBe = (input2) => {
        if(input1 !== input2)
            return true;
        throw new Error("Equal");
    }

    return{
        toBe,
        notToBe
    }
}

const result = () =>{
    try{
        return expect("Hello").toBe("HelloWorld");
    }
    catch(error){
        return error;
    }
};

console.log(result());