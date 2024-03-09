
interface TotalAmountProps{
    actualBill:number,
    tips:number
}

const TotalAmount = ({actualBill,tips}:TotalAmountProps) => {

    const totalBill = actualBill+tips;

    return (
        <div>
            <p>You pay ${totalBill} (${actualBill} + ${tips} tip)</p>
        </div>
    );
}

export default TotalAmount;