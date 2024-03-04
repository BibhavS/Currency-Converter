import React, { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('npr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to]);
  }
  
  const swap = () =>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
    setAmount(0);
  }


  return (
    <>
      <div className='flex flex-wrap flex-col items-center mt-10'>
        <h1 className='text-4xl font-medium text-indigo-800'>Currency Converter</h1>
        <div className='mt-16 p-10 bg-indigo-200 max-w-xl rounded-2xl'>
           <form onSubmit={(e) =>{
            e.preventDefault();
            convert();
           }}
           className='flex flex-col items-center'>
            <div className='w-full m-2'>
              <InputBox
                label = 'From'
                amountValue = {amount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => setFrom(currency)}
                onAmountChange = {(amount) => setAmount(amount)}
                selectedCurrency = {from}
              />
            </div>
            <button className='text-2xl my-1 px-6 py-2 rounded-xl bg-indigo-600 text-white' onClick={()=>{
              swap();
              convert();
            }}>Swap</button>
            <div className='w-full m-2'>
              <InputBox
                label = 'To'
                amountValue = {convertedAmount}
                currencyOptions = {options}
                onCurrencyChange = {(currency) => setTo(currency)}
                selectedCurrency = {to}
                amountDisabled={true}
              />
            </div>
            <button type="submit"
            className='mt-8 px-8 py-3 rounded-xl bg-indigo-600 text-white text-2xl cursor-pointer'>
              Convert   {from.toUpperCase()}   to   {to.toUpperCase()}
           </button>
           </form>
        </div>
      </div>
    </>
  )
}

export default App
