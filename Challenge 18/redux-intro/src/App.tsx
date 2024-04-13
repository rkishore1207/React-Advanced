import { useSelector } from "react-redux";
import AccountOperations from "./Features/Accounts/AccountOperations";
import BalanceDisplay from "./Features/Accounts/BalanceDisplay";
import CreateCustomer from "./Features/Customers/CreateCustomer";
import Customer from "./Features/Customers/Customer";
import { ReduxState } from "./store";

function App() {

  const customer = useSelector((state:ReduxState)=>state.customer);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {
        !customer.fullName ? <CreateCustomer/> :
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      }
    </div>
  );
}

export default App;
