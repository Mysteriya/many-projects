import React from 'react'
import classes from './MyWindow.module.scss'

type TypeMyWindowProp = {
    children: React.ReactNode;
    isWindow?: boolean
}

const MyWindow:React.FC<TypeMyWindowProp> = ({children, isWindow}) => {
  return (
    <>
        { isWindow &&
            <div
                className={classes.background}
            >
                <div className={classes.window} onClick={event => event.stopPropagation()}>
                    <div className={classes.content}>
                        {children}
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default MyWindow

