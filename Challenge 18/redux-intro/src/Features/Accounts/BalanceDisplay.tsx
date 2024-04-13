import { useSelector } from "react-redux";
import { ReduxState } from "../../store";

function formatCurrency(value:any) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }
  
  function BalanceDisplay() {

    const account = useSelector((state:ReduxState)=>state.account);

    return <div className="balance">{formatCurrency(account.balance)}</div>;
  }
  
  export default BalanceDisplay;
  