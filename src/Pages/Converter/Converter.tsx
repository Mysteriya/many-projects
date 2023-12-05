import React from 'react'
import Block from './Block'

function Converter() {
    const [firstInteger, setFirstInteger] = React.useState(0);
    const [secondInteger, setSecondInteger] = React.useState(0);

    const [carrencyFrom, setCarrencyFrom] = React.useState('USD');
    const [carrencyTo, setCarrencyTo] = React.useState('AUD');

    const ratesRef = React.useRef<any>({
        "AUD": 0.0165695,
        "AZN": 0.018748746,
        "GBP": 0.00872866,
        "AMD": 4.445096,
        "BYN": 0.0349013,
        "BGN": 0.01983505,
        "BRL": 0.05424788,
        "HUF": 3.85032997,
        "VND": 264.0152495,
        "HKD": 0.0860348,
        "GEL": 0.029806,
        "DKK": 0.075596,
        "AED": 0.0405027,
        "USD": 0.0110286657,
        "EUR": 0.01014437,
        "EGP": 0.340710859,
        "INR": 0.91943,
        "IDR": 171.20913,
        "KZT": 5.074828,
        "CAD": 0.014896425,
        "QAR": 0.040144359,
        "KGS": 0.98486266,
        "CNY": 0.078804,
        "MDL": 0.1959516,
        "NZD": 0.017748087,
        "NOK": 0.118633,
        "PLN": 0.04394928,
        "RON": 0.050412,
        "XDR": 0.008278166,
        "SGD": 0.014726586,
        "TJS": 0.12078257,
        "THB": 0.384689,
        "TRY": 0.318522,
        "TMT": 0.03860035,
        "UZS": 135.65355168,
        "UAH": 0.40211189,
        "CZK": 0.246920896,
        "SEK": 0.11532229699,
        "CHF": 0.0096214,
        "RSD": 1.188662,
        "ZAR": 0.206225,
        "KRW": 14.3813709,
        "JPY": 1.614046
    }) 

    // React.useEffect(() => {
    //     fetch('https://cdn.su/api/latest.json')
    //     .then((res) => res.json())
    //     .then((json) => {
    //         ratesRef.current = json
    //     }).catch(err => console.error(err))
    // }, [])

    const ConvertCurrency = (value: number) => {
        
        const price = value / ratesRef.current[carrencyFrom]
        const result = price * ratesRef.current[carrencyTo]

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