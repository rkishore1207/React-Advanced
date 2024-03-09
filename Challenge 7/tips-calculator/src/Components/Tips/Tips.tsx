/* eslint-disable react-hooks/exhaustive-deps */

interface TipsProps{
    children:any,
    onClick:(value:number) => void,
    tipsAmount:number
}

const Tips = ({children,onClick,tipsAmount}:TipsProps) => {

    return (
        <div>
            {children}
            <select value={tipsAmount} onChange={(event)=>onClick(Number(event.target.value))}>
                <option value={0}>DisSatisfied (0%)</option>
                <option value={5}>It was Ok (5%)</option>
                <option value={10}>It was Good (10%)</option>
                <option value={20}>Absolutely Amazing (20%)</option>
            </select>
        </div>
    );
}

export default Tips;