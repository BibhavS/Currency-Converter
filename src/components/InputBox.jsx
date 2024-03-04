import React, { useId } from 'react'

function InputBox({
  label,
  amountValue,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  currencyDisabled = false,
  amountDisabled = false
}) {
  const id = useId();
  return (
    <>
      <div className='bg-white p-5 text-xl rounded-xl flex'>
        <div className='w-1/2'>
          <label htmlFor={id} className='text-black/60 mb-4 inline-block'>{label}</label>
          <input type= 'number'
            id={id}
            placeholder='Amount'
            value={amountValue}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} 
            className='p-1 rounded-lg outline-none'
            disabled={amountDisabled}
          />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
          <p className='text-black/60 mb-4 w-full'>Currency Type</p>
          <select className='rounded-lg cursor-pointer outline-none bg-gray-100 p-1'
            value={selectedCurrency}
            onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>{currency}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox