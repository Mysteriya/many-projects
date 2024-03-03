import React from 'react'
import classes from './MyWindow.module.scss'

type TypeMyWindowProp = {
    children: React.ReactNode;
    isWindow?: boolean;

    width?: number;
    height?: number;
}

const MyWindow:React.FC<TypeMyWindowProp> = ({children, isWindow, width, height}) => {
  return (
    <>
        { isWindow &&
            <div
                className={classes.background}
            >
                <div className={classes.window} onClick={event => event.stopPropagation()} style={{width: width, height: `${height}%`}}>
                    <div className={classes.content__window}>
                        {children}
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default MyWindow

