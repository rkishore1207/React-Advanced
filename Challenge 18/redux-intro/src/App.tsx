import AccountOperations from "./Features/Accounts/AccountOperations";
import BalanceDisplay from "./Features/Accounts/BalanceDisplay";
import CreateCustomer from "./Features/Customers/CreateCustomer";
import Customer from "./Features/Customers/CreateCustomer";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
