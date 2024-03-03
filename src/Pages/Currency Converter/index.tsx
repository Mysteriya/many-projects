import React from 'react'
import Block from './Block';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Loader from '../../Components/UI/Loader/Loader';

export function Converter() {
    const leftText = useSelector((state: RootState) => state.languageSlice.items.page?.converter.leftSideText)
    const rightText = useSelector((state: RootState) => state.languageSlice.items.page?.converter.rightSideText)
    const buttonText = useSelector((state: RootState) => state.languageSlice.items.page?.converter.buttonText)
    
    const [isMount, setIsMount] = React.useState<boolean>(false)

    const [fromInput, setFromInput] = React.useState<string>('')
    const [toInput, setToInput] = React.useState<string>('')

    const [carrencyFrom, setCarrencyFrom] = React.useState<string>('USD');
    const [carrencyTo, setCarrencyTo] = React.useState<string>('AUD');

    const carrencyRef: any  = React.useRef({});

    React.useEffect(() => {
        fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        .then((res) => res.json())
        .then((json) => {
            carrencyRef.current = json.Valute
            setIsMount(!isMount)
        }).catch(err => console.error(err))
    }, [])

    const ConvertCurrency = (value: number = 1) => {
        const price = value / carrencyRef.current[carrencyFrom].Value!;
        const result = price * carrencyRef.current[carrencyTo].Value!;

        setToInput(String(Number(result.toFixed(3))))
    }

    return (
        <div className='convert_content'>
            <div className='converter_block'>

                {isMount ?
                    <>
                        <Block 
                            carrencyTo={carrencyTo} 
                            input={fromInput} 
                            setInput={setFromInput} 
                            mainCarrency={carrencyFrom} 
                            setMainCarrency={setCarrencyFrom} 
                            carrencyRef={carrencyRef.current}
                            sideText={leftText}
                            disabled={false}
                        />
                    
                        <div>
                            <button onClick={() => ConvertCurrency(Number(fromInput))} className='button__converter'>{buttonText}</button>
                        </div>
                    
                        <Block 
                            carrencyTo={carrencyFrom} 
                            input={toInput} 
                            setInput={setToInput} 
                            mainCarrency={carrencyTo} 
                            setMainCarrency={setCarrencyTo} 
                            carrencyRef={carrencyRef.current}
                            sideText={rightText}
                            disabled={true}
                        />
                    </>
                    :    
                    <Loader/>
                }
            </div>
        </div>
    ) 
}

export default Converter;