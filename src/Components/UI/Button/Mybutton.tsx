import React from 'react'

import classes from './MyButton.module.scss'

interface IMybuttonProps {
  children: React.ReactNode;
  onClick?: (arg?: any) => void;
}

const Mybutton:React.FC<IMybuttonProps> = (props) => {
  return (
    <button {...props} className={classes.MyButton}>
      {props.children}
    </button>
  )
}

export default Mybutton