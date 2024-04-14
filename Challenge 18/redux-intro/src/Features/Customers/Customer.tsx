import { useSelector } from "react-redux";
import { ReduxState } from "../../store";

function Customer() {

    const customer = useSelector((store:ReduxState)=>store.customer);

    return <h2>👋 Welcome, {customer.fullName}</h2>;
}
  
export default Customer;