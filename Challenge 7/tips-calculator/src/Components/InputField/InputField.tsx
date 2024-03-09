/* eslint-disable react-hooks/exhaustive-deps */

interface InputFieldProps{
    onClick:(value:number)=> void,
    actualBill:number
}

const InputField = ({onClick,actualBill}:InputFieldProps) => {

    return (
        <div>
            <span>How much was the Bill?</span>
            <input type="number" 
                   value={actualBill === 0 ? '' : actualBill} 
                   className="bill-input-field"
                   placeholder="Bill Amount"
                   onChange={(event)=>onClick(Number(event.target.value))}
            />
        </div>
    );
}

export default InputField;