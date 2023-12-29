import React from 'react'

type TypeBlockProps = {
    value: number;
    carrency: string;
    onChangeValue: (arg: number) => void;
    setSelectCurrency: (arg: string) => void;
}

const Block: React.FC<TypeBlockProps> = ({value, carrency, onChangeValue, setSelectCurrency}) => {

    const currencyDefault = ["AUD","AZN","GBP","AMD","AED","USD","EUR"]

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChangeValue(Number(event.target.value))
    }

  return (
    <div className='sideBlock'>
        <div>
            {currencyDefault.map((elem) =>
                <strong 
                    onClick={() => setSelectCurrency(elem)}
                    key={elem}
                    className={carrency === elem ? 'active' : ''}

                >{elem}</strong>
            )}
        </div> 

        <input
            value={value}
            onChange={event => onChangeInput(event)}
        />
    </div>
  )
}

export default Block