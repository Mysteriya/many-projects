import React from 'react';

interface IBlockProps {
    mainCarrency: string;
    setMainCarrency: (arg: string) => void;

    carrencyTo: string;

    input: string;
    setInput: (arg: string) => void;

    carrencyRef: any;

    sideText?: string;
    disabled: boolean;
}

const Block: React.FC<IBlockProps> = ({mainCarrency, setMainCarrency, input, setInput, carrencyTo, carrencyRef, sideText, disabled}) => {
    const carrencyDefault: Array<string> = ['USD', 'EUR', "GBP", "AED", "AUD", "CNY"];

    const abc = ():number => {
        if(true){
            const price = 1 / carrencyRef[mainCarrency].Value!;
            const result = price * carrencyRef[carrencyTo].Value!; 
                            
            return Number(result.toFixed(3));
        }
    }

    return (
        <div className='convert_area'>
            <div className='currency_list'>
                {carrencyDefault.map((item) => 
                    <div 
                        key={item} 
                        className={`carrency ${item === mainCarrency && 'active'}`} 
                        onClick={() => setMainCarrency(item)}
                    >
                        {item}
                    </div>
                )}
            </div>
            <div className='inputSide'>
                <input 
                    disabled={disabled}
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    type='text' 
                    placeholder={sideText}
                    className='input__converter'
                />
                <p>1 {mainCarrency} ={'>'} {abc()} {carrencyTo}</p>
            </div>
        </div>
    );
};

export default Block;