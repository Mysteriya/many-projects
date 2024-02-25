import React from 'react'

import classes from './MySelect.module.scss'

type TypeMySelectProps = {
    options: typeSelect[],

    defaultValue?: string,
    value?: string,

    setSelect: (event: string) => void,
}

type typeSelect = {
    name: string;
    value: string
}

const MySelect:React.FC<TypeMySelectProps> = ({options, defaultValue, value, setSelect}) => {
  return (
    <select className={classes.root}
        value={value}
        onChange={event => setSelect(event.target.value)}
    >
        <option disabled>{defaultValue}</option>
        
        {options.map((option) => 
            <option 
                className={classes.name}

                key={option.value}
                value={option.value}
            >
                {option.name}
            </option>
        )}
    </select>
  )
}

export default MySelect