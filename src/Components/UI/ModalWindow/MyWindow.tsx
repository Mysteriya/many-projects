import React from 'react'

import classes from './MyWindow.module.scss'

type TypeMyWindowProp = {
    children: any

    isModalActive: boolean
    setIsModalActive: (prop: boolean) => void
}

const MyWindow:React.FC<TypeMyWindowProp> = (props) => {

  return (
    <>
        { props.isModalActive &&
            <div 
                className={classes.background}
            >
                <div className={classes.window} onClick={event => event.stopPropagation()}>
                    <div className={classes.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default MyWindow

