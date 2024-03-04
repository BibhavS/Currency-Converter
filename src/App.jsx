import React, { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('npr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <>
      <div className='flex flex-wrap flex-col items-center mt-10'>
        <h1 className='text-4xl font-medium text-indigo-800'>Currency Converter</h1>
        <div className='mt-16 p-10 bg-indigo-300 max-w-xl rounded-2xl'>
           <form onSubmit={(e) =>{
            e.preventDefault();
            convert();
           }}>
            <div className='w-full m-2'>
              <InputBox
                label = 'from'
                amount = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => setFrom(currency)}
                onAmountChange = {(amount) => setAmount(amount)}
                selectedCurrency = {from}
              />
            </div>
           </form>
        </div>
      </div>
    </>
  )
}

export default App
