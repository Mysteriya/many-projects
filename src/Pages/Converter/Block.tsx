import React from 'react'

type TypeBlockProps = {
    value: number;
    carrency: string;
    onChangeValue: (arg: any) => any;
    setSelectCurrency: (arg: any) => any;
}

const Block: React.FC<TypeBlockProps> = ({value,carrency, onChangeValue, setSelectCurrency}) => {

    const currencyDefault = ["AUD","AZN","GBP","AMD","AED","USD","EUR"]

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
            onChange={event => onChangeValue(event.target.value)}
        />
    </div>
  )
}

export default Block