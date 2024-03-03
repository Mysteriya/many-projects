import React from 'react'
import { evaluateExpression } from '../../utils/converterStrings'

export default function Calculate() {
  let [numbers, setNumbers] = React.useState('')

  let [result, setResult] = React.useState('0')

  function clearAll(){
    setNumbers('')
    setResult('0')
  }

  function fillNumbers(number: any){
    const text = number.currentTarget.textContent

    setNumbers(numbers += text)
    setResult(numbers)
  }

  function setSign(sign: any){
    const text = sign.currentTarget.textContent
    setNumbers(numbers += ` ${text} `)
    setResult(numbers)
  }

  function equals(){
    var result = evaluateExpression(numbers);

    setResult(result)
    setNumbers('')
  }

  return (
    <div className='calculator__content'>
      <div className='calculator__block'>
        <div className='output'>{result}</div>
        <div className='buttons'>
          <div className='btn gray' onClick={clearAll}>ac</div>
          <div className='btn gray'>+/-</div> 
          <div className='btn gray'>%</div> 
          <div className='btn  orange' onClick={(event) => setSign(event)}>/</div>  

          <div className='btn' onClick={(event) => fillNumbers(event)}>7</div>
          <div className='btn' onClick={(event) => fillNumbers(event)}>8</div> 
          <div className='btn' onClick={(event) => fillNumbers(event)}>9</div> 
          <div className='btn orange' onClick={(event) => setSign(event)}>*</div>  

          <div className='btn' onClick={(event) => fillNumbers(event)}>4</div>
          <div className='btn' onClick={(event) => fillNumbers(event)}>5</div> 
          <div className='btn' onClick={(event) => fillNumbers(event)}>6</div> 
          <div className='btn orange' onClick={(event) => setSign(event)}>-</div>  

          <div className='btn' onClick={(event) => fillNumbers(event)}>1</div>
          <div className='btn' onClick={(event) => fillNumbers(event)}>2</div> 
          <div className='btn' onClick={(event) => fillNumbers(event)}>3</div> 
          <div className='btn orange' onClick={(event) => setSign(event)}>+</div>  

          <div className='btn zero' onClick={(event) => fillNumbers(event)}>0</div>
          <div className='btn'>.</div> 
          <div className='btn orange' onClick={() => equals()}>=</div> 
        </div>
      </div>
    </div>
  )
}