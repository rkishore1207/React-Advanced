/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import './App.css';

function App() {

  const[money,setMoney] = useState<number>(0);
  const[sourceCurrency,setSourceCurrency] = useState<string>('');
  const[targetCurrenct,setTargetCurrency] = useState<string>('');
  const[convertedMoney,setConvertedMoney] = useState<number>(0);
  const[isLoader,setIsLoader] = useState<boolean>(false);
  const[isError,setIsError] = useState<string>('');

  useEffect(()=>{
    setIsError('');
    async function getCurrencyValue(){
      try {
        setIsLoader(true);
        const result = await fetch(`https://api.frankfurter.app/latest?amount=${money}&from=${sourceCurrency}&to=${targetCurrenct}`);
        const value = await result.json();
        if(value.message)
          throw new Error("Not found");
        setConvertedMoney((value.rates[`${targetCurrenct}`]).toFixed(2));
      } catch (err:any) {
        setIsError(err.message);
      } finally{
        setIsLoader(false);
      }
    }
    if(money < 0){
      setIsError('Value Should be Positive');
      return;
    }
    if(sourceCurrency !== '' && targetCurrenct !== '' && money)
      getCurrencyValue();
    else
      setConvertedMoney(0);
  },[sourceCurrency,targetCurrenct,money]);

  return (
    <div className="App">

      <h2>Currency Converter</h2>

      <input type="number" id="currency-input" value={money === 0 ? '' : money} onChange={(event)=>setMoney(Number(event.target.value))} placeholder="Enter Money.."/>
      
      <select className="currency-dropdown" value={sourceCurrency} onChange={(event)=>setSourceCurrency(event.target.value)}>
        <option value={''} disabled selected>Select...</option>
        <option value='INR'>INR</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
      </select>
      
      <select className="currency-dropdown" value={targetCurrenct} onChange={(event)=>setTargetCurrency(event.target.value)}>
        <option value={''} disabled selected>Select...</option>
        <option value='INR'>INR</option>
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
      </select>
      
      {isLoader && <Loader/>}
      {isError !== '' && <CustomError errorMessage={isError}/>}
      {!isLoader && !isError && <p><strong>{convertedMoney === 0 ? ''  : convertedMoney}</strong></p>}
      
    </div>
  );
}

export default App;

const Loader = () => {
  return(<div>
    <p>Loading...</p>
  </div>)
}

interface CustomErrorProps{
  errorMessage : string
}

const CustomError = ({errorMessage}:CustomErrorProps) => {
  return(<div>
    <p>❌ {errorMessage}</p>
  </div>)
}
