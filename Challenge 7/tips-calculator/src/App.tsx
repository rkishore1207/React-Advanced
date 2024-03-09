import { useState } from "react";
import InputField from "./Components/InputField/InputField";
import Tips from "./Components/Tips/Tips";
import TotalAmount from "./Components/TotalAmount/TotalAmount";
import Reset from "./Components/Reset/Reset";

function App() {

  const [actualBill,setActualBill] = useState<number>(0);
  const [selfTip,setSelfTip] = useState<number>(0);
  const [friendTip,setFriendTip] = useState<number>(0);
  const totalTip = (actualBill * (selfTip + friendTip)/2) / 100 ;

  return (
    <div className="App">
      <InputField onClick = {setActualBill} actualBill={actualBill}/>
      <Tips onClick={setSelfTip} tipsAmount = {selfTip}><span>How did you like the Service?</span></Tips>
      <Tips onClick={setFriendTip} tipsAmount = {friendTip}><span>How did your friend like the Service?</span></Tips>
      {actualBill > 0 &&
        <>
          <TotalAmount actualBill={actualBill} tips={totalTip}/>
          <Reset onActualBillClear={setActualBill} onFriendTipClear={setFriendTip} onSelfTipClear={setSelfTip}/>
        </>
      }
    </div>
  );
}

export default App;
