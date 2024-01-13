import React from 'react'

export default function Calculate() {
    const [ result, setResult ] = React.useState<number>()

    const [ value1, setValue1] = React.useState<number>(0)
    const [ value2, setValue2] = React.useState<number>(0)
    const [ selected, setSelected ] = React.useState<string>('+')

    const sign = {
        minus: "-",
        plas: "+",
        divide: "/",
        multiply: "*",
    }

    const calc = ( value1: number, value2: number, selected: string): number | undefined => {

        switch (selected) {
            case sign.minus:
                return value1 - value2

            case sign.plas:
                return value1 + value2 

            case sign.divide:
                return value1 / value2

            case sign.multiply:
                return value1 * value2
        
            default:
                break;
        }
    }

  return (
    <div className='app-block-calculator'>

        <div className='calculator-block'>
            <input onChange={(event) => setValue1(Number(event.target.value))} type='text' placeholder='Число №1'/>

            <select value={selected} onChange={(event) => setSelected(event.target.value)}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>


            <input onChange={(event) => setValue2(Number(event.target.value))} type='text' placeholder='Число №2'/>

            <button onClick={() => setResult(calc(value1, value2, selected))}>Посчитать</button>
            
            <div className='result'>
                <p>{value1}</p>
                <p>{selected}</p>
                <p>{value2}</p>
                <p>=</p>
                <p>{result}</p>
            </div>
        </div>
    </div>
  )
}