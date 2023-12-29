import React from 'react'
import Block from './Block'

function Converter() {
    const [firstInteger, setFirstInteger] = React.useState<number>(0);
    const [secondInteger, setSecondInteger] = React.useState<number>(0);

    const [carrencyFrom, setCarrencyFrom] = React.useState<string>('USD');
    const [carrencyTo, setCarrencyTo] = React.useState<string>('AUD');

    const ratesRef = React.useRef<any>({})

    React.useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => res.json())
        .then((json) => {
            ratesRef.current = json.Valute
        }).catch(err => console.error(err))
    }, [])

    const ConvertCurrency = (value: number) => {
        
        const price = value / ratesRef.current[carrencyFrom].Value
        const result = price * ratesRef.current[carrencyTo].Value

        setFirstInteger(value)
        setSecondInteger(Number(result.toFixed(3)))
    }


  return (
    <div className='block-convert'>
        <div className='converter'>
            <Block value={firstInteger} onChangeValue={setFirstInteger} carrency={carrencyFrom} setSelectCurrency={setCarrencyFrom}/>
            <Block value={secondInteger} onChangeValue={setSecondInteger} carrency={carrencyTo} setSelectCurrency={setCarrencyTo}/>

            <button
                onClick={() => ConvertCurrency(firstInteger)}
            >
            Converter
            </button>
        </div>
    </div>
  )
}

export default Converter