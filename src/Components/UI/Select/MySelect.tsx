import React from 'react'

import classes from './MySelect.module.scss'

type TypeMySelectProps = {
    options: object[],

    defaultvalue: string,
    sort: string,

    setSelect: (event: string) => void,
}


const MySelect:React.FC<TypeMySelectProps> = ({options, defaultvalue, sort, setSelect}) => {

  return (
    <select className={classes.root}
        value={sort}
        onChange={event => setSelect(event.target.value)}
    >
        <option disabled>{defaultvalue}</option>
        
        {options.map((option: any) => 
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