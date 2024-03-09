
interface ResetProps{
    onActualBillClear:(value:number) => void
    onSelfTipClear:(value:number) => void
    onFriendTipClear:(value:number) => void
}

function Reset({onSelfTipClear,onFriendTipClear,onActualBillClear}:ResetProps) {

    const handleClear = () => {
        onSelfTipClear(0);
        onFriendTipClear(0);
        onActualBillClear(0);
    }

    return (
        <div>
            <button onClick={handleClear}>Reset</button>
        </div>
    );
}

export default Reset;